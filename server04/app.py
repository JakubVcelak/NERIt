from flask import Flask, request
from flask_cors import CORS
import spacy

app = Flask(__name__)
CORS(app)


nerCh = spacy.load("zh_core_web_sm")
nerJa = spacy.load("ja_core_news_sm")
nerKo = spacy.load("ko_core_news_sm")


@app.route('/chinese', methods=["POST"])
def chinese():
    return nerCh(request.json['text']).to_json()


@app.route('/japanese', methods=["POST"])
def japanese():
    return nerJa(request.json['text']).to_json()


@app.route('/korean', methods=["POST"])
def korean():
    return nerKo(request.json['text']).to_json()


if __name__ == '__main__':
    app.run(debug=True, port=5004)
