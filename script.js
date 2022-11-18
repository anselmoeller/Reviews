 //importing from another javascript file /js script...
 import { reviews } from "./reviews.js";

// Getting the path of the elements needed
let imgOfPerson = document.querySelector('.imgOfPerson');
let nameOfPerson = document.querySelector('.nameOfPerson');
let jobOfPerson = document.querySelector('.jobOfPerson');
let reviwOfPerson = document.querySelector('.reviewOfPerson');

// Getting the path of the buttons...
let randomReviewBtn = document.querySelector('.randomReviewBtn');
let btnNextIcon = document.querySelector('.nextIcon');
let btnPrevIcon = document.querySelector('.prevIcon');

// variable to save a common and global value to use after...
let currentPersonReview = 0;

// when the screen loads...
window.addEventListener("DOMContentLoaded", ()=>{
    // setReviews(currentPersonReview);
    setRandomPerson();
});

//setting the reviews...
function setReviews(currentPersonReview){
    const actualIndex = reviews[currentPersonReview];
    imgOfPerson.src = actualIndex.img;
    nameOfPerson.textContent = actualIndex.name;
    jobOfPerson.textContent = actualIndex.job;
    reviwOfPerson.textContent = actualIndex.text;
};

//(using its paths and incrementing functions to action...)
//creatting a function to random personReview
function setRandomPerson(){
    let resultRandom = Math.floor(Math.random() * reviews.length);
    let indexOfPerson = reviews[resultRandom];

    nameOfPerson.textContent = indexOfPerson.name;
    jobOfPerson.textContent = indexOfPerson.job;
    reviwOfPerson.textContent = indexOfPerson.text;
    imgOfPerson.src = indexOfPerson.img;
}
//Random button
randomReviewBtn.addEventListener('click',setRandomPerson);

//The next button
btnNextIcon.addEventListener('click', ()=>{
    currentPersonReview++;
    if(currentPersonReview > reviews.length -1){
        currentPersonReview = 0;
    }
    setReviews(currentPersonReview);
});

//The previous button
btnPrevIcon.addEventListener('click', ()=>{
    currentPersonReview--;
    if(currentPersonReview < 0){
        currentPersonReview = reviews.length -1;
    }
    setReviews(currentPersonReview);
});
