import './About.css'
import TestImage from "./images/logo512.png"

function AboutHeader(){
    return(
        <>
        <div className='image-header'>
            <img src={TestImage} alt='stock of fire victims'/>
            <p>
                WeRemain is a <b>community-driven</b> platform where disaster survivors share memories of 
                what they’ve lost and the resources that helped them recover. 
                <br/>
                <br/>
                By combining personal stories with practical insights, <b>WeRemain turns lived experience into a guide for others navigating similar challenges,</b> helping survivors feel seen, supported, and better equipped to rebuild.
            </p>
        </div>
        </>
    );
   
}

function About(){
    return(
        <>
        <div className="MASTER">
            <h1 className='About-h1'>About</h1>
            <AboutHeader className='AboutHeader'/>
            <div className='about-block-wrapper'>
                <div className='about-block'>
                    <h2 className='About-h2'>1</h2>
                    <h3>Share Your Story</h3>
                    <p>Upload photos and memories of what was lost.</p>
                </div>
                <div className='about-block'>
                    <h2 className='About-h2'>2</h2>
                    <h3>Highlight What Helped</h3>
                    <p>Highlight the resources, programs, or people that supported you in recovery.</p>
                </div>
                <div className='about-block'>
                    <h2 className='About-h2'>3</h2>
                    <h3>Connect Through Stories</h3>
                    <p>Explore others’ experiences to feel seen, build community, and find support.</p>
                </div>
            </div>
        </div>
            
        </>
    );
}

export default About;