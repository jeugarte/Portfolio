import React from 'react';
import styles from '../styles/PhotoCard.module.scss'

const PhotoCard = ({ imagePath, isBouncing, zIndex }: {imagePath: string, isBouncing: boolean, zIndex: number}) => {
    return (
        <div 
        className={`${styles.photoContainer} ${isBouncing ? styles.bounce : ''}`}
        style={{
            backgroundImage: `url(${imagePath})`,
            zIndex: zIndex
        }} />
    )
}

export default PhotoCard;