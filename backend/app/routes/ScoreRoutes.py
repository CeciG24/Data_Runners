from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

from ..models.usuario import Usuario
from ..models.score import Score
from .. import db
from datetime import datetime

scores_bp = Blueprint("scores", __name__, url_prefix='/score')

@jwt_required()
@scores_bp.route("/", methods=["GET"])
def get_score():
    try:
        user_id = int(get_jwt_identity()) 

        # Buscar usuario
        user = Usuario.query.get(user_id)
        if not user:
            return jsonify({"error": "Usuario no encontrado"}), 404

        # Buscar score del usuario
        score = Score.query.filter_by(id_usuario=user_id).first()
        if not score:
            return jsonify({"error": "Score no encontrado para este usuario"}), 404

        return jsonify(
            {
                "Usuario": user.nombre,
                "Puntos totales": score.puntos_totales,
                "Niveles superados": score.niveles_superados
            }
        ), 200
    except Exception as e:
        return jsonify({"error": f"Error al obtener niveles: {str(e)}"}), 500

@jwt_required()
@scores_bp.route("/", methods=["POST"])
def post_score():
    try:
        user_id = int(get_jwt_identity())  # obtenemos el id del token
        user = Usuario.query.get(user_id)

        if not user:
            return jsonify({"error": "Usuario no encontrado"}), 404

        data = request.get_json()
        puntos = data.get("puntos", 0)
        superado = data.get("superado", False)

        # Buscar si ya existe un registro de Score
        score = Score.query.filter_by(id_usuario=user_id).first()

        if not score:
            # Si no existe, lo creamos
            score = Score(
                id_usuario=user_id,
                puntos_totales=puntos,
                niveles_superados=1 if superado else 0
            )
            db.session.add(score)
        else:
            # Si existe, actualizamos
            score.puntos_totales += puntos
            if superado:
                score.niveles_superados += 1
            score.actualizado_en = datetime.utcnow()

        db.session.commit()

        return jsonify({
            "message": "Score actualizado correctamente",
            "usuario": user.nombre,
            "puntos_totales": score.puntos_totales,
            "niveles_superados": score.niveles_superados
        }), 200

    except Exception as e:
        return jsonify({"error": f"Error al registrar score: {str(e)}"}), 500
