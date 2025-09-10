from flask import Blueprint, jsonify

from app.models.usuario import Usuario

#Creamos el blueprint
users_bp = Blueprint('users', __name__, url_prefix='/users')

@users_bp.route('/usuarios', methods=['GET'])
def get_users():
    try:
        usuarios = Usuario.query.all()
        return jsonify({
            "usuarios": [{
                "id_usuario": u.id_usuario,
                "nombre": u.nombre,
                "email": u.email,
                "rol": u.rol,
                "fecha_registro": u.fecha_registro.isoformat(),
                "id_preferencia": u.id_preferencia
            } for u in usuarios]
        }), 200
    except Exception as e:
        return jsonify({"error": f"Error al obtener usuarios: {str(e)}"}), 500

