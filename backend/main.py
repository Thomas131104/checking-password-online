from checking_password import checking_password
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="*")

@app.route('/api/check-password', methods=['POST'])
def api_checking_password():
    data = request.get_json()
    password = data.get('password')
    result = checking_password(password)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)


    