from .. import db
class Jefe(db.Model):
    __tablename__ = "jefe"
    id_jefe = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    descripcion = db.Column(db.Text)
    id_dificultad = db.Column(db.Integer, db.ForeignKey("dificultad.id_dificultad"), nullable=False) # fácil, medio, difícil o un número
    recompensa = db.Column(db.String(100)) # puntos, medalla, desbloqueo especial
    
    # Relación con la fase
    id_fase = db.Column(db.Integer, db.ForeignKey("fase.id_fase"), nullable=False)
    dificultad = db.relationship("Dificultad", backref="jefe", lazy=True)

    def __repr__(self):
        return f"<Jefe {self.id_jefe}>"