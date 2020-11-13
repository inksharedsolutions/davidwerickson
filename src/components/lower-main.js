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
                            David was born into a preacher’s home in the late forties. He moved to Alaska as a married man in 1981. He was always an adventurer. In the eighties, he staked an Alaskan homestead of forty acres and built a log cabin that next winter.
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