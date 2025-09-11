from flask import Blueprint, request, jsonify
from flask_jwt_extended import get_jwt_identity, jwt_required
from .. import db
from ..models.niveles import Nivel
from ..models.respuestas import Respuestas
from ..models.progreso import Progreso

niveles_bp = Blueprint("niveles", __name__,url_prefix="/niveles")

@niveles_bp.route('/fase/<int:id>', methods=['GET'])
def get_niveles_by_fase(id):
    try:
        niveles = Nivel.query.filter_by(id_fase=id).all()
        return jsonify({
            "niveles": [{
                "id_nivel": n.id_nivel,
                "titulo": n.titulo,
                "orden": n.orden
            } for n in niveles]
        }), 200
    except Exception as e:
        return jsonify({"error": f"Error al obtener niveles: {str(e)}"}), 500
    
@niveles_bp.route('/<int:id>', methods=['GET'])
def get_nivel_by_id(id):
    try:
        nivel = Nivel.query.get_or_404(id)
        return jsonify({
            "nivel": {
                "id_nivel": nivel.id_nivel,
                "titulo": nivel.titulo,
                "enunciado": nivel.enunciado,
            } 
        }), 200
    except Exception as e:
        return jsonify({"error": f"Error al obtener nivel: {str(e)}"}), 500
    
@niveles_bp.route('/<int:id>/resolver', methods=['POST'])
def resolver_nivel(id):
    try:
        data = request.get_json()
        # Validar datos obligatorios
        if not data:
            return jsonify({"error": "Faltan datos obligatorios"}), 400

        query_usuario=data["query_usuario"]
        respuesta = Respuestas.query.filter_by(id_nivel=id).first()

        if respuesta and (respuesta.sql_correcta == query_usuario):
            feedback = respuesta.feedback
        else:
            feedback = "La consulta no es correcta, intenta de nuevo"
        
        return jsonify({
            "success": True,
            "nivel":id,
            "query": query_usuario,
            "feedback": feedback,
            "message": "Solucion enviada exitosamente",
        }), 200
        
    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        }), 500
    
@niveles_bp.route("/disponibles/<int:fase_id>", methods=["GET"])
@jwt_required()
def niveles_disponibles(fase_id):
    user_id = int(get_jwt_identity())
    if not user_id:
        return jsonify({"error": "user_id es requerido"}), 400

    # 1. Todos los niveles de la fase
    niveles = Nivel.query.filter_by(id_fase=fase_id).order_by(Nivel.orden).all()

    # 2. Último nivel completado del usuario en esa fase
    ultimo_completado = (
        db.session.query(Nivel.orden)
        .join(Progreso, Progreso.id_nivel == Nivel.id_nivel)
        .filter(Progreso.id_usuario == user_id, Progreso.completado == True, Nivel.id_fase == fase_id)
        .order_by(Nivel.orden.desc())
        .first()
    )

    if ultimo_completado:
        max_orden = ultimo_completado[0] + 1
    else:
        max_orden = 1  # desbloquea el primer nivel si no completó ninguno

    # 3. Marcar niveles como desbloqueados o no
    niveles_list = []
    for nivel in niveles:
        niveles_list.append({
            "id_nivel": nivel.id_nivel,
            "titulo": nivel.titulo,
            "orden": nivel.orden,
            "desbloqueado": nivel.orden <= max_orden
        })

    return jsonify(niveles_list)