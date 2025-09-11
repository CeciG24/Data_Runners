from flask import Flask
from .models import db
from .routes.UserRoutes import users_bp
from .routes.FasesRoutes import fases_bp
from .routes.NivelesRoutes import niveles_bp

def create_app():
    app = Flask(__name__)

    # Configuración de la BD
    app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://datarunnerdb_user:LOJT5XTsQnfI4dYRkrZBIcz1TO1c4nNR@dpg-d30f0sp5pdvs73fujdv0-a.virginia-postgres.render.com:5432/datarunnerdb"
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)

    # Crear tablas automáticamente al levantar la app
    with app.app_context():
        db.create_all()
        print("✅ Tablas creadas en la base de datos")

    #Agregar el Blueprint
    app.register_blueprint(users_bp)
    app.register_blueprint(fases_bp)
    app.register_blueprint(niveles_bp)

    return app