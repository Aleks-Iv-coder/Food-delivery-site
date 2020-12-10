// Slider 

function slider ({container, slide, nextArrow, prevArow, totalCounter, currentCounter, wrapper, field}) {
// creating needed variables
    const slides = document.querySelectorAll(slide), // array of wrappers for each slide
          slider = document.querySelector(container), // general container of the whole carousel
          prev = document.querySelector(prevArow), // left arrow
          next = document.querySelector(nextArrow), // right arrow
          total = document.querySelector(totalCounter), // element of total number of slides
          current = document.querySelector(currentCounter), // element of counter of the current slide
          slidesWreper = document.querySelector(wrapper), // wrapper for whole slider (slides and block of slide's marcers)
          slidesField = document.querySelector(field), // field for the slides block
          width = window.getComputedStyle(slidesWreper).width;

    let slideIndex = 1; // slide number
    let offset = 0; // the width of slider window

    // Slides's switcher
    function slidesToggel (elem, num) {
        elem.style.transform = `translateX(-${num}px)`; // putting slide's position that needed
    };

    // Slides's indicator
    function dotsActive (dotArr, index) {
        dotArr.forEach(dot => dot.style.opacity = '.5');
        dotArr[index - 1].style.opacity = 1; // highlight the active slide
    };

    // Slider's counter
    function cucrentNum (items, elem, index) {
        if (items.length < 10) {
            elem.textContent = `0${index}`;
        } else {
            elem.textContent = index;
        }
    };
    cucrentNum (slides, current, slideIndex);

    // service function for manage slider
    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }

    // Slder, creating the field
    slidesField.style.width = 100 * slides.length + '%';  // making a block width equal to all number of slides
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWreper.style.overflow = 'hidden';  // hiding all unnecessary slides

    slides.forEach(slide => {
        slide.style.width = width;  // making same width for each slides
    })

    slider.style.position = 'relative';

    // Indicator's wraper
    const indicators = document.createElement('ol'),
    dots = [];
    indicators.classList.add('carousel-indicators');
    slider.append(indicators);

    // Styling an indicators
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        if (i == 0) {
        dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }    


    if (slides.length < 10) { 
        total.textContent = `0${slides.length}`; 
    } else {
        total.textContent = slides.length;
    }

    // Slider's manager
    next.addEventListener('click', () => {
        if(offset == deleteNotDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }

        slidesToggel (slidesField, offset);

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex ++;
        }

        cucrentNum (slides, current, slideIndex);
        dotsActive (dots, slideIndex);

    });

    prev.addEventListener('click', () => {
        if(offset == 0) {
            offset = deleteNotDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }

        slidesToggel (slidesField, offset);

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex --;
        }

        cucrentNum (slides, current, slideIndex);
        dotsActive (dots, slideIndex);
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = deleteNotDigits(width) * (slideTo - 1);
            slidesToggel (slidesField, offset);

            cucrentNum (slides, current, slideIndex);
            dotsActive (dots, slideIndex);
        })
    });

}

export default slider;