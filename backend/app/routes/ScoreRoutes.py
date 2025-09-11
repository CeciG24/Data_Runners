from flask import Blueprint, request, jsonify
from flask_login import LoginManager, login_required, current_user
from ..models.usuario import Usuario
from ..models.score import Score

scores_bp = Blueprint("scores", __name__)

@scores_bp.route("/", methods=["GET"])
def get_score():
    try:
        user_id = current_user.id_usuario  # debe ser id_usuario (int o string)

        user = Usuario.query.get(user_id)
        score=Score.query.filter_by(user_id)

        return jsonify (
            {
                "Usuario": user.nombre,
                "Puntos totales": score.puntos_totales,
                "Niveles superados:": score.niveles_superados
            }
        ),200
    except Exception as e:
        return jsonify({"error": f"Error al obtener niveles: {str(e)}"}), 500
