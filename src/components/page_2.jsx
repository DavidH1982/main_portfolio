import { useEffect, useState } from 'react';
import './style.css';

const Page2 = () => {
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
    const page2Height = height*2;
    return (
        <>
            <section className='page2 col12' id='techAnchor' style={{top:`${page2Height}`+'px', height:`${height}`+'px'}}>
                <h2>The technologies I have experience with....so far</h2>
            <div className="logoContainer col12">
            <ul className="logoCollage col8">
                <li className="reactLogo logoSpinner" />
                <li className="htmlLogo logoSpinner" />
                <li className="mongoLogo logoSpinner" />
                <li className="cssLogo logoSpinner" />
                <li className="mysqlLogo logoSpinner" />
                <li className="javascriptLogo logoSpinner" />
                <li className="vscodeLogo logoSpinner" />
            </ul>
            <ul className="logoCollageReflect col8">
                <li className="reactLogo logoSpinner" />
                <li className="htmlLogo logoSpinner" />
                <li className="mongoLogo logoSpinner" />
                <li className="cssLogo logoSpinner" />
                <li className="mysqlLogo logoSpinner" />
                <li className="javascriptLogo logoSpinner" />
                <li className="vscodeLogo logoSpinner" />
            </ul>
        </div>
            </section>
        </>
    );
};

export default Page2;