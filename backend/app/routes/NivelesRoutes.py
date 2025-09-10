from flask import Blueprint, request, jsonify
from ..models import db
from ..models.niveles import Nivel
from ..models.respuestas import Respuestas

niveles_bp = Blueprint("niveles", __name__)

@niveles_bp.route('/', methods=['GET'])
def get_niveles_by_fase():
    try:
        fase_id = request.args.get("fase_id")
        niveles = Nivel.query.filter_by(id_fase=fase_id).all()
        return jsonify({
            "fases": [{
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