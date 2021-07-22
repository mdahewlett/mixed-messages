console.log("The least random message of this project, but here is some wise wisdom..")

const farConcepts = ['rocket science', 'programming', 'social justice', 'electricity', 'climate change', 'income inequality', 'love', 'community'];
const closeConcepts = ['fishing', 'riding a bicycle', 'cooking eggs', 'buying a new pair of shoes', 'training for a marathon', 'reading a book'];
const explanations= ['you need to be prepared', 'you have to put one foot in front of the other', 'you need to watch it', 'it needs to be broken in', 'you have to put in the hours', 'its not about the ending'];

const messageParts = [farConcepts, closeConcepts, explanations]
const messageGlue = [' is like ', ': ', '.']

const messageRand = () => {
    let message = '';
    for (let i = 0; i < 3; i++) {
        let itemRandIndex = Math.floor(Math.random() * messageParts[i].length);
        message += messageParts[i][itemRandIndex];
        message += messageGlue[i];
    }
    return message;
}

console.log(messageRand())