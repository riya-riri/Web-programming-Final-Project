//script for the quiz page//

    let rightscore = 0 //to keep track of the number of correct answers clicked
    let wrongscore = 0 //to keep track of the number of wrong answers clicked

    //function to revert the choice button to original color//
    function resetButton(buttonThatWasClicked){
        setTimeout(function(){
                buttonThatWasClicked.style.background = "";
                console.log("it works")
            }, 300); // 300 = 300milisecond or 0.3 sec
    }    

    //Check if the button user clicked is the correct answer//
    function correctAnswer(buttonThatWasClicked){
        buttonThatWasClicked.style.background = "green"; //turn the button green

        rightscore += 1;
        document.getElementById("rightscore-record").innerText = "Total No. of Correct Answers Clicked : " + rightscore;

        resetButton(buttonThatWasClicked);
    }

    //Check if the button user clicked is the wrong answer//
    function wrongAnswer(buttonThatWasClicked){
        buttonThatWasClicked.style.background = "red"; //turn the button red

        wrongscore += 1;
        document.getElementById("wrongscore-record").innerText = "Total No. of Wrong Answers Clicked : " + wrongscore;

        resetButton(buttonThatWasClicked);
    }

    //Fun element
    function showHint(button){
        button.innerText = "Are you sure?"
    }

    function hideHint(button){
        button.innerText = button.dataset.text;
    }



//script for adding movements to event cards in events page//
    const cards = document.getElementsByClassName("pastevents-card");
        for (let i = 0; i < cards.length; i ++){
            cards[i].addEventListener("mouseover",function(){
                this.style.boxShadow = "0 8px 15px lightblue";
            })
            cards[i].addEventListener("mouseout",function(){
                this.style.boxShadow = "0 4px 6px lightgrey"; 
            })
        }

//script for the contact us page //
        function submitForm(){
            let firstname = document.getElementById("fname").value;

            document.getElementById("messagesubmitted").innerText = "Thank you for messaging us, " + firstname + " ! Your message has been sent!";
        }