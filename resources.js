const Labels = document.querySelectorAll('.label');
const Input = document.querySelectorAll('.accordian__input')
for (let i = 0; i < Labels.length; i++) {
    Labels[i].setAttribute('for', 'title' + i)
    Input[i].setAttribute('id', 'title' + i)
}