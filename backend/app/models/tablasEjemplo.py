from datetime import datetime
from .. import db

class TablasEjemplo(db.Model):
    __tablename__ = "tablas_ejemplo"

    id_tabla = db.Column(db.Integer, primary_key=True)
    nombre_tabla = db.Column(db.String(50), nullable=False)
    esquema = db.Column(db.JSON, nullable=False)   # columnas de la tabla
    datos = db.Column(db.JSON, nullable=False)     # filas de ejemplo

    # Foreign Key a nivel
    id_nivel = db.Column(db.Integer, db.ForeignKey("nivel.id_nivel"), nullable=False)

    # Relación con la tabla Nivel (opcional, si quieres acceder desde ORM)
    nivel = db.relationship("Nivel", backref=db.backref("tablas_ejemplo", lazy=True))

    def __repr__(self):
        return f"<TablasEjemplo {self.id_tabla} - {self.nombre_tabla}>"
