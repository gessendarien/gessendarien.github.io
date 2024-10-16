/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

//Copy mail clipboard
const myMail = document.getElementById('mailCopy').innerText;
const copyBtn = document.getElementById('btnCopy');
const messageDone = document.getElementById('msgCopy');
const chgeText = document.getElementById('mailBtn');

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(myMail).then(() => {
        chgeText.textContent = 'gessendarien@gmail.com';
        showMsg();
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
});

function showMsg() {
  messageDone.style.display = 'block';
  messageDone.style.opacity = 1;
    setTimeout(() => {
      messageDone.style.opacity = 0;
        setTimeout(() => {
          messageDone.style.display = 'none';
        }, 500);
    }, 2000);
}



const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});


