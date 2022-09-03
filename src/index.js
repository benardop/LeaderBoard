import './style.css';
import getScores from './modules/getScores.js';
import addNewScore from './modules/addNewScore.js';

window.onload = getScores;

document.getElementById('refresh').onclick = getScores;
const btn = document.querySelector('#addNewScore');
btn.onclick = addNewScore;