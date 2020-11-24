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
                            Yvonne Watts, and Janice and David.  A few years later we adopted Reyna Reyes and Janice and I moved back to Alaska in the early 90’s.
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