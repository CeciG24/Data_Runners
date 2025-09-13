from datetime import timedelta

from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy



db = SQLAlchemy()
from flask_jwt_extended import JWTManager

jwt = JWTManager()

def create_app():
    app = Flask(__name__)
    from .routes.AuthRoutes import auth_bp
    from .routes.UserRoutes import users_bp
    from .routes.ProgresoRoutes import progreso_bp
    from .routes.FasesRoutes import fases_bp
    from .routes.NivelesRoutes import niveles_bp
    from .routes.wikiRoutes import wiki_bp
    from .routes.ScoreRoutes import scores_bp
    # Configuración de la BD
    app.config['SQLALCHEMY_DATABASE_URI'] = (
        "postgresql://datarunnerdb_user:LOJT5XTsQnfI4dYRkrZBIcz1TO1c4nNR@"
        "dpg-d30f0sp5pdvs73fujdv0-a.virginia-postgres.render.com:5432/datarunnerdb?sslmode=require"
    )
    app.config['JWT_SECRET_KEY']='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30'

    app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=10)

    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    jwt.init_app(app)
    db.init_app(app)
    from .models import Fase, Nivel, Jefe, Dificultad, Usuario,Rol,Score,UsuarioWiki,Respuestas,Wiki

    # Crear tablas automáticamente al levantar la app
    with app.app_context():
        db.create_all()
        print("✅ Tablas creadas en la base de datos")

    #Agregar el Blueprint
    app.register_blueprint(users_bp)
    app.register_blueprint(fases_bp)
    app.register_blueprint(niveles_bp)
    app.register_blueprint(auth_bp)
    app.register_blueprint(progreso_bp)
    app.register_blueprint(scores_bp)
    app.register_blueprint(wiki_bp)
    CORS(app)
    return app