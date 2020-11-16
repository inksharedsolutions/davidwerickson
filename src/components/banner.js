import React from 'react'
import {Link} from 'gatsby'
import '../assets/scss/pages.scss'
import BannerImg from '../../static/img/book_cover.png'

const Banner = (props) =>{

    const isFront =props.isFront;
    return(
        <>

            { (props.isFront) ? 
                <>
                    <section className="banner-section">
                        <div className="container-gt">
                            <div className="grid-two-columns" id="banner-layout-responsive">
                                
                                <div className="left-col">
                                    <div className="banner-content-wrapper">
                                        <h1>
                                            <span>THE FRAKLIN FAMILY ODYSSEY</span>
                                            <span>HOMESTEADING</span>
                                            <span>IN ALASKA</span> 
                                            <span>THE BEGINNING</span>
                                        </h1>
                                        <p>

                                            Fun to read, great family story!
                                            
                                            <span className="span-tag-review">
                                                David W. Erickson
                                            </span>
                                        </p>
                                        <button>
                                            <Link to="/about-the-book#beliefs">
                                                Read More
                                            </Link>
                                        </button>
                                    </div>
                                </div>

                                <div className="right-col banner-img">
                                    <img src={BannerImg}/>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
             :
                <>
                    <section className="web-banner">
                        <div className="container">
                            <div className="wrapper-ds">
                                <span> 
                                    {props.spanFirst}
                                </span>
                                <h1>
                                    {props.contextHeading}
                                </h1>
                            </div>
                        </div>
                    </section>
                </>
            }
        </>
    )
}           

export default Banner;