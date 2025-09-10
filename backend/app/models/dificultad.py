from . import db
class Dificultad (db.Model):
    id_dificultad=db.Column(db.Integer, primary_key=True)
    nombre=db.Column(db.String(100), nullable=False)
    descripcion=db.Column(db.Text, nullable=False)

    def __repr__(self):
        return f"<Dificultad {self.id_dificultad}>"