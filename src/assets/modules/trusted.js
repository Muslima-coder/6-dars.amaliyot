import './trusted.css';
import img1 from "../images/trusted1.png"
import img2 from "../images/trusted2.png"
import img3 from "../images/trusted3.png"
import img4 from "../images/trusted4.png"

function TrustedBy(){
    return (
        <section className='trusted-section'>
            <div className='container trusted'>
            <p className='text'>Trusted by</p>
            <div className='imgs-wrapper'>
                <img src={img1} alt="photo" width={141} height={32}/>
                <img src={img2} alt="photo" width={141} height={32}/>
                <img src={img3} alt="photo" width={141} height={32}/>
                <img src={img4} alt="photo" width={141} height={32}/>
            </div>
            </div>
        </section>
    )
}

export default TrustedBy