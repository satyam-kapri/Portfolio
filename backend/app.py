from flask import Flask, jsonify, request
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

YOUR_DOMAIN_NAME = 'sandbox6c63fd405a364712b0efd136a9bb443f.mailgun.org'
YOUR_API_KEY = '177fd42b40d737e454d3dbd460064fd3-8c8e5529-3e1ba0ae'

@app.route('/sendemail', methods=['POST'])
def send_email():
    try:
        data = request.get_json()['data']
        sendername=data['name']
        sendermail=data['email']
        SENDER_EMAIL = f'{sendername} <mailgun@{YOUR_DOMAIN_NAME}>'
        recipient_email = 'ksatyamk8@gmail.com'
        subject = f'A mail from {sendermail} on portfolio'
        message = data['message']
        
        response = requests.post(
            f"https://api.mailgun.net/v3/{YOUR_DOMAIN_NAME}/messages",
            auth=("api", YOUR_API_KEY),
            data={"from": SENDER_EMAIL,
                  "to": recipient_email,
                  "subject": subject,
                  "text": message}
        )
       
        if response.status_code == 200:
            return jsonify({'message': 'Email sent successfully'}), 200
        else:
            return jsonify({'message': 'Failed to send email try again later!'}), response.status_code
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

