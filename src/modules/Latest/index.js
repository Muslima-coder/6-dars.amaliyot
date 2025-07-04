import { ArrowRight, ArrowRight2 } from '../../assets/icons'
import './latest.css'

function Latest(){
    return(
        <section className='latest-section'>
            <div className='container latest'>
                <div className='left-content-wrapper'>
                    <p>Blogs</p>
                    <strong>Latest Blogs</strong>
                    <span>
                        View all
                        <ArrowRight2/>
                    </span>
                </div>

                {/* Right part start */}
                <div className='right-content-wrapper'>
                <ul className='latest-list'>
                    <li className='latest-item'>
                        <p>April 16, 2021 .6 mins</p>
                        <strong>Design tips for designers, that cover everything you need</strong>
                        <span>
                            Read the article
                            <ArrowRight2/>
                        </span>
                    </li>
                     <li className='latest-item'>
                        <p>April 16, 2021 .6 mins</p>
                        <strong>Design tips for designers, that cover everything you need</strong>
                        <span>
                            Read the article
                            <ArrowRight2/>
                        </span>
                    </li>
                     <li className='latest-item'>
                        <p>April 16, 2021 .6 mins</p>
                        <strong>Design tips for designers, that cover everything you need</strong>
                        <span>
                            Read the article
                            <ArrowRight2/>
                        </span>
                    </li>
                     <li className='latest-item'>
                        <p>April 16, 2021 .6 mins</p>
                        <strong>Design tips for designers, that cover everything you need</strong>
                        <span>
                            Read the article
                            <ArrowRight2/>
                        </span>
                    </li>
                     <li className='latest-item'>
                        <p>April 16, 2021 .6 mins</p>
                        <strong>Design tips for designers, that cover everything you need</strong>
                        <span>
                            Read the article
                            <ArrowRight2/>
                        </span>
                    </li>
                </ul>
                </div>
            </div>
        </section>
    )
}

export default Latest


