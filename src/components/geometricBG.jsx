import { useEffect, useState } from 'react';
import './style.css';
import geometry from './images/geometricBG.png'

const GeometricBG = () => {

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
    let geometryHeight = height/2;
    return (
        <>
            <section className='col12 jumboBG' id='topAnchor' style={{height:`${height}`+'px'}}>
                <div className='geometryTop col12'>
                    <span className='geometry col4' ><img src={geometry} alt='geomtric background' style={{height:`${geometryHeight}`+'px'}} /></span>
                    <span className='geometry col4' ><img src={geometry} alt='geomtric background' style={{height:`${geometryHeight}`+'px'}} /></span>
                    <span className='geometry col4' ><img src={geometry} alt='geomtric background' style={{height:`${geometryHeight}`+'px'}} /></span>
                    <span className='geometry col4' ><img src={geometry} alt='geomtric background' style={{height:`${geometryHeight}`+'px'}} /></span>
                    <span className='geometry col4' ><img src={geometry} alt='geomtric background' style={{height:`${geometryHeight}`+'px'}} /></span>
                    <span className='geometry col4' ><img src={geometry} alt='geomtric background' style={{height:`${geometryHeight}`+'px'}} /></span>
                </div>
                <div className='geometryBottom col12'>   
                    <span className='geometry col4' ><img src={geometry} alt='geomtric background' style={{height:`${geometryHeight}`+'px'}} /></span>
                    <span className='geometry col4' ><img src={geometry} alt='geomtric background' style={{height:`${geometryHeight}`+'px'}} /></span>
                    <span className='geometry col4' ><img src={geometry} alt='geomtric background' style={{height:`${geometryHeight}`+'px'}} /></span>
                    <span className='geometry col4' ><img src={geometry} alt='geomtric background' style={{height:`${geometryHeight}`+'px'}} /></span>
                    <span className='geometry col4' ><img src={geometry} alt='geomtric background' style={{height:`${geometryHeight}`+'px'}} /></span>
                    <span className='geometry col4' ><img src={geometry} alt='geomtric background' style={{height:`${geometryHeight}`+'px'}} /></span>
                </div>
            </section>
            <section className='welcomeText col12' style={{height:`${height}`+'px'}}>
                <h1 className='col8'>My name is David and I am a junior frontend developer</h1>
            </section>
        </>
    );
};

export default GeometricBG;