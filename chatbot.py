from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

with open("token.txt") as f:
    TOKEN : str = f.readline().strip()  # Replace with your bot token (will be encrypted in production)
    
with open("chatId.txt") as f:
    CHAT_ID : str = f.readline().strip()  # Replace with your chat ID (will be encrypted in production with in data base)

def send_telegram_message(message: str):
    url = f"https://api.telegram.org/bot{TOKEN}/sendMessage"
    payload = {
        "chat_id": CHAT_ID,
        "text": message,
        "parse_mode": "HTML"  # Optional: allows for HTML formatting
    }
    response = requests.post(url, json=payload)
    return response.json()  # Return the response for debugging

@app.route('/notify', methods=['GET'])
def notify():
    message = "This is a notification from your bot!"
    response = send_telegram_message(message)
    return jsonify(response)

if __name__ == "__main__":
    app.run(port=5000)