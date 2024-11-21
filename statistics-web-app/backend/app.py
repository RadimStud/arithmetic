from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np

app = Flask(__name__)
CORS(app)  # Povolit přístup z frontendu

@app.route('/api/generate', methods=['POST'])
def generate_data():
    # Přijmout vstupní data z frontendu
    params = request.json
    count = params.get('count', 10)  # Výchozí počet generovaných čísel je 10

    # Vygenerovat náhodná čísla
    data = np.random.randint(1, 100, size=count).tolist()
    return jsonify({"data": data})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
