// Slider
function slider(element) {
    let sliderWrap = document.getElementsByClassName(element);
    let sliderContent = sliderWrap[0].querySelector('.slider__inner');
    let slides = sliderContent.children;
    let numSlides = sliderContent.children.length;
    let slideIndex = 1;
    let marginSlide = 20;
    let prevSlide = sliderWrap[0].querySelector('.slider-prev');
    let nextSlide = sliderWrap[0].querySelector('.slider-next');
    let sliderCount = sliderWrap[0].querySelector('.slider-count');

    if(window.innerWidth < 768){
        marginSlide = 32;
    }

    prevSlide.addEventListener('click', function () {
        if(slideIndex > 1){
            nextSlide.classList.remove('disabled');
            showSlides('prev', slideIndex -= 1);
            setButtonDisabled(prevSlide, 1);
        }
    });

    nextSlide.addEventListener('click', function () {
        if(slideIndex < numSlides){
            prevSlide.classList.remove('disabled');
            showSlides('next', slideIndex += 1);
            setButtonDisabled(nextSlide, numSlides);
        }
    });

    function setButtonDisabled(el, n) {
        slideIndex === n ? el.classList.add('disabled') : el.classList.remove('disabled');
    }

    function showSlides(move, n) {
        let widthElement;
        let style = getComputedStyle(sliderContent);
        let styleValue;
        let moveSlider;

        setTimeout(function () {
            styleValue = parseInt(style.transform.slice(18).split(',')[0]);
            moveSlider = styleValue ? styleValue : 0;
            slides[n] ? widthElement = slides[n - 1].offsetWidth + marginSlide : widthElement = 0;

            if(move === 'next'){
                sliderContent.style = `transform: translate(-${Math.abs(moveSlider) + widthElement}px);`;
            }else{
                sliderContent.style = `transform: translate(-${Math.abs(moveSlider) - widthElement}px);`;
            }
            sliderCount.innerHTML = `${n} <span>/ ${numSlides}</span>`;
        },100);
    }
    sliderCount.innerHTML = `1 <span>/ ${numSlides}</span>`;
}

// marquee
const root = document.documentElement;

const marqueeContent = document.querySelectorAll('ul.marquee-content');
for (let j =0; j < marqueeContent.length; j++){
    const count = marqueeContent[j].children.length;

    root.style.setProperty('--marquee-elements', marqueeContent[j].children.length);

    for (let index = 0; index < count; index++) {
        marqueeContent[j].appendChild(marqueeContent[j].children[index].cloneNode(true))
    }
}

