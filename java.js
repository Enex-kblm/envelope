let currentLetter = 1;

function showPopup(letter) {
    const letterPopup = document.getElementById('letterPopup');
    letterPopup.style.display = 'flex';
    currentLetter = letter;
    updatePopupText();
}

function closePopup() {
    const letterPopup = document.getElementById('letterPopup');
    letterPopup.style.display = 'none';
}

function switchLetter() {
    currentLetter = (currentLetter % 3) + 1;
    updatePopupText(); 
}

function updatePopupText() {
    const popupText = document.getElementById('popupText');
    const switchButton = document.querySelector('.popup-content button:nth-of-type(2)'); 
    
    if (currentLetter === 1) {
        popupText.innerHTML = "TEXT";
        switchButton.style.display = 'inline-block'; 
    } else if (currentLetter === 2) {
        popupText.innerHTML = "TEXT";
        switchButton.style.display = 'inline-block'; 
    } else {
        popupText.innerHTML = "TEXT"; 
        switchButton.style.display = 'none';
    }
}
