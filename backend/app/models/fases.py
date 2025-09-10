from . import db
from datetime import datetime
class Fase (db.Model):
    __tablename__='fase'

    id_fase=db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    descripcion=db.Column(db.Text, nullable=False)
    orden=db.Column(db.Integer,nullable=False)
    creado_en=db.Column(db.DateTime, default=datetime.utcnow)

    # Relación con Jefes y Niveles
    niveles = db.relationship("Nivel", back_populates="fase")
    jefes = db.relationship("Jefe", backref="fase", lazy=True)

    def __repr__(self):
        return f"<Fase {self.id_fase}>"