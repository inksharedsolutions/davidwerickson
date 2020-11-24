import React from 'react'
import Banner from '../components/banner'
import '../assets/scss/pages.scss'
import Layout from '../components/layout'
import AuthorImg from '../../static/img/main_author.png'

 const AboutTheAuthor = (props)=>{

     return(
        <> 
            <Layout extPath={false}>

                <Banner 
                    spanFirst={`About the`}
                    contextHeading={`Author`} 
                />

                <div className="container">
				    <section className="body-author-contents columns">



                        <article className="article-section" id="author">
                        <center>
                        <div className="heading-quote">
                            <div className="author-image-container">
                                <img src={AuthorImg} />
                            </div>
                        </div>
                        </center>
                            <div className="heading-quote">
                                <h4>
                                “Adventures in the Great Land”
                                </h4>
                                
                                <span className="ata-span-fx"></span>
                            </div>


                            <p>
                            Yvonne Watts, and Janice and David.  A few years later we adopted Reyna Reyes and Janice and I moved back to Alaska in the early 90’s.
                            </p>

                            <p>
                            Beginning in the nineties I feel like God started calling me to begin writing songs as well as fiction books to inspire the Christian and excite the hearts of the adventurer.
                            </p>

                            <p>
                            I have self-published (republished), The Northern Force Book Series, (The Beginnings (2013)), They Came From The North (2014)), Northern Skies In Terror (2013)), The North’s Last 1200 Days (2013)), He Steps His Mighty Step (2014)), Destroying Leadership, (2013), Dniknam The Lesser (2014), Hurricane Blast (2013), The Truth, Alaska Style (2013), Inside The Cover (2013).  I also have audio books for The Truth, Alaska Style and The Franklin Family Odyssey:  The Beginnings.
                            </p>

                            <p>
                            We lived in Alaska until 2001.  In fact, we moved to CA the day before 911.  My sister whose been a Christian schoolteacher for 40 years, invited us to apply to teach school in the school she had taught in for many years.  She baited us with, “It will be a ministry.”
                            </p>

                            <p>
                            All together we taught and substituted in schools all over Contra Costa County, CA for almost 13 years.  Most of my books were birthed in the arena of teaching Junior High and High School kids for those few years.
                            </p>

                            <p>
                            My Dad passed away in 2010 and I was in a mess for a while.  I was leading worship in our local Assembly Of God Church in Pittsburg, CA and participating in school events and church programs but my incentive had disappeared.  We took mom home with us and moved to a little house in Oakley, Ca for over a year. My dad’s passing re-inspired me and I wrote several songs and produced a new album.
                            </p>
                            <p>
                            This isn’t the end for David Erickson.  Janice and I work full time jobs here in Carson.  Since we moved here, my two younger brothers, Jonathan, and Daniel, passed away from ailments they had acquired.  Mom died a few months later of natural causes.
                            </p>
                            <p></p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author |  Writer </span>
                                    David W. Erickson
                                </span>
                            </p>
                            
                        </article>
              

                    </section>
                </div>
                 
            </Layout>
        </>
     )

 }

 export default AboutTheAuthor;