import { useState } from 'react';
import './style.css';

const GeometricBG = () => {

    const [cursor, setCursor] =useState(false);
    
    const cursorSurround = () => {
        window.addEventListener('mousemove', function(e) {
            document.getElementById('cursorSurround').style.marginLeft = `${e.pageX}px`;
            document.getElementById('cursorSurround').style.marginTop = `${e.pageY}px`;
        
            if (e.pageY <= 500) {
                setCursor(true)
            }
            else {
                setCursor(false)
            }
        });
    };

    cursorSurround();
    
    return (
        <>
            <section className='col12 jumboBG' id='topAnchor'>
                {/* <img src={image} className="jumboImage"/> */}
                <span className='fortyfivedeg'></span>
                <span className='fortyfivedeg'></span>
                <span className='fortyfivedeg'></span>
                <span className='fortyfivedeg'></span>
                <span className='fortyfivedeg'></span>
                <span className='fortyfivedeg'></span>
                <span className='fortyfivedeg'></span>
                <span className='fortyfivedeg'></span>
                <span className='vertical'></span>
                <span className='vertical'></span>
                <span className='horizontal'></span>
                <span className='twentydeg'></span>
                <span className='twentydeg'></span>
                <span className='twentydeg'></span>
                <span className='twentydeg'></span>
                <span className='twentydeg'></span>
                <span className='twentydeg'></span>
                <span className='twentydeg'></span>
                <span className='twentydeg'></span>
                <span className='twentydeg'></span>
                <span className='twentydeg'></span>
                <span className='twentydeg'></span>
                <span className='twentydeg'></span>
                <span className='twentydeg'></span>
                <span className='twentydeg'></span>
                <span className='twentydeg'></span>
                <span className='twentydeg'></span>
                <span className='twentydeg'></span>
                <span className='twentydeg'></span>
                <span className='twentydeg'></span>
                <span className='twentydeg'></span>
            </section>
            <section className='welcomeText col12'>
                <h1 className='col8'>My name is David and I am a junior frontend developer</h1>
            </section>
            <div className={cursor === true ? 'col1' : 'col1 hidden'} id="cursorSurround"></div>
        </>
    );
};

export default GeometricBG;