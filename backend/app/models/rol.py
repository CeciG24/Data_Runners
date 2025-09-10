from . import db

class Rol(db.Model):
    __tablename__ = "rol"

    id_rol = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    descripcion = db.Column(db.Text, unique=True, nullable=False)
        
    def __repr__(self):
        return f"<Rol {self.nombre}>"