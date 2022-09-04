import getScores from './getAllScores.js';

const addScore = async () => {
  const userName = document.getElementById('user').value;
  const userScore = document.getElementById('score').value;
  document.getElementById('user').value = '';
  document.getElementById('score').value = '';
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fvBwO8kYIdwKI7oQqNAr/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: userName,
      score: userScore,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  getScores();
  const message = await response.json();
  return message;
};

export default addScore;