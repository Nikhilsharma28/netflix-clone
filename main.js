//card swipe//

let container = document.querySelector(".card-Container");
let nextButton = document.querySelector(".next");
let prevButton = document.querySelector(".prev");

nextButton.addEventListener("click", function(){
    container.scrollLeft+=1000;
});
prevButton.addEventListener("click", function(){
    container.scrollLeft-=1000;
});

/////////faq question///////
let faqBoxes = document.querySelectorAll(".faq-box");
faqBoxes.forEach(function(box){

   let button = box.querySelector(".faq-btn");
   let answer = box.querySelector(".faq-answer");

   button.addEventListener("click", function(){
    if(answer.style.display ==="block"){
        answer.style.display ="none";
        button.innerText="+";
    }
    else{
        answer.style.display="block";
        button.innerText="x";
    }
    });
});
