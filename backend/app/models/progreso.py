from .. import db
from datetime import datetime

class Progreso (db.Model):
    __tablename__ = "progreso"

    id_progreso=db.Column(db.Integer, primary_key=True)
    id_usuario=db.Column(db.Integer, db.ForeignKey("usuario.id_usuario"), nullable=False)
    id_nivel=db.Column(db.Integer, db.ForeignKey("nivel.id_nivel"), nullable=False)
    completado=db.Column(db.Boolean, default=False, nullable=False) 
    intentos=db.Column(db.Integer, default=0, nullable=False)
    ultima_vez=db.Column(db.DateTime, default=datetime.utcnow)

    usuario = db.relationship("Usuario", backref="progreso")
    nivel = db.relationship("Nivel", backref="progreso")
    
    def __repr__(self):
        return f"<Progreso {self.id_progreso} ({self.id_usuario})>"