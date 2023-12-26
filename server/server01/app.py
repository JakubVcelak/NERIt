from flask import Flask, request
from flask_cors import CORS
import spacy


app = Flask(__name__)
CORS(app)

nerCa = spacy.load("ca_core_news_sm")
nerCr = spacy.load("hr_core_news_sm")
nerDa = spacy.load("da_core_news_sm")
nerDu = spacy.load("nl_core_news_sm")
nerEn = spacy.load("en_core_web_sm")
nerFi = spacy.load("fi_core_news_sm")
nerCzBeta = spacy.load("./modelsBeta/cz_ner_web_sm")


@app.route('/catalan', methods=["POST"])
def catalan():
    return nerCa(request.json['text']).to_json()


@app.route('/croatian', methods=["POST"])
def croatian():
    return nerCr(request.json['text']).to_json()


@app.route('/danish', methods=["POST"])
def danish():
    return nerDa(request.json['text']).to_json()


@app.route('/dutch', methods=["POST"])
def dutch():
    return nerDu(request.json['text']).to_json()


@app.route('/english', methods=["POST"])
def english():
    return nerEn(request.json['text']).to_json()


@app.route('/finnish', methods=["POST"])
def finnish():
    return nerFi(request.json['text']).to_json()


@app.route('/czech', methods=["POST"])
def czech():
    return nerCzBeta(request.json['text']).to_json()


if __name__ == '__main__':
    app.run(debug=True, port=5001)









