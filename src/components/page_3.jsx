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
                            I have spent the past 22 years working in a wide range of roles in the hospitality industry, from waiting on, various kitchen duties, to Bar Manager, but have realised I have lost my enthusiasm for the industry and for some-time have been searching for a more satisfying career. <br/>
                            <br/>
                            When the COVID-19 lockdowns happened in early 2020 I saw them as a huge opportunity to really concentrate on my studying and gained real momentum in learning. I discovered a passion for coding and creating websites. To this end, I have been teaching myself HTML and CSS through mediums such as Udemy, StackSkills, eCourses4You and others. <br/>
                            <br/>
                            In November 2021 I started the Master Coding Bootcamp, run through <a href='https://wearecodenation.com/' target='_blank' rel='noreferrer' id='codenationLink'>Code Nation</a>, which I completed in February 2022. During this course, I have built on previous knowledge of HTML and CSS, as well as learning Javascript, developing React web apps, using MySQL and MongoDB for backend database manipulation, and regularly using GitHub for version control. <br/>
                            <br/>
                            As well as coding, the bootcamp also taught me the importance of working with limited briefs, deadlines, problem resolution and researching solutions, and that even within the industry, professionals are in a state of perpetual learning.  <br/>
                            <br/>
                            I also learned that, although when I started the bootcamp I had the intention of getting into full-stack development, I learned that my aptitude is for frontend development and UI design. 
                        </p>
                    </div>
                    <div className='page3Right col2'>
                        <div className='page3RightText'>
                            <p>Away from coding, my other passions lie in 3D modelling using the open source software <a href='https://www.blender.org/' target='_blank' rel='noreferrer' id='blenderLink'>Blender&reg;</a>, specifically architectural visualisation, or Archviz, commonly used to show buildings for sale prior to completion to allow imagining of the final product. I will eventually be publishing my work <a href='#' target='_blank' rel='noreferrer' id='archvizLink'>here</a>.<br/>
                            <br/>
                            For relaxation, I enjoy all genres of music, although I find classical music best when designing. My current reading includes Homer's Iliad. I have eclectic taste in art, but my favourite artists are the Dutch Masters <a href="https://en.wikipedia.org/wiki/Johannes_Vermeer" target="_blank" rel="noreferrer" className="wikiLink">Vermeer</a> and <a href="https://en.wikipedia.org/wiki/Jan_van_Eyck" target="_blank" rel="noreferrer" className="wikiLink">Van Eyck</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page3;