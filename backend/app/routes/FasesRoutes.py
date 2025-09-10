from flask import Blueprint, request, jsonify
from ..models import db
from ..models.fases import Fase

fases_bp = Blueprint("fases", __name__)

@fases_bp.route('/', methods=['GET'])
def get_fases():
    try:
        fases = Fase.query.all()
        return jsonify({
            "fases": [{
                "id_fase": f.id_fase,
                "nombre": f.nombre,
                "descripcion": f.descripcion,
                "orden": f.orden
            } for f in fases]
        }), 200
    except Exception as e:
        return jsonify({"error": f"Error al obtener fases: {str(e)}"}), 500