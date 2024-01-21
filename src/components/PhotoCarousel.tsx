import React, { useRef } from 'react';
import Slider from 'react-slick';
import PhotoCard from './PhotoCard';
import photo1 from '../assets/photocard1.jpg'
import photo2 from '../assets/photocard2.jpg';
import photo3 from '../assets/photocard3.jpg';
import photo4 from '../assets/photocard4.jpg'
import photo6 from '../assets/photocard6.jpg'
import photo7 from '../assets/photocard7.jpg';
import photo8 from '../assets/photocard8.jpg'
import photo9 from '../assets/photocard9.jpg'
import photo11 from '../assets/photocard11.jpg'
import photo12 from '../assets/photocard12.jpg'

import '../styles/slick.css'; 
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/PhotoCarousel.module.scss'

const PhotoCarousel = () => {

    const [bouncingCards, setBouncingCards] = React.useState([-1, -1, -1, -1]);

    const photos = [
        {
            id: 1,
            path: photo1
        },
        {
            id: 4,
            path: photo6
        },
        {
            id: 2,
            path: photo12
        },
        {
            id: 3,
            path: photo3
        },
        {
            id: 6,
            path: photo4
        },
        {
            id: 7,
            path: photo7
        },
        {
            id: 8,
            path: photo8
        },
        {
            id: 9,
            path: photo9
        },
        {
            id: 10,
            path: photo11
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 900,
        beforeChange: (current: number, next: number) => {
            setTimeout(() => setBouncingCards([-1, -1, -1, (next+2) % photos.length]), 0); 
            setTimeout(() => setBouncingCards([-1, -1, (next+1)% photos.length, (next+2) % photos.length]), 300);
            setTimeout(() => setBouncingCards([-1, (next) % photos.length, (next+1) % photos.length, (next+2) % photos.length]), 600);
            setTimeout(() => setBouncingCards([(current) , (next) % photos.length, (next+1) % photos.length, (next+2) % photos.length]), 900);
        },
    };

    return (
        <div className={styles.carouselContainer}>
            <Slider {...settings}>
                {photos.map((photo, index) => {
                    return (<PhotoCard key={photo.id} 
                        imagePath={photo.path} 
                        isBouncing={bouncingCards.includes(index)}
                        zIndex={photos.length - index} />
                )})}
            </Slider>
        </div>
    );
}

export default PhotoCarousel;

