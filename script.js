const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
let cards;
let interval;
let firstCard = false;
let secondCard = false;

//items array
const items = [
    { name: "apple", image: "img/apple.png" },
    { name: "banana", image: "img/banana.png" },
    { name: "blueberries", image: "img/blueberries.png" },
    { name: "cherry", image: "img/cherry.png" },
    { name: "coconut", image: "img/coconut.png" },
    { name: "grapes", image: "img/grapes.png" },
    { name: "kiwi", image: "img/kiwi.png" },
    { name: "mango", image: "img/mango.png" },
    { name: "orange", image: "img/orange.png" },
    { name: "papaya", image: "img/papaya.png" },
    { name: "pineapple", image: "img/pineapple.png" },
    { name: "watermelon", image: "img/watermelon.png" },
];