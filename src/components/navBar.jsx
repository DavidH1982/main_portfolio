import { useEffect, useState } from 'react';
import './style.css';

const NavBar = () => {
    
    const [ sticky, setSticky ] = useState(false);
    const scrollHeight = () => {
        const allElements = []
        allElements.push(window)
        allElements.push(document)
        window.addEventListener('scroll', function(){
            if (allElements[0].scrollY >= allElements[0].screen.height -185) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }
    useEffect(()=> {
        scrollHeight()
    });
    const topAnchor = () => {
        let e = document.getElementById("topAnchor");
        e.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
            inline: 'start'
        });
    }
    const techAnchor = () => {
        let e = document.getElementById("techAnchor");
        e.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
            inline: 'start'    
        });
    }
    const aboutmeAnchor = () => {
        let e = document.getElementById("aboutmeAnchor");
        e.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
            inline: 'start'    
        });
    }
    const projectsAnchor = () => {
        let e = document.getElementById("projectsAnchor");
        e.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
            inline: 'start'    
        });
    }
    const whatnextAnchor = () => {
        let e = document.getElementById("whatnextAnchor");
        e.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
            inline: 'start'    
        });
    }
    return (
        <>
            <nav className={sticky === true ? 'isSticky navbar col12' : "navbar col12"}>
                <li className='col1 navbarmenuitem navbarmenuitem1' onClick={()=> topAnchor()}>Back to top</li>
                <li className='col2 navbarmenuitem navbarmenuitem2'></li>
                <li className='col1 navbarmenuitem navbarmenuitem3'></li>
                <li className='col1 navbarmenuitem navbarmenuitem5' onClick={()=> aboutmeAnchor()}>About Me</li>
                <li className='col1 navbarmenuitem navbarmenuitem4' onClick={()=> techAnchor()}>Technologies</li>
                <li className='col1 navbarmenuitem navbarmenuitem6' onClick={()=> projectsAnchor()}>Projects</li>
                <li className='col1 navbarmenuitem navbarmenuitem7' onClick={()=> whatnextAnchor()}>Whats Next?</li>
                <li className='col2 navbarmenuitem navbarmenuitem8'></li>
                <li className='col1 navbarmenuitem navbarmenuitem9'></li>
                <li className='col1 navbarmenuitem navbarmenuitem10'></li>
            </nav>
        </>
    );
};

export default NavBar;