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
        popupText.innerHTML = "Makasih ya bu udah ngajarin aku pelajaran informatika dari kelas 7. Jujur kalo belajar tik sama ibu itu asik ga bosenin hehehe.";
        switchButton.style.display = 'inline-block'; 
    } else if (currentLetter === 2) {
        popupText.innerHTML = "Tetap semangat ya bu di sekolah barunya. Aku doa in ibu makin sukses, aamiiin.";
        switchButton.style.display = 'inline-block'; 
    } else {
        popupText.innerHTML = 'Oh iya bu kalo boleh follow ig aku sama tt aku bu nanti aku follback ehehe. ig :  <a href="https://www.instagram.com/gtwuuyyy_?igsh=MWI1aWFmZDJlc25xNg==" target="_blank">@gtwuuyyy_</a> tt : <a href="https://www.tiktok.com/@ooone_1?_t=8pKM79CxpiB&_r=1" target="_blank">@ooone_1</a> kalo gamau gapapa sih, ga maksa.'; 
        switchButton.style.display = 'none';
    }
}
