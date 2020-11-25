import React from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/img/main_author.png'

const LowerMain = ()=>{
    return(
        <>
            <section className="author-section">
                <div className="container-gt">
                    <div className="grid-two-columns" id="author-container">
                        <div className="wrapper-auth-content auth-img-container">
                            <img src={AuthorImg} />
                        </div>

                        <div className="wrapper-auth-content">
                            <p>
                            I was born into a Christian home of four brothers and one sister. I am the eldest and I was born in Yreka, CA in 1948. Mom and Dad moved to northern California to minister and this would be a constant theme in my growing years.  In 1950 the family moved to Santa Barbra, CA, where the twins, Daniel and Daryel were born.  Just a couple years later they packed up and moved to Vallejo, CA, where Jonathan and Martha were born.  At this time Dad and mom worked full time for the US Government.
                            </p>

                            <h1>David W. Erickson</h1>

                            <span className="span-tagline">Author & Writer</span>

                            <button>
                                <Link to="/about-the-author">
                                    Read More
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LowerMain 