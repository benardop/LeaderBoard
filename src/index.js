import './style.css';
import getScores from './modules/getAllScores.js';
import addScore from './modules/addScore.js';

window.onload = getScores;

document.getElementById('refresh').onclick = getScores;
const button = document.querySelector('#addNewScore');
button.onclick = addScore;