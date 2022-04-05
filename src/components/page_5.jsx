import { useEffect, useState } from 'react';
import './style.css';

const Page5 = () => {
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

    const page5Height = height*4;
    return (
        <>
            <section className='page5 col12' id='whatnextAnchor' style={{top:`${page5Height}`+'px', height:`${height}`+'px'}}>
                <div className='h2container col12'>
                    <p className='col12'>What's Next?</p> 
                </div>
                <div className='page5TextLayout col11'>
                    <div className='col2'></div>
                    <div className='page5MainText col7'>
                        <p>
                            I am determined that this is the industry I want to be a part of and I now need to start the continuous building of my skills base<br/>
                            <br/>
                            Moving forward, I intend to continue studying Javascript, getting to grips with all the nuances, and doing daily challenges on sites such as <a href='https://www.codewars.com/' target='_blank' rel='noreferrer' id='codewarsLink'>code wars</a> to improve my skills. <br/>
                            <br/>
                            I am committed to putting in at least two hours every day to learning Python, Sass CSS, UI/UX design fundamentals, and design principles such as colour theory and mobile responsiveness. <br/>
                            <br/>
                            Other than the projects themselves, nothing in this portfolio has used a library, as I want to demonstrate my abilities. However, I intend to routinely use third party libraries in the future. <br/>
                            <br/>
                            I am also interested in looking into content creation techniques, and the different languages used to target different audiences. <br/>
                            <br/>
                            My longer-term aspirations are to incorporate my interest in 3D modelling with my development skills with a view to producing high-end game development, technical website design, or working specifically with architecture &amp; interior design companies to promote their services.<br/>
                            <br/>
                            <p className='contact'>If you would like to get in touch, feel free to e-mail me by clicking the copyright below.</p>
                        </p>
                    </div>
                    <div className='page5SideText col2'>
                        
                    </div>
                </div>
                <footer className='col12'>
                    <a href='mailto:david.houghton1982@gmail.com?subject= Impressive Portfolio' className='emailLink'>
                        &copy;David Houghton 2022
                    </a>
                </footer>
            </section>
        </>
    );
};

export default Page5;