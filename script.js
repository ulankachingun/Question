const yesButton = document.getElementById('yes');
        const noButton = document.getElementById('no');
        const message = document.getElementById('message');

        const displayMessage = () => {
            message.textContent = "I don't care what you choose, will you be my girlfriend?";
        };

        yesButton.addEventListener('click', displayMessage);
        noButton.addEventListener('click', displayMessage);