import { logoIpsum1, logoIpsum2, logoIpsum3, logoIpsum4 } from '../../assets/images';
import './trusted.css';

function Trusted(){
    return (
        <section className='trusted-section'>
            <div className='container trusted'>
            <p className='text'>Trusted by</p>
            <div className='imgs-wrapper'>
                <img src={logoIpsum1} alt="photo" width={141} height={32}/>
                <img src={logoIpsum2} alt="photo" width={141} height={32}/>
                <img src={logoIpsum3} alt="photo" width={141} height={32}/>
                <img src={logoIpsum4} alt="photo" width={141} height={32}/>
            </div>
            </div>
        </section>
    )
}

export default Trusted