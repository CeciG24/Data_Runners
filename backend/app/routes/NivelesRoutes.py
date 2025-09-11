from flask import Blueprint, request, jsonify
from ..models import db
from ..models.niveles import Nivel
from ..models.respuestas import Respuestas
from ..models.fases import Fase

niveles_bp = Blueprint("niveles", __name__)

@niveles_bp.route('/<int:id>/niveles', methods=['GET'])
def get_niveles_by_fase():
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
    
@niveles_bp.route('/niveles/<int:id>', methods=['GET'])
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
    
@niveles_bp.route('/niveles/<int:id>', methods=['POST'])
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