from . import db
from datetime import datetime

class Nivel (db.Model):
    __tablename__="nivel"
    id_nivel=db.Column(db.Integer,primary_key=True)
    id_fase=db.Column(db.Integer, db.ForeignKey("fase.id_fase"), nullable=False)
    id_dificultad=db.Column(db.Integer, db.ForeignKey("dificultad.id_dificultad"))
    titulo= db.Column(db.String(100),nullable=False)
    enunciado =db.Column(db.Text,nullable=False)
    orden =db.Column(db.Integer,nullable=False)
    created_at =db.Column(db.DateTime, default=datetime.utcnow)

    dificultad = db.relationship("Dificultad", backref="nivel")

    fase = db.relationship("Fase", backref="nivel")
    
    def __repr__(self):
        return f"<Nivel {self.id_nivel}>"