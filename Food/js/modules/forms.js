// Forms

import {closeModal, openModal} from './modal';
import {postData} from '../services/services';

function forms (formSelector, modalTimerId) {

    const forms = document.querySelectorAll(formSelector);

    const message = {
        loading: 'img/form/spinner.svg',
        seccess: 'Спасибо! Мы с вами свяжемся',
        failure: 'Что-то пошло не так ...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    // обработчик формы обратной связи
    function bindPostData (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // creating spinner element that will be shown after sending the request form
            const statusMessage = document.createElement('img'); 
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 20px auto;
            `;
            // rendering the spinner element in the form
            form.insertAdjacentElement('afterend', statusMessage); 

            // Putting the all form data to the new object (using the FormData class)
            const formData = new FormData(form);

            // СОЗДАЁМ ОБЫЧНЫЙ ОБЪЕКТ ИЗ formData
    /*             const object = {}; // 1. создаём пустой объект
            formData.forEach(function (value, key) {
                object[key] = value;
            });  // 2. перебираем объект formData и создаём из него обычный объект.
            object = JSON.stringify(object) // 3. переводим объект в формат json.
    */

            // Changing format formData from object to array by formData.entries() method and turn it to the JSON format.
            const json = JSON.stringify(Object.fromEntries(formData.entries())); 
            // Sending the POST request
            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.seccess);
                statusMessage.remove();
            }).catch (() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });
        });
    }

    // Request handler
    function showThanksModal (message) {

        const prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.add('hide');
        openModal('.modal', modalTimerId);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div data-close class="modal__close">&times;</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal('.modal');
        }, 4000);
    }

    // fetch('http://localhost:3000/menu')
    //     .then (data => data.json())
    //     .then (res => console.log(res));


}

export default forms;