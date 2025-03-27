document.getElementById('scrollButton').onclick = function () {
    window.scrollTo({
        top: document.body.scrollHeight / 0,
        behavior: 'smooth'
    })
};

document.getElementById('scrollButton0').onclick = function () {
    window.scrollTo({
        top: document.body.scrollHeight / 1,
        behavior: 'smooth'
    })
};

document.getElementById('scrollButton1').onclick = function () {
    window.scrollTo({
        top: document.body.scrollHeight / 1.5,
        behavior: 'smooth'
    })
};

document.getElementById('scrollButton2').onclick = function () {
    window.scrollTo({
        top: document.body.scrollHeight / 2,
        behavior: 'smooth'
    })
};

document.getElementById('scrollButton3').onclick = function () {
    window.scrollTo({
        top: document.body.scrollHeight / 2.5,
        behavior: 'smooth'
    })
};
