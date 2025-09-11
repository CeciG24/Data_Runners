from flask import Blueprint, jsonify,request
from flask_jwt_extended import jwt_required, get_jwt_identity
from .. import db

from ..models.usuario import Usuario
from ..models.rol import Rol

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
    
@users_bp.route('/roles', methods=['GET'])
def get_roles():
    try:
        roles = Rol.query.all()
        return jsonify({
            "Roles": [{
                "id_rol": r.id_rol,
                "nombre:": r.nombre,
                "descripcion:": r.descripcion
            } for r in roles]
        }), 200
    except Exception as e:
        return jsonify({"error": f"Error al obtener roles: {str(e)}"}), 500

@jwt_required()
@users_bp.route('/rol', methods=['POST'])
def escoger_rol():
    try:
        user_id = int(get_jwt_identity()) 
        data = request.get_json()
        # Validar datos obligatorios
        if not data:
            return jsonify({"error": "Faltan datos obligatorios"}), 400

        id_rol=data["id_rol"]
        rol =Rol.query.get(id_rol)
        if not rol:
            return jsonify({"error": "No se encontro el rol"}), 400

        # Buscar usuario
        usuario = Usuario.query.get(user_id)
        if not usuario:
            return jsonify({"error": "Usuario no encontrado"}), 404
        # Asignar rol
        usuario.id_rol = id_rol
        db.session.commit()

        return jsonify({
            "message": f"Rol {rol.nombre} asignado correctamente a {usuario.nombre}",
            "usuario": usuario.nombre,
            "rol": rol.nombre
        }), 200
        
    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        }), 500