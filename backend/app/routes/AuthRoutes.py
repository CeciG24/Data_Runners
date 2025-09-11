from datetime import datetime, timedelta

from flask import Blueprint, request, jsonify

from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
import bcrypt
import logging

from  ..models import Usuario
from .. import db
from  ..utils.authUtils import  is_valid_email
from werkzeug.security import generate_password_hash,check_password_hash

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

auth_bp = Blueprint('auth', __name__, url_prefix='/auth')

@auth_bp.route('/register', methods=['POST'])
def register():

    try:
        data = request.get_json()
        # Validar datos obligatorios
        if not data or not all(k in data for k in ("nombre", "email", "contraseña")):
            return jsonify({"error": "Faltan datos obligatorios: nombre, email, contraseña,"}), 400
            # Validar campos obligatorios
        required_fields = ["nombre", "email", "contraseña", ]
        for field in required_fields:
            if field not in data or not str(data[field]).strip():
                return jsonify({"error": f"Falta o está vacío el campo '{field}'"}), 400

        # Validar email
        if not is_valid_email(data["email"]):
            return jsonify({"error": "Formato de email inválido"}), 400

        # Verificar si el email ya existe
        if Usuario.query.filter_by(email=data["email"]).first():
            return jsonify({"error": "El email ya está registrado"}), 409

        # Encriptar la contraseña
        contraseña_hash = generate_password_hash(data["contraseña"], method="pbkdf2:sha256")

        nuevo_usuario = Usuario(
            nombre=data["nombre"],
            email=data["email"],
            contraseña_hash=contraseña_hash,
            ##id_rol=data["id_rol"],     ##AGREGAR EL ROL PARA DESPUES DE REGISTRARSE EN OTRA PANTALLA
            fecha_registro=datetime.utcnow(),

        )

        db.session.add(nuevo_usuario)
        db.session.commit()

        access_token = create_access_token(identity=str(nuevo_usuario.id_usuario))

        print(access_token)

        return jsonify({
            "message": "Usuario creado con éxito",
            "id_usuario": nuevo_usuario.id_usuario,
            "token": access_token
        }), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": f"Error al crear usuario: {str(e)}"}), 500


@auth_bp.route('/login', methods=['POST'])
def login_usuario():
    try:
        data = request.get_json()
        logger.debug(f"Datos recibidos para login: {data}")

        # Validar datos obligatorios y no vacíos
        required_fields = ["email", "contraseña"]
        if not data or not all(k in data for k in required_fields):
            return jsonify({"error": "Faltan datos obligatorios: email, contraseña"}), 400

        for field in required_fields:
            if not str(data[field]).strip():
                return jsonify({"error": f"El campo '{field}' no puede estar vacío"}), 400

        # Validar email
        if not is_valid_email(data["email"]):
            return jsonify({"error": "Formato de email inválido"}), 400

        # Buscar usuario por email
        usuario = Usuario.query.filter_by(email=data["email"]).first()
        if not usuario:
            logger.debug(f"Usuario no encontrado para email: {data['email']}")
            return jsonify({"error": "Credenciales inválidas"}), 401

        # Verificar contraseña
        if not check_password_hash(usuario.contraseña_hash, data["contraseña"]):
            logger.debug("Contraseña incorrecta")
            return jsonify({"error": "Credenciales inválidas"}), 401

        access_token = create_access_token(identity=str(usuario.id_usuario))

        print(access_token)
        return jsonify({
            "message": "Login exitoso",
            "usuario": {
                "token": access_token,
                "id_usuario": usuario.id_usuario,
                "nombre": usuario.nombre,
                "email": usuario.email,
                "id_rol": usuario.id_rol,
                "fecha_registro": usuario.fecha_registro.isoformat(),

            }
        }), 200
    except Exception as e:
        logger.error(f"Error al procesar login: {str(e)}")
        return jsonify({"error": f"Error al procesar login: {str(e)}"}), 500
