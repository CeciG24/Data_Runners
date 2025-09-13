from flask import Blueprint, request, jsonify
from flask_jwt_extended import get_jwt_identity, jwt_required
from .. import db
from ..models.wiki import Wiki

wiki_bp = Blueprint("wiki", __name__,url_prefix="/wiki")

@wiki_bp.route('/', methods=['GET'])
def get_wiki():
    try:
        wikis = Wiki.query.all()
        return jsonify({
            "wiki": [{
                "titulo": w.titulo,
                "contenido": w.contenido
            } for w in wikis]
        }), 200
    except Exception as e:
        return jsonify({"error": f"Error al obtener fases: {str(e)}"}), 500