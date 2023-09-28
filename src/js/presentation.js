import { getCookie, setCookie } from './cookie.js';
import { fullScreenMode, normalScreenMode } from './screen.js';


export class Presentation{

    constructor(){
        this.content = document.querySelector('.slides');
        this.slides = this.content.querySelectorAll('section');
        this.currentSlideNo=1;
        if (getCookie('currentSlideNo')!=''){
            this.currentSlideNo = Number(getCookie('currentSlideNo'));
        }
        setCookie('currentSlideNo', this.currentSlideNo);
        this.totalSlides = 0;
        this.currentSlide = null;
        this.updateCurrentSlide();
        this.currentSlide.classList.add('show');
        this.addKeylistener(this);
    }

    updateCurrentSlide() {
        this.currentSlide = this.slides[this.currentSlideNo];
        this.currentSlide.classList.add('show');
    }

    updateSlideNo() {
        this.slideCounter.innerText = `${this.currentSlideNo+1} of ${this.totalSlides}`;
    }

    update() {
        this.totalSlides = this.slides.length;
        this.updateCurrentSlide();
        // this.updateSlideNo();
    }

    changeCurrentSlideNo(newSlideNumber){
        this.currentSlide.classList.remove('show');
        this.currentSlideNo = newSlideNumber;
        setCookie('currentSlideNo', this.currentSlideNo);
    }

    moveToLeftSlide() {
        if (this.currentSlideNo == 0){
            return;
        }
        this.changeCurrentSlideNo(this.currentSlideNo-1);
        this.update();
    }

    moveToRightSlide() {
        if (this.currentSlideNo == this.totalSlides-1){
            return;
        }
        this.changeCurrentSlideNo(this.currentSlideNo+1);
        this.update();
    }

    addKeylistener(self) {
        document.addEventListener('keydown', function(event){
            let presentation = self;
            console.log(event.code);
            switch (event.code) {
                case 'ArrowLeft':
                    presentation.moveToLeftSlide();
                    break;
                case 'ArrowRight':
                    presentation.moveToRightSlide();
                    break;
                case 'ArrowUp':
                    // Up pressed
                    break;
                case 'ArrowDown':
                    // Down pressed
                    break;
                case 'Escape':
                    normalScreenMode();
                    break;
                case 'KeyF':
                    fullScreenMode();
                    break;
            }
        });
    }
}
