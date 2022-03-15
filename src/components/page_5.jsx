import './style.css';

const Page5 = () => {
    return (
        <>
            <section className='page5 col12' id='whatnextAnchor'>
                <h2 className='col12'>What's Next?</h2> 
                <div className='page5TextLayout col11'>
                    <div className='page5MainText col8'>
                        <p>
                            Moving forward, I intend to continue studying Javascript, getting to grips with all the nuances, and doing daily challenges on sites such as <a href='https://www.codewars.com/' target='_blank' rel='noreferrer' id='codewarsLink'>code wars</a> to improve my skills. <br/>
                            <br/>
                            I am going to commit to putting in at least two hours every day into learning Python, Sass CSS, UI/UX design fundamentals, and design principals such as colour theory and mobile responsiveness. <br/>
                            <br/>

                        </p>
                    </div>
                    <div className='page5SideText col3'>
                        <p>
                            My wife suffers with mental health issues, so I am looking primarily for remote work or a hybrid working environment, so that I am able to support her while I work.<br/>
                            <br/>

                        </p>
                    </div>
                </div>
                <footer className='col12'>
                    &copy;David Houghton 2022
                </footer>
            </section>
        </>
    );
};

export default Page5;