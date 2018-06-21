import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';
import $ from 'jquery';

import exampleImg from '../img/Wise Living Cañada.jpg';
import exampleImg2 from '../img/Wise Living Juriquilla.jpg';
import exampleImg3 from '../img/departamentosWiseLiving.jpg';
import respImg from '../img/test_wl.png';
import respImg2 from '../img/test_wl2.png';
import respImg3 from '../img/test_wl3.png';

import Contact from './contact';

let carouselImg = '';
let carouselImg2 = '';
let carouselImg3 = '';

export default class MainBanner extends Component {

    constructor(props){
        super(props);
        this.onWindowResize = this.onWindowResize.bind(this);

        this.state = {
            mobile: false
        };

        this.initialImagesSetup();

        window.addEventListener('resize', this.onWindowResize);
    }

    initialImagesSetup(){
        const windowSize = window.innerWidth;

        if(windowSize <= 800){
            carouselImg = respImg;
            carouselImg2 = respImg2;
            carouselImg3 = respImg3;
        }else{
            carouselImg = exampleImg;
            carouselImg2 = exampleImg2;
            carouselImg3 = exampleImg3;
        }
    }

    onScrollToContact(){
        const target = $('[data-section=contact]');
        const distance = target.offset().top;

        $('html,body').animate({
            scrollTop: distance
        }, 1500);
    }

    onScrollToApartments(){
        const target = $('[data-section=apartments]');
        const distance = target.offset().top;

        $('html,body').stop().animate({
            scrollTop: distance
        }, 1500);
    }

    onWindowResize(){
        const windowSize = window.innerWidth;

        if(windowSize <= 1024){
            carouselImg = respImg;
            carouselImg2 = respImg2;
            carouselImg3 = respImg3;
        }else{
            carouselImg = exampleImg;
            carouselImg2 = exampleImg2;
            carouselImg3 = exampleImg3;
        }

        this.forceUpdate();
    }

    openSite(){
        const loading = document.querySelector('.Loading');
        loading.classList.add('Loading--close');
    }

    render(){
        this.onWindowResize;
        return(
            <div className={this.props.reference} >
                <Carousel showArrows={false} showStatus={false} showThumbs={false} autoPlay={true} interval={5000} infiniteLoop={true}>
                    <div className="Carousel-single">
                        <img src={carouselImg} alt="" onLoad={this.openSite}/>
                        <p className="legend">Un concepto de vida integral en un espacio vanguardista.</p>
                    </div>
                    <div className="Carousel-single">
                        <img src={carouselImg2} alt="" />
                        <p className="legend">Un concepto de vida integral en un espacio vanguardista.</p>
                    </div>
                    <div className="Carousel-single">
                        <img src={carouselImg3} alt="" />
                        <p className="legend">Un concepto de vida integral en un espacio vanguardista.</p>
                    </div>
                </Carousel>
                <Contact />
            </div>
        );
    }
}

MainBanner.propTypes = {
    reference: PropTypes.string
};
