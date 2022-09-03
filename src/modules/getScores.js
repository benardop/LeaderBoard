import populateToDom from './populateToDom.js';

const getScores = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fvBwO8kYIdwKI7oQqNAr/scores/');
  const json = await response.json();
  const listOfScores = json.result;
  populateToDom(listOfScores);
};

export default getScores;