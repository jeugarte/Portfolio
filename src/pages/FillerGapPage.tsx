import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/FillerGapPage.module.scss'

import { ReactComponent as Duo } from '../assets/icon.svg'
import MainGIF from '../assets/duoreads-main.gif'
import LessonsGIF from '../assets/lesson.gif'
import BookshelfGIF from '../assets/bookshelf.gif'
import TranslationsGIF from '../assets/translations.gif'
import BeforeJuiceGIF from '../assets/before_juice.gif'
import AfterJuiceGIF from '../assets/after_juice.gif'
import arrow from '../assets/abarrow.svg'
import FillerPaper from '../assets/fillerpaper.jpg'

const FillerGapPage = () => {

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
            Duoreads gamified & user-friendly. I was tasked with parsing the books into their respective 
            lessons.`,
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
                    RNN Filler Gap Dependency
                </div>
                
            </div>
            <div className={styles.subsection}>
            Many recent studies in Natural Language
Processing have assessed whether neural language
models such as Long Short-Term Memory RNN
(LSTM) and Transformer models such as GPT-2
can learn various syntactic phenomena (Linzen et
al., 2016; Gulordava et al., 2018; Wilcox et al.,
2018, 2019, 2020; Bhattacharya & van Schijndel,
2020; Chaves, 2020; Ozaki et al., 2022). In this
paper, we examine an unexplored dimension of
filler-gap dependencies: filler-gap dependencies
with wh-adjunct and conjoined wh-phrases. Filler-
gap constructions have a dependency between a
filler (what in (1)) and a gap (underlined in (1)).
The gap is an empty syntactic position licensed by
the filler. Thus a filler is also called a licensor.
            <br /> <br />
            (1) What did the resident identify _ ?
            <br /> <br />
            Our results support Transformer models’ acquisition of abstract representation of filler-gap
            dependencies, not only including wh-arguments,
            but also wh-adjuncts and conjoined wh-phrases.
            First we see that NNs have learned the distinction
            between wh-argument and wh-adjunct filler-gap
            dependencies by studying surprisal values,
            followed by masking predictions. Then we study if
            NNs distinguish wh-adjunct licensors from normal
            complementizers. The results from the surprisal
            study does not provide convincing evidence
            against networks’ learning. However, other
            methodologies including masking, representational
            probing, and clustering further substantiate the
            tendency to some extent. Especially BERT showed
            a strong performance compared to GPT-2.
            After the affirming that Transformers acquired to
            represent filler-gap dependencies with wh-
            adjuncts, we examine such dependencies with
            conjoined wh-phrases. The relevant results provide
            evidence in support of NN’s learning of one-to-one
            mapping constraint on filler-gap dependencies
            (Wilcox et al., 2018). The results from experiment
            3 and 4 indicate that networks have learned the
            different syntactic behaviors of conjoined
            arguments (e.g., which NP and which NP) from
            conjoined argument and adjunct (e.g., what and
            where). More interestingly, the local surprisal from
            the experiment 4 demonstrates that they have
            acquired the distinction between optionally and
            obligatorily transitive verbs with respect to
            conjoined filler-gap dependencies, in line with the
            previous human sentence processing results (Lewis
            et al., 2012).
            To sum up, the current study reinforces the claim
            that Transformers, GPT-2 and BERT, learn the
            generalization of filler-gap dependencies using
            unexplored data and novel methodologies. We
            provide our data and code at
            https://github.com/jeugarte/Filler-Gap-Dependency.
            </div>
            <div className={styles.mainVideo}>
                <img src={FillerPaper} alt="Duoreads" />
            </div>
        </div>
    )
}

export default FillerGapPage;