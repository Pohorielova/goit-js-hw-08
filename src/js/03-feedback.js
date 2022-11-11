// 1.Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект
// с полями email и message, в которых сохраняй текущие значения полей формы.
// Пусть ключом для хранилища будет строка "feedback-form-state".
// 2.При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные,
// заполняй ими поля формы. В противном случае поля должны быть пустыми.
// 3.При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email,
// message и текущими их значениями в консоль.
// 4.Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд.
// Для этого добавь в проект и используй библиотеку lodash.throttle.
import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const input =document.querySelector('input');
const formData={};
populateTextarea();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input',throttle(onTextareaInput,500));
form.addEventListener('input', evt=>{
//  возьми обьект форм дата и под [таким ключем] положи это значение
  formData[evt.target.name]=evt.target.value;
  // console.log(formData);
});



function onTextareaInput (evt) {
  // const message =evt.target.value;
  localStorage.setItem(STORAGE_KEY,JSON.stringify(formData));

  // при сете джсон стрингифай

};

function onFormSubmit (evt) {
evt.preventDefault();
evt.target.reset();
const objData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);
console.log(formData);
};

function populateTextarea() {
const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
 // при гете джсон парс

if (savedMessage===null){
  return;
}
// console.log(savedMessage);
// textarea.value=savedMessage;
textarea.value = savedMessage['message'] || '';
input.value = savedMessage['email'] || '';
};
