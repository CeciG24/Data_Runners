from .. import db
class Respuestas(db.Model):
    __tablename__ = "respuestas"
    id_respuesta = db.Column(db.Integer, primary_key=True)
    sql_correcta = db.Column(db.Text, nullable=False)
    salida_esperada = db.Column(db.Text)
    feedback = db.Column(db.Text)
    
    # Relación con la fase
    id_nivel = db.Column(db.Integer, db.ForeignKey("nivel.id_nivel"), nullable=False)

    def __repr__(self):
        return f"<Respuesta {self.id_respuesta}>"