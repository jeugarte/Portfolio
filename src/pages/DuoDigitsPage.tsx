import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/DuoDigits.module.scss'

import { ReactComponent as Duo } from '../assets/icon.svg'
import MainGIF from '../assets/duodigitsmain.gif'
import resultGIF from '../assets/duodigitsresult.gif'
import progressGIF from '../assets/duodigitsprogress.gif'
import viewGIF from '../assets/duodigitsconnection.gif'

const DuoDigitsPage = () => {

    const featureRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);

    const featureList = [
        {
            name: '1. Result Token & Spot',
            description: `In order to use all four digits, the user must take steps as they work towards making 
            the number 24. Specifically, the player must take 3 steps in total to pass on to the next level in 
            the lesson. They all involve using one of the four basic operations and two digits from the token 
            bank. This expression that the player created yields a numerical value, which can be returned to 
            the bank to be used in another step. I implemented this result spot & token, where the result of 
            the expression is computed and moved to the right side of the equal sign. From there, if there are 
            still token numbers in the bank, then another step can be taken. The result token must be used again 
            in that case. But the point of the result token & spot is to create a new token when the calculate 
            button is pressed and store it somewhere to distinguish it from the rest of the tokens in the bank. 
            The logic to handle this was taken care of in Swift UIKit in the Duo Digits View Controller.`,
            gif: resultGIF,
        },
        {
            name: '2. Progress',
            description: `In Duo Digits, I handled the logic to display and facilitate progress when a player reaches 24. There are a total of three levels the player must pass before completeing the lesson. After completing a level, the next level must be brought into view with new randomly generated digits. The progress bar on the top must also reflect the status of the user in finishing the lesson. The pipeline I had to follow to implement progress involved the following steps: 
            \n
            1. Check if incoming expression is equal to 24 and no numerical tokens in the bank exist\n
            2. Create new 24 result token and animate it to the result spot with styling\n
            3. Advance progress bar\n
            4. Change calculate button to continue button\n
            5. Freeze player control to move tokens\n
            6. Once continue is pressed, either go to Lesson End View or transition to and bring in the a new Duo Digits View\n
            7. Generate new digit tokens using our 24 algorithm\n
            8. Resume player control `,
            gif: progressGIF,
        },
        {
            name: '3. View Controllers',
            description: `In addition to progress, I managed control between the different views displayed. 
            The different views include the Main Menu View, the Duo Digits Game View, and the End Lesson View. I 
            was tasked with handling the transitions between the views and maintaining their states. Most of the work
             here involved learning the currently existing Duolingo Math code of the Main Menu and End Lesson View to figure out 
             how to connect them to our new view. While it was my first time using UIKit, the Class-Object-Inheritance 
             strucutre of the app (and naturally UIKit) made senes to me. Reading the Duolingo Math App codebase 
             helped me learn how lessons are maintained through views along with the passing of data between them.`,
            gif: viewGIF,
        },
    ]

    featureList.forEach((_, i) => {
        featureRefs.current[i] = React.createRef();
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add(styles['reveal-on-scroll']);
                observer.unobserve(entry.target);
              }
            });
          },
          {
            threshold: 0.4,
          }
        );
      
        featureRefs.current.forEach(ref => {
          if (ref.current) {
            observer.observe(ref.current);
          }
        });
      
        return () => {
          featureRefs.current.forEach(ref => {
            if (ref.current) {
              observer.unobserve(ref.current);
            }
          });
        };
      }, []);

    return (
        <div className={styles.mainPageContainer}>
            <div className={styles.header}>
                <div className={styles.title}>
                    Duo Digits
                </div>
                <div className={styles.icon}>
                    <Duo />
                </div>
            </div>
            <div className={styles.headerContent}>
                <div className={styles.mainVideo}>
                    <img src={MainGIF} alt="Duoreads" />
                </div>
                <div className={styles.subsection}>
                    Duo Digits is a project I worked on during Duolingo's annual Hackathon. It is an extension to the Duolingo Math 
                    App, which is designed for brain training & mental math for adults & students. It is based off the card game 
                    "24", a simple yet challenging mathematical game that can be played by people of various age groups. The game 
                    starts with four cards being displayed face up. Each card has a number on it, usually from 1 to 9. The objective 
                    of the game is to use the four numbers exactly once, applying any of the four basic arithmetic operations 
                    (addition, subtraction, multiplication, and division), to arrive at the number 24. Duo Digits could serve as 
                    an extension to the Duolingo Math App to help both adults and students improve their mental math skills, pattern 
                    recognition, and problem-solving abilities. Since Duolingo is known for its interactive and engaging approach 
                    to learning, Duo Digits could add an element of game-based learning to make math practice more enjoyable and 
                    effective.
                    <br/>
                    <br/>
                    Also, I have a build of it on my phone, so if you would like to try it out let me know!
                </div>
            </div>
            <div className={styles.contentContainer}>
                {featureList.map((feature, index) => {
                    if(index % 2 == 0) {
                        return (
                            <div ref={featureRefs.current[index]} className={`${styles.featureLeft} ${styles.reveal}`}>
                                <div className={styles.featureContent}>
                                    <div className={styles.featureHeader}>
                                        {feature.name}
                                    </div>
                                    <div className={styles.featureText}>
                                        {feature.description}
                                    </div> 
                                </div>
                                <div className={styles.featureGIF}>
                                    <img src={feature.gif} alt="Duoreads" />
                                </div> 
                                
                            </div>
                        )
                    }

                    else {
                        return (
                            <div ref={featureRefs.current[index]} className={`${styles.featureLeft} ${styles.reveal}`}>
                                <div className={styles.featureGIF}>
                                    <img src={feature.gif} alt="Duoreads" />
                                </div> 
                                <div className={styles.featureContentRight}>
                                    <div className={styles.featureHeader}>
                                        {feature.name}
                                    </div>
                                    <div className={styles.featureTextRight}>
                                    {feature.description.split('\n').map((line, index, array) => (
                                        <>
                                            {line}
                                            {index === array.length - 1 ? null : <br />}
                                        </>
                                    ))}
                                    </div> 
                                </div>
                                
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default DuoDigitsPage;