const PubSub = require('../helpers/pub_sub.js');

const SingleQuizView = function (container) {
  this.container = container;
};

SingleQuizView.prototype.bindEvents = function () {
  debugger;
  PubSub.subscribe('MissingWordQuiz:data-retrieved', (event) => {
    console.log('are you getting this far?');
    // console.log(event.detail[0]);
    this.renderQuizItem(event.detail[0]);
  });

};

SingleQuizView.prototype.renderQuizItem = function (quizItem) {
  const itemDiv = document.createElement('div');
  itemDiv.id = `quiz-item-${index}`
  itemDiv.classList.add('item-div')

  const image = this.createImage(quizItem);
  itemDiv.appendChild(image);

  const sentence = this.createSentence(quizItem);
  itemDiv.appendChild(sentence);

  this.container.appendChild(itemDiv);
};

SingleQuizView.prototype.createImage = function (quizItem) {
  const imageDiv = document.createElement('div')
  imageDiv.classList.add('imageDiv')
  const image = document.createElement('img');
  imageDiv.appendChild(image)
  image.src = quizItem.image
  // image.id = `img-${quizItem._id}`;
  image.classList.add('quiz-item-image')
  return imageDiv;
};

SingleQuizView.prototype.createSentence = function (quizItem) {
  const sentenceDiv = document.createElement('div')
  sentenceDiv.classList.add('sentenceDiv')
  const sentence = document.createElement('p');
  sentenceDiv.appendChild(sentence)
  sentence.classList.add('quiz-item-sentence')
  sentenceDiv.textContent = quizItem.sentence1[0][1];
  return sentenceDiv;

}

// SingleQuizView.prototype.getQuizSelection = function () {
//   const quizContainer = document.querySelector('.quiz-select')
//     quizContainer.addEventListener('click', (event) => {
//
//     this.bindEvents()
//
// })
//
// }


module.exports = SingleQuizView;
