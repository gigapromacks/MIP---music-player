import flask 

# триграммы для поисковика mi musics на python 


def generate_trigrams(text):
    # триграммы из текста берем 
    text = text.lower()
    trigrams = set()
    for i in range(len(text) - 2):
        trigram = text[i:i + 3]
        trigrams.add(trigram)
    return trigrams

def trigram_similarity(text1, text2):
    
    trigrams1 = generate_trigrams(text1)
    trigrams2 = generate_trigrams(text2)
    
    intersection = trigrams1.intersection(trigrams2)
    union = trigrams1.union(trigrams2)
    
    if not union:
        return 0.0
    
    similarity = len(intersection) / len(union)
    return similarity

app = flask.Flask(__name__)

@app.route('/similarity', methods=['POST'])

def similarity_endpoint():
    data = flask.request.json
    text1 = data.get('text1', '')
    text2 = data.get('text2', '')
    
    similarity = trigram_similarity(text1, text2)
    
    return flask.jsonify({'similarity': similarity})

if __name__ == '__main__':
    app.run(debug=True)