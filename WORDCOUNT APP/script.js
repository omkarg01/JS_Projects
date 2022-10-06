const textArea = document.querySelector('textarea');
const wordCount = document.querySelector('.word-count');
const charCount = document.querySelector('.char-count');
const countBtn = document.querySelector('.count-btn');
const clearBtn = document.querySelector('.clear-btn');

countBtn.addEventListener('click', () => {
    let text = textArea.value.trim();

    //   wordCount
    let wordCountValue = text.split(' ').length;
    wordCount.textContent = wordCountValue;

    //   charCount
    let charCountValue = text.length;
    charCount.textContent = charCountValue;
});

clearBtn.addEventListener('click', () => {
    textArea.value = '';
    wordCount.textContent = 0;
    charCount.textContent = 0;
});


