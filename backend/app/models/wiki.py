from .. import db
from datetime import datetime
class Wiki  (db.Model):
    id_wiki=db.Column(db.Integer, primary_key=True)
    titulo=db.Column(db.String(100),nullable=False)
    contenido=db.Column(db.Text,nullable=False)
    creado_en=db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"<Wiki {self.id_wiki}>"