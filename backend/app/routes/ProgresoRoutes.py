from datetime import datetime, timedelta
from flask_jwt_extended import jwt_required, get_jwt_identity

from .. import db
from ..models import Progreso
from flask import Blueprint, request, jsonify


progreso_bp = Blueprint('progreso', __name__, url_prefix='/progreso')

@progreso_bp.route('/', methods=['GET'])
@jwt_required()
def loadProgreso():
    user_id = int(get_jwt_identity())  # obtenemos el id del token
    p = Progreso.query.filter_by(id_usuario=user_id).first()
    return jsonify({
        "id_progreso": p.id_progreso,
        "id_usuario": p.id_usuario,
        "id_nivel": p.id_nivel,
        "completado": p.completado,
        "intentos": p.intentos,
        "ultima_vez": p.ultima_vez,
    })


@progreso_bp.route('/save', methods=['POST'])
@jwt_required()
def saveOrUpdateProgreso():
    try:
        user_id = int(get_jwt_identity())
        data = request.get_json()

        id_nivel = data.get("id_nivel")
        completado = data.get("completado", False)
        intentos = data.get("intentos", 1)

        if not id_nivel:
            return jsonify({"error": "El campo id_nivel es obligatorio"}), 400

        # Buscar si ya existe progreso para ese usuario y nivel
        progreso = Progreso.query.filter_by(id_usuario=user_id, id_nivel=id_nivel).first()

        if progreso:
            # Actualizamos
            progreso.completado = completado
            progreso.intentos = intentos
            progreso.ultima_vez = datetime.utcnow()
            message = "Progreso actualizado correctamente"
        else:
            # Creamos nuevo
            progreso = Progreso(
                id_usuario=user_id,
                id_nivel=id_nivel,
                completado=completado,
                intentos=intentos,
                ultima_vez=datetime.utcnow()
            )
            db.session.add(progreso)
            message = "Progreso registrado correctamente"

        db.session.commit()

        return jsonify({
            "message": message,
            "progreso": {
                "id_progreso": progreso.id_progreso,
                "id_usuario": progreso.id_usuario,
                "id_nivel": progreso.id_nivel,
                "completado": progreso.completado,
                "intentos": progreso.intentos,
                "ultima_vez": progreso.ultima_vez
            }
        }), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": f"Error al guardar el progreso: {str(e)}"}), 500

