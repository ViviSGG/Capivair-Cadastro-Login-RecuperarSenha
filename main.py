from flask import Flask

app = Flask(__name__)

@app.route("/")
def homepage():
    
    return "Esse é meu 1° site"

app.run()

