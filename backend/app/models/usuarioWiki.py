from . import db
from datetime import datetime
class UsuarioWiki (db.Model):
    __tablename__ = "usuariowiki"

    id_usuarioWiki= db.Column(db.Integer, primary_key=True)
    id_usuario =db.Column(db.Integer, db.ForeignKey("usuario.id_usuario"), nullable=False)
    id_wiki =db.Column(db.Integer, db.ForeignKey("wiki.id_wiki"), nullable=False)
    favorito=db.Column(db.Boolean, default=False, nullable=False)
    leido=db.Column(db.Boolean, default=False, nullable=False)
    fecha =db.Column(db.DateTime, default=datetime.utcnow)

    usuario = db.relationship("Usuario", backref="usuariowiki")
    
    def __repr__(self):
        return f"<Usuario wiki {self.id_usuarioWiki}, usuario: ({self.id_usuario})>"