from . import db
from datetime import datetime
class Score (db.Model):
    __tablename__ = "score"

    id_score= db.Column(db.Integer, primary_key=True)
    id_usuario =db.Column(db.Integer, db.ForeignKey("usuario.id_usuario"), nullable=False)
    puntos_totales= db.Column(db.Integer,nullable=False,default=0)
    niveles_superados= db.Column(db.Integer,nullable=False,default=0)
    actualizado_en =db.Column(db.DateTime, default=datetime.utcnow)

    usuario = db.relationship("Usuario", backref="score")
    
    def __repr__(self):
        return f"<Score {self.id_score}, usuario: ({self.id_usuario})>"