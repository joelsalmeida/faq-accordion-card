
    // ** OPEN AND CLOSE ACCORDION QUESTIONS
    
    var accordion = document.getElementsByClassName("faq-accordion_question");
    
    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener("click", function () { 
            this.classList.toggle("active");
        });
    }
