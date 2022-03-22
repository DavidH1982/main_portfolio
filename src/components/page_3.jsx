import { useEffect, useState } from 'react';
import './style.css';

const Page3 = () => {
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
    return (
        <>
            <section className='page3 col12' id='aboutmeAnchor' style={{top:`${height}`+'px', height:`${height}`+'px'}}>
                <h2>About Me</h2>
                <div className='page3Layout col11'>
                    <div className='page3Left col2'>
                        <div className="profilePicture col2">
                            <div className="aboutmeFrame">
                                <div className="aboutmeBorder">
                                    <div className="aboutmePhoto">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='page3Center col6'>
                        <p>
                            I have spent the past 22 years working in hospitality, concentrating mainly on front-of-house roles, but have discovered I have no passion for the industry and for many years been trying to get out. <br/>
                            <br/>
                            For about 6 years I have been interested in learning web development, and have been teaching myself HTML and CSS through mediums such as Udemy, StackSkills, eCourses4You and others. <br/>
                            <br/>
                            When the COVID-19 lockdowns happened in early 2020 I saw it as a huge opportunity to really concentrate on my studying and gained real momentum in learning, but not in confidence. I did, however, discover a passion for coding and creating websites that I have never felt in hospitality. <br/>
                            <br/>
                            In November 2021 I started the Master Coding Bootcamp, run through <a href='https://wearecodenation.com/' target='_blank' rel='noreferrer' id='codenationLink'>Code Nation</a>, which I completed in February 2022. During this course, I built on previous knowledge of HTML and CSS, as well as learning Javascript, developing React web apps, using MySQL and MongoDB for backend database manipulation, and regularly used GitHub for version control. <br/>
                            <br/>
                            As well as coding, the bootcamp also taught me the importance of working with limited briefs, deadlines, problem resolution and researching solutions, and that even within the industry professionals are in a state of perpetual learning.  <br/>
                            <br/>
                            I also learned that. although when I started the bootcamp I had the intention of getting into full stack development, my aptitude is for frontend development and UI design.
                        </p>
                    </div>
                    <div className='page3Right col2'>
                        <div className='page3RightText'>
                            <p>Away from coding, my other passions lie in 3D modelling using the open source software <a href='https://www.blender.org/' target='_blank' rel='noreferrer' id='blenderLink'>Blender&reg;</a>, specifically architectural visualisation, or Archviz, commonly used to show buildings for sale that have not been built yet. I will eventually be publishing my work <a href='#' target='_blank' rel='noreferrer' id='archvizLink'>here</a>.<br/>
                            <br/>
                            I am also a fan of classical music, literature, and art, my favourite artists are the Dutch Masters Vermeer and Van Eyke, and I am currently reading Homer's Iliad.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page3;