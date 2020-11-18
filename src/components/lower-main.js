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
                            I was born in Niagara Falls, Canada where we lived, and I went to public school until I was 13 when we moved to Fort Erie a town across the Niagara River from Buffalo NY. I finished Public School and went to Fort Erie High school. I quit high school halfway through grade nine and started working.
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