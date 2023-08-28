import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/DuoreadsPage.module.scss'

import { ReactComponent as Duo } from '../assets/icon.svg'
import MainGIF from '../assets/duoreads-main.gif'
import LessonsGIF from '../assets/lesson.gif'
import BookshelfGIF from '../assets/bookshelf.gif'
import TranslationsGIF from '../assets/translations.gif'
import BeforeJuiceGIF from '../assets/before_juice.gif'
import AfterJuiceGIF from '../assets/after_juice.gif'
import arrow from '../assets/abarrow.svg'

const DuoreadsPage = () => {

    // Create an array to hold refs
    const featureRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);
    const [isBefore, setIsBefore] = useState<boolean>(true);

    const featureList = [
        {
            name: '1. Lessons',
            description: `Duolingo is known for its lesson strucutre, rewarding users as they 
            progress through quick, bite-sized lessons. Duoreads follows the classic lesson strucuture 
            by parsing books into digestable paragraphs/sections and displaying the progress bar. While 
            there is no sound, the noteable Duolingo *Dink* sounds effect is played as they reach the 
            end of the chapter. These features set benchmarks for the user and makes the experience of 
            Duoreads gamified & user-friendly.`,
            gif: LessonsGIF,
        },
        {
            name: '2. Bookshelf',
            description: `Users are allowed to select and add books to 
            their "bookshelf", or sidebar. There are currently 21 books from 7 different languages in
            our DynamoDB database, including German and Japanese. Books are displayed as cards, which are
             easily selectable and deselectable. Use the dropdown menus to show and hide books. When the 
             next-bottom button is clicked, a POST request is sent to the databaase to reflect the 
             user's updated bookshelf, if changed. Notice how when Adventures of Huckleberry Fin is 
             selected, the bookshelf in the next page displays the book at the end of the list. `,
            gif: BookshelfGIF,
        },
        {
            name: '3. Translations',
            description: `A large portion of my work was focused on implementing translations in Duoreads.
             The user is allowed to highlight words, phrases, or a sentence to translate into their native 
             language. Once highlighted, a green popover button is displayed to confirm the user's intent 
             to translate. When the popover button is clicked, a request to GPT-3.5 turbo is made to 
             generate a translation in the context of the lesson, chapter, and target language. The 
             Translations Panel on the right side of the screen is where the translation shows up once the
             request from OpenAI is met. Depending on the length of the highlighted phrase, getting a 
             response from GPT-3.5 turbo can take anywhere between 2 - 10 seconds. While other APIs are faster, 
             they don't consider context, which is crucial in order to receive an accurate translation. Notice 
             how the popover button is replaced by another blue popover button. It is the "explain more" button 
             that sends a message in the chatbox of why the translation is correct and how the translation of 
             the highlighted text fits into the context of the lesson and chapter. These translations are 
             cached globally so that if the same phrase is highlighted again, no request to OpenAI will be sent.`,
            gif: TranslationsGIF,
        },
        {
            name: '4. Juice!',
            description: `At Duolingo, anything "juicy" refers to UI that is visually pleasing. For Duoreads, I 
            was in charge of adding the "juice" to the project. This includes blending Duolingo colors, adding 
            dynamic animations, and making the user experience more easy to use & learn. I reorganized the main 
            content container of the read page to fit both the paragraph and chatbox while adding depth and color
             where I could. After getting feedback from product designers, they found this layout and the detailed 
             animations to enchance the experience of the user while making the application fun and "Duolingo-like". 
             Click on the arrow under the image to switch between our minimal viable product and our final product. 
             Notice the subtle differences between the navigation sidebar, bookshelf sidebar, paragraph content, 
             chatbox appearance, and topbar.`,
            gif: BeforeJuiceGIF,
        },
    ]

    // Dynamically create refs
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

      const beforeAfterOnClick = () => {
        setIsBefore(toggle => !toggle);
      }

    return (
        <div className={styles.mainPageContainer}>
            <div className={styles.header}>
                <div className={styles.title}>
                    Duoreads
                </div>
                <div className={styles.icon}>
                    <Duo />
                </div>
            </div>
            <div className={styles.subsection}>
                Duoreads is a project 4 interns and I developed as a part of the Thrive program. Duolingo teaches the four main language skills SWRL:
                Speech, Writing, Reading, & Listening. Duoreads focuses on teaching the 'R' in SWRL. By reading literature in a foreign language, users 
                will greatly heighten their reading ability and comprehension in the language they are learning.
            </div>
            <div className={styles.mainVideo}>
                <img src={MainGIF} alt="Duoreads" style={{ borderRadius: '20px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)'  }} />
            </div>
            <div className={styles.contentContainer}>
                {featureList.map((feature, index) => {
                    if (index == 3) {
                        return (
                            <div ref={featureRefs.current[index]} className={`${styles.featureLeft} ${styles.reveal}`}>
                                <div className={styles.featureBeforeAfter}>
                                    <div className={styles.featureGIFBA}>
                                        {isBefore && (<img src={feature.gif} alt="Duoreads"  />)}
                                        {!isBefore && (<img src={AfterJuiceGIF} alt="Duoreads" />)}
                                    </div>
                                    <div className={styles.BAHeader}>
                                        {isBefore ? "Before" : "After"}
                                    </div>
                                    <img src={arrow} alt="Duoreads" onClick={beforeAfterOnClick} style={{ width: 'auto', height: 'auto' }}/>
                                    
                                </div> 
                                <div className={styles.featureContentRight}>
                                    <div className={styles.featureHeader}>
                                        {feature.name}
                                    </div>
                                    <div className={styles.featureTextRight}>
                                        {feature.description}
                                    </div> 
                                </div>
                                
                            </div>
                        )
                    }

                    else if(index == 2) {
                        return (
                            <div ref={featureRefs.current[index]} className={`${styles.featureRight} ${styles.reveal}`}>
                                <div className={styles.featureContent}>
                                    <div className={styles.featureHeader}>
                                        {feature.name}
                                    </div>
                                    <div className={styles.featureText}>
                                        {feature.description}
                                    </div> 
                                </div>
                                <div className={styles.featureGIFMid}>
                                    <img src={feature.gif} alt="Duoreads" />
                                </div> 
                                
                            </div>
                        )
                    }

                    else if(index % 2 == 0) {
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
                                        {feature.description}
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

export default DuoreadsPage;