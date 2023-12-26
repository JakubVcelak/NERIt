from flask import Flask, request
from flask_cors import CORS
import spacy

app = Flask(__name__)
CORS(app)


nerFr = spacy.load("fr_core_news_sm")
nerGe = spacy.load("de_core_news_sm")
nerGr = spacy.load("el_core_news_sm")
nerLi = spacy.load("lt_core_news_sm")
nerRu = spacy.load("ru_core_news_sm")


@app.route('/french', methods=["POST"])
def french():
    return nerFr(request.json['text']).to_json()


@app.route('/german', methods=["POST"])
def german():
    return nerGe(request.json['text']).to_json()


@app.route('/greek', methods=["POST"])
def greek():
    return nerGr(request.json['text']).to_json()


@app.route('/lithuanian', methods=["POST"])
def lithuanian():
    return nerLi(request.json['text']).to_json()


@app.route('/russian', methods=["POST"])
def russian():
    return nerRu(request.json['text']).to_json()


if __name__ == '__main__':
    app.run(debug=True, port=5002)
