import React from 'react'
import Book1 from '../../static/img/book_cover.png'

import { DiscussionEmbed } from "disqus-react"
import Layout from '../components/layout'
import Banner from '../components/banner'
import BookInfo  from '../components/book-info/book-info'
import ABA from './about-the-author'

const AboutTheBook= (props) =>{

	const slug =(props.location.href);
	const disqusConfig = {
	  shortname: 'david-w-erickson',
	  config: { identifier:  12, slug}
	}

	const bannerText = (
		<>	
			<span className="banr-tagline-fx">David W. Erickson</span>
			<h1 className="banr-header-fx">
				About the
				<span className="banr-spn-highlight">Book</span>
			</h1>
		</>
	)

	return(
		<Layout extPath={false}>
			
            <Banner 
				spanFirst={`About the`}
				contextHeading={`Book`}
            />

			<main className="wrapperMain">
				<div 
					className="container"
					id="book-containers" >


						<BookInfo
							data={{
								title:`The Franklink Family Odyssey `,
								spanTitle: 'HOMESTEADING IN ALASKA, The Beginning',
								imgSrc: Book1,
								id:'susies_submisision',
								content:
								`
								<p>
								The Franklin family began its odyssey in Northern California in the early 40's. After being married in Southern California they moved north and built a log cabin in Northern California. Within a year of their marriage, the family had a little boy, Johnny. A couple years later twins, Donald and Denny, were born. This is when Johnny started having his "dream." 
								</p> 

								<p>
								The book tells stories of Johnny and his brothers as they grow up. Later the eldest son (Johnny) gets married and he and his in-laws, Jack and Mary Jones, decide to move to Alaska and homestead there.
								</p>

								<p>
								A little while after the Jones and Johnny arrived in Alaska, the rest of the Franklin family decided to come north as well. Within a year the Jones and Franklins had built two cabins and Becka, Johnny's wife had a little baby, little Johnny.
								</p>

								<p>
								The families struggle through rough winters, wet springs and illnesses. Injuries occurred and Johnny kept dreaming the same dream. 
								</p>

								<p>
								Later in the title came the deadly hunt, the house fire and the miracle. This book is the first in a series called 'The Franklin Family Odyssey.'
								</p>
								`,

								ebooks:{
									stratton : 'https://www.stratton-press.com/books/the-franklin-family-odyssey-homesteading-in-alaska-the-beginning/',
									barnes: 'https://www.barnesandnoble.com/w/the-franklin-family-odyssey-homesteading-in-alaska-david-w-erickson/1136998832?ean=9781648950230',
									amazon :'https://www.amazon.com/Franklin-Family-Odyssey-Homesteading-Alaska-ebook/dp/B088SNWSL2/ref=sr_1_1?dchild=1&keywords=9781648950230&qid=1594670313&sr=8-1', 
								},
								paperback:{
									amazon:'https://www.amazon.com/Franklin-Family-Odyssey-Homesteading-Alaska/dp/1648950221/ref=sr_1_1?dchild=1&keywords=9781648950223&qid=1589226085&sr=8-1',
									barnes:'https://www.barnesandnoble.com/w/the-franklin-family-odyssey-homesteading-in-alaska-david-w-erickson/1136998832?ean=9781648950223',
									booksamillion:'https://www.booksamillion.com/p/Franklin-Family-Odyssey-Homesteading-Alaska/David-W-Erickson/9781648950223?id=8049069540563&_ga=2.187559464.1482369874.1605236462-2145380449.1604906972',
								}
							}}
						/>

							
						<div className="commentSection" >
							<DiscussionEmbed {...disqusConfig} />
						</div>
				</div>	
			</main>


	  	</Layout>
	)
}

export default AboutTheBook;