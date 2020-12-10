// Product's cards
import {getResurce} from '../services/services';

function cards () {

    class MenuCard {
        constructor (src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27; // rate of curence (usa dollar)
            this.changeToUAH();
        }

        changeToUAH () {
            this.price = this.price * this.transfer;
        }

        render () {
            const element = document.createElement('div');
            if(this.classes.length === 0) {
                this.classes = 'menu__item';
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(classNames => element.classList.add(classNames));
            }
            
            element.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
            `;
            this.parent.append(element);
        }
    }

    //  GET request to package.json server for the product's cards through the services.js module
    getResurce('http://localhost:3000/menu') 
    .then(data => { 
    // iterating of the response from the server, destructurize the data into variables and passing it to the MenuCard class + render it.
        data.forEach(({img, altimg, title, descr, price}) => {  
            new MenuCard (img, altimg, title, descr, price, '.menu .container').render();
        }); 
    });

    /* 
    The same request using the axios library
    axios.get('http://localhost:3000/menu') 
    .then(data => {
        data.data.forEach(({img, altimg, title, descr, price}) => {  
            new MenuCard (img, altimg, title, descr, price, '.menu .container').render();
        }); 
    });

    */
}

export default cards;
