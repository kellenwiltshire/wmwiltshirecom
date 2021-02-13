import React from 'react';
import Image from 'next/image';

function ExtinctionBook() {
	return (
		<div>
			{/* <!-- Book Description --> */}

			<div className='container'>
				<Image
					src='/extinction.webp'
					height={530}
					width={350}
					alt='On The Brink of Extinction'
				/>
				<div className='book-description'>
					<p>
						Three very diverse animals are united in a common goal: survival.
						Witness their remarkable journey as they search for a new home, one
						away from humans. These inspiring animals face perilous trials and
						harrowing challenges in a magnificent ecosystem that is rapidly
						disappearing. ON THE BRINK OF EXTINCTION is a heartwarming story
						about three unique characters: Marty, Chantel, and Bubba. It’s about
						their amazing journey, the bond they build, and the family they
						become. Humans brought them to the brink of extinction. Is it too
						late now to save them?
					</p>
					<div className='buttons'>
						<a
							className='btn'
							href='https://books2read.com/brink-of-extinction'
							target='_blank'
						>
							<span>Available Now!</span>
						</a>
						<a
							className='btn'
							href='https://www.goodreads.com/book/show/56072452-on-the-brink-of-extinction'
							target='_blank'
						>
							<span>Find on Goodreads</span>
						</a>
					</div>
				</div>
			</div>

			{/* <!-- ANIMALS --> */}

			<div className='header'>
				<h1 className='header-text'>
					Support the Heroes of the Story through the WWF
				</h1>
			</div>
			<div className='container'>
				<div className='animals'>
					<a
						className='animal-pictures'
						href='https://gifts.worldwildlife.org/gift-center/gifts/Species-Adoptions/Black-footed-Ferret.aspx'
					>
						<Image src='/Bubba.webp' height={250} width={250} alt='Bubba' />
					</a>
					<a
						className='btn'
						href='https://gifts.worldwildlife.org/gift-center/gifts/Species-Adoptions/Black-footed-Ferret.aspx'
						target='_blank'
					>
						<span>Bubba</span>
					</a>
				</div>
				<div className='animals'>
					<a
						className='animal-pictures'
						href='https://gifts.worldwildlife.org/gift-center/gifts/Species-Adoptions/Prairie-Dog.aspx'
					>
						<Image src='/Marty.webp' height={250} width={250} alt='Marty' />
					</a>
					<a
						className='btn'
						href='https://gifts.worldwildlife.org/gift-center/gifts/Species-Adoptions/Prairie-Dog.aspx'
						target='_blank'
					>
						<span>Marty</span>
					</a>
				</div>
				<div className='animals'>
					<a
						className='animal-pictures'
						href='https://wildlifetree.com/collections/north-american-animals/products/7-inch-stuffed-burrowing-owl-plush-animal-kingdom-collection'
					>
						<Image src='/Chantel.webp' height={250} width={250} alt='Chantel' />
					</a>
					<a
						className='btn'
						href='https://wildlifetree.com/collections/north-american-animals/products/7-inch-stuffed-burrowing-owl-plush-animal-kingdom-collection'
						target='_blank'
					>
						<span>Chantel</span>
					</a>
				</div>
			</div>
		</div>
	);
}

export default ExtinctionBook;
