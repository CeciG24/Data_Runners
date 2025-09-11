from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required

from .. import db
from ..models.fases import Fase

fases_bp = Blueprint("fases", __name__,url_prefix="/fases")

@fases_bp.route('/', methods=['GET'])
@jwt_required()
def get_fases():
    try:
        fases = Fase.query.all()
        return jsonify({
            "fases": [{
                "id_fase": f.id_fase,
                "nombre": f.nombre,
                "orden": f.orden
            } for f in fases]
        }), 200
    except Exception as e:
        return jsonify({"error": f"Error al obtener fases: {str(e)}"}), 500