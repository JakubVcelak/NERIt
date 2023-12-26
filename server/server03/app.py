from flask import Flask, request
from flask_cors import CORS
import spacy

app = Flask(__name__)
CORS(app)


nerNo = spacy.load("nb_core_news_sm")
nerPo = spacy.load("pl_core_news_sm")
nerPor = spacy.load("pt_core_news_sm")
nerRo = spacy.load("ro_core_news_sm")
nerSp = spacy.load("es_core_news_sm")
nerSw = spacy.load("sv_core_news_sm")
nerUk = spacy.load("uk_core_news_sm")
nerMa = spacy.load("mk_core_news_sm")
nerIt = spacy.load("it_core_news_sm")


@app.route('/norwegian', methods=["POST"])
def norwegian():
    return nerNo(request.json['text']).to_json()


@app.route('/polish', methods=["POST"])
def polish():
    return nerPo(request.json['text']).to_json()


@app.route('/portuguese', methods=["POST"])
def portuguese():
    return nerPor(request.json['text']).to_json()


@app.route('/romanian', methods=["POST"])
def romanian():
    return nerRo(request.json['text']).to_json()


@app.route('/spanish', methods=["POST"])
def spanish():
    return nerSp(request.json['text']).to_json()


@app.route('/swedish', methods=["POST"])
def swedish():
    return nerSw(request.json['text']).to_json()


@app.route('/ukrainian', methods=["POST"])
def ukrainian():
    return nerUk(request.json['text']).to_json()


@app.route('/macedonian', methods=["POST"])
def macedonian():
    return nerMa(request.json['text']).to_json()


@app.route('/italian', methods=["POST"])
def italian():
    return nerIt(request.json['text']).to_json()


if __name__ == '__main__':
    app.run(debug=True, port=5003)
