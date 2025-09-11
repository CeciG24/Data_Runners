from .. import db
from datetime import datetime

class Usuario(db.Model):
    __tablename__ = "usuario"

    id_usuario = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    contraseña_hash = db.Column(db.String(255), nullable=False)
    id_rol = db.Column(db.Integer, db.ForeignKey("rol.id_rol"), nullable=False)
    fecha_registro = db.Column(db.DateTime, default=datetime.utcnow)

    rol = db.relationship("Rol", backref="usuario")
    
    def __repr__(self):
        return f"<Usuario {self.nombre} ({self.email})>"