import { useEffect, useState } from 'react';

import './style.css';

import mandcClone from './images/mandcClone.png';
import keycode from './images/keycodeChallenge.png';
import drumkit from './images/drumkitProject.png';
import diceGame from './images/dicegameProject.png';
import portfolio from './images/portfolio_first.png';
import moodTone from './images/moodtone.png';

const Page4 = () => {

    const getHeight = () => 
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;

    const [ height, setHeight ] = useState(getHeight());

    const allElements = [];
    allElements.push(window);
    const resize = () => {
        window.addEventListener('resize', function(){
            let screenHeight = allElements[0].innerHeight;
            setHeight(screenHeight)
        })
    }
    useEffect(()=> {
        resize()
    });

    const page4Height = height*3;

    const [ cloneShow, setCloneShow ] = useState(false);
    const [ keycodeShow, setKeycodeShow ] = useState(false);
    const [ drumShow, setDrumShow ] = useState(false);
    const [ diceShow, setDiceShow ] = useState(false);
    const [ portfolioShow, setPortfolioShow ] = useState(false);
    const [ projectShow, setProjectShow ] = useState(false);

    const cloneModalOpen = () => {
        setCloneShow(true);
        setKeycodeShow(false);
        setDrumShow(false);
        setDiceShow(false);
        setPortfolioShow(false);
        setProjectShow(false);
    }
    const keycodeModalOpen = () => {
        setCloneShow(false)
        setKeycodeShow(true)
        setDrumShow(false)
        setDiceShow(false)
        setPortfolioShow(false)
        setProjectShow(false)
    }
    const drumModalOpen = () => {
        setCloneShow(false)
        setKeycodeShow(false)
        setDrumShow(true)
        setDiceShow(false)
        setPortfolioShow(false)
        setProjectShow(false)
    }
    const diceModalOpen = () => {
        setCloneShow(false)
        setKeycodeShow(false)
        setDrumShow(false)
        setDiceShow(true)
        setPortfolioShow(false)
        setProjectShow(false)
    }
    const portfolioModalOpen = () => {
        setCloneShow(false)
        setKeycodeShow(false)
        setDrumShow(false)
        setDiceShow(false)
        setPortfolioShow(true)
        setProjectShow(false)
    }
    const projectModalOpen = () => {
        setCloneShow(false)
        setKeycodeShow(false)
        setDrumShow(false)
        setDiceShow(false)
        setPortfolioShow(false)
        setProjectShow(true)
    }

    return (
        <>
            <section className='page4 col12' id='projectsAnchor' style={{top:`${page4Height}`+'px', height:`${height}`+'px'}}>
                <div className={cloneShow === true ? 'blurry projectGrid col12' :
                                keycodeShow === true ? 'blurry projectGrid col12' :
                                drumShow === true ? 'blurry projectGrid col12' :
                                diceShow === true ? 'blurry projectGrid col12' :
                                portfolioShow === true ? 'blurry projectGrid col12' :
                                projectShow === true ? 'blurry projectGrid col12' :
                                'projectGrid col12'}>
                    <div className='topProjectGrid col12'>
                        <div className='imageLink mandcCloneLink col4' onClick={()=>cloneModalOpen()}>
                                <img src={mandcClone} className="mandcImage projectImages" alt='Miller&amp;Carter Clone'/>
                        </div>
                        <div className='imageLink keycodeLink col4' onClick={()=>keycodeModalOpen()}>
                            <img src={keycode} className="keycodeImage projectImages" alt='Keycode Generator'/>
                        </div>
                        <div className='imageLink drumkitLink col4' onClick={()=>drumModalOpen()}>
                            <img src={drumkit} className="drumkitImage projectImages" alt='Drumkit Challenge'/>
                        </div>
                    </div>
                    <div className='bottomProjectGrid col12'>
                        <div className='imageLink dicegameLink col4' onClick={()=>diceModalOpen()}>
                                <img src={diceGame} className="projectImages" alt='Dice Game Challenge'/>
                        </div>
                        <div className='imageLink portfolioLink col4' onClick={()=>portfolioModalOpen()}>
                            <img src={portfolio} className="projectImages" alt='First Draft Portfolio'/>                    
                        </div>
                        <div className='imageLink moodtoneLink col4' onClick={()=>projectModalOpen()}>
                            <img src={moodTone} alt='Group Project' className='projectImages'/>    
                        </div>
                    </div>
                </div>
            </section>
            <div className={cloneShow === false ? 'hiddenModal cloneHidden' : 'cloneModal modal'}>
            <button onClick={()=> setCloneShow(false)}>X</button>
                        <div>
                            <h2>
                                Website Clone Challenge
                            </h2>
                            <p>
                                The very first challenge given to us during the CodeNation Master 
                                Coding Bootcamp was to clone a website. I chose the Miller&amp;Carter
                                Lytham St.Annes website, as I had previously worked there for 4 years,
                                and it felt like an homage! <br/>
                                <hr />
                                This clone is in pure HTML and CSS, there is no functionality, and there
                                are no media queries. <br />
                                <hr />
                                To view the original website, click <a href="https://www.millerandcarter.co.uk/restaurants/north-west/millerandcarterlythamstannes#"
                                target="_blank" rel="noreferrer">here</a>. This challenge was set in the lead up
                                to Christmas 2021, so the content will be slightly different.
                                <hr />
                            </p>
                            <a href="https://davidh1982.github.io/Website-Clones/" target="_blank" rel="noreferrer">
                                Click here to see full size
                            </a>
                        </div>
            </div>
            <div className={keycodeShow === false ? 'hiddenModal keycodeHidden' : 'keycodeModal modal'}>
            <button onClick={()=> setKeycodeShow(false)}>X</button>
                        <div>
                            <h2>
                                Key Code Challenge
                            </h2>
                            <p>
                                This challenge was given to be evidence of our understanding of the JS DOM and
                                using event listeners to apply changes to the DOM in response to user interaction. <br />
                                <hr />
                                The brief was to creat a keycode generator, so that on the press of any key the browser
                                will show the event.key, the event.code, and the event.which. <br />
                                <hr />
                                This simple site is pure HTML and CSS, with no media queries. It is styled using
                                flexbox, and so is mobile friendly to a degree.
                                <hr />
                            </p>
                            <a href="https://davidh1982.github.io/Keycode-Challenge/" target="_blank" rel="noreferrer">
                                Click here to see full size
                            </a>
                        </div>
                    </div>
            <div className={drumShow === false ? 'hiddenModal drumHidden' : 'drumModal modal'}>
            <button onClick={()=> setDrumShow(false)}>X</button>
                        <div>
                            <h2>
                                Drumkit Challenge
                            </h2>
                            <p>
                                The brief for this challenge was an extension of the Key Code Challenge. <br />
                                <hr />
                                The task was that when a key was pressed, or a key clicked, play a sound.
                                I chose to use the keypad numbers for the key press function, so that users
                                can play all the sounds without moving their hand. I realised that the downside
                                to this could be that not all laptops have a keypad. <br />
                                <hr />
                                The styling was left entirely to me, but I was asked as a bonus task to implement
                                the <a href="https://animejs.com/" target="_blank" rel="noreferrer"> anime.js </a>
                                library.
                                <hr />
                            </p>
                            <a href="https://davidh1982.github.io/Numpad-Drumkit/" target="_blank" rel="noreferrer">
                                Click here to see full size
                            </a>
                        </div>
            </div>
            <div className={diceShow === false ? 'hiddenModal diceHidden' : 'diceModal modal'}>
            <button onClick={()=> setDiceShow(false)}>X</button>
                        <div>
                            <h2>
                                Dice Game Challenge
                            </h2>
                            <p>
                                
                            </p>
                            <a href="https://davidh1982.github.io/Dice-Game/" target="_blank" rel="noreferrer">
                                Click here to see full size
                            </a>
                        </div>
            </div>
            <div className={portfolioShow === false ? 'hiddenModal portfolioHidden' : 'portfolioModal modal'}>
            <button onClick={()=> setPortfolioShow(false)}>X</button>
                        <div>
                            <h2>
                                Previous Portfolio Version
                            </h2>
                            <a href='https://davidh1982.github.io/Portfolio/' target='_blank' rel='noreferrer'>here</a>
                            </div>
                        </div>
            <div className={projectShow === false ? 'hiddenModal projectHidden' : 'projectModal modal'}>
            <button onClick={()=> setProjectShow(false)}>X</button>
                        <div>
                            <h2>
                                Group Project
                            </h2>
                            <p>
                                This was the final project from CodeNation and the first project 
                                performed as a group. We were given 2 weeks to complete and a selection
                                of briefs to choose from, as a team we chose an original idea. <br />
                                <hr />
                                My first job was to implement a dark mode feature, which I acheived by
                                using the <a href="https://chakra-ui.com/" target="_blank" rel="noreferrer">
                                chakra-ui library</a>. This was simple and effective, however brought
                                an issue during the second week of the project as chakra-ui had a complete
                                update meaning none of the reference code worked anymore! <br />
                                <hr />
                                Next, I worked on the styling of the navigation bar, the "Musisphere"
                                page, and the media queries. <br/>
                                We worked remotely, using <a href="https://github.com" target="_blank"
                                rel="noreferrer">GitHub</a> to merge our work, <a href="https://www.heroku.com/home"
                                target="_blank" rel="noreferrer"> Heroku </a> platform for backend database, and
                                <a href="https://www.netlify.com/" target="_blank" rel="noreferrer"> Netlify </a>
                                to deploy the frontend. <br />
                                <hr />
                                The main experiences that I embraced from this experience are that working
                                remotely relies on clear communication, the importance of naming conventions
                                is even more valid when more than 1 person is working on the CSS, never assume
                                that if there is an error it is someone else's fault, and a deadline is never 
                                as far away as it first feels!
                                <hr />
                            </p>
                            <a href="https://inspiring-sammet-925ed2.netlify.app/" target="_blank" rel="noreferrer">
                                Click here to see the app in full.
                            </a>
                        </div>
            </div>
        </>
    );
};

export default Page4;