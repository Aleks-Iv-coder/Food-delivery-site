'use strict';

// создание XMLHttpRequest запроса
/* 
const request = new XMLHttpRequest();
request.open('POST', 'server.php');
// request.setRequestHeader('Content-type', 'multipart/form-data'); При использовании связки XMLHttpRequest & FormData использовать saetRequestHeader - НЕ НУЖНО, иначе сервер не получит наши данные. При использовании объекта FormData заголокти устанавливаются автоматически. 

request.setRequestHeader('Content-type', 'application/json'); // При отправке данных на сервер в формате JSON заголовки прописывать обязательно.

const formData = new FormData(form); // создаём новый объек formData куда собираем данные с формы через атрибуты name

// Перевод формата FormData в фомат JSON
const object = {}; // 1. создаём пустой объект
formData.forEach(function (value, key) {
    object[key] = value;
});  // 2. перебираем объект formData и создаём из него обычный объект.

const json = JSON.stringify(object);  // 3. конвертируем обычный объект в формат json
request.send(json); // 4. отправляем двнные в формате json
console.log(json);

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    showThanksModal(message.seccess);
                    form.reset();
                    statusMessage.remove();
                } else {
                    showThanksModal(message.failure);
                }
            });
 */
/* 
class User {
        constructor (name, age) {
            this.name = name;
            this._age = age;
        }

        say () {
            console.log(`Имя пользователя ${this.name}, возраст ${this._age}`);
        }

        get age () {
            return this._age;
        }

        set age (age) {
            if (typeof age === 'number' && age > 0 && age < 110) {
                this._age = age;
            } else {
                console.log('Недопустимое значение');
            }
        }
    }


const ivan = new User('Ivan', 27);
console.log (ivan.age);
ivan.age = 99
console.log (ivan.age);

  
ivan.say();
 */

/* 
****  ANGULAR  ***
Что нужно выучить что б работать с Angular?
- node.js не обязательно знать, но точно уметь устанавливать
- TypeScript понимание лексики
- Webpack понимаие как всё собирается по модулям
- MVC pattern шаблон пректирования для создания приложений, 
- Angular изучить документацию

***  REACT  ***
- node.js
- JSX 
- Bable
- Webpack
- React

***  VUE.JS  ***
- node.js
- Webpack
- Vue.js

*/