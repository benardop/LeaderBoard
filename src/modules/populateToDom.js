import listOfScores from './listOfScores.js';

const populateToDom = (arr) => {
  document.querySelector('.scores').innerHTML = listOfScores(arr);
};

export default populateToDom;