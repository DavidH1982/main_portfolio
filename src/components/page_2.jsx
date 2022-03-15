import './style.css';

const Page2 = () => {
    return (
        <>
            <section className='page2 col12' id='techAnchor'>
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