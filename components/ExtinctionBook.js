import React from 'react';
import Image from 'next/image';

function ExtinctionBook() {
	return (
		<div>
			{/* <!-- Book Description --> */}

			<div className='container flex flex-row flex-wrap'>
				<Image
					src='/extinction.webp'
					height={530}
					width={350}
					alt='On The Brink of Extinction'
					className='w-1/3'
				/>
				<div className='text-xl flex flex-wrap flex-row justify-between w-2/3 mt-10'>
					<h1 className='text-4xl font-header'>On The Brink of Extinction</h1>
					<p className='m-6 font-body'>
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
					<div className='w-full flex space-x-4 my-5 font-body'>
						<a
							href='https://books2read.com/brink-of-extinction'
							target='_blank'
						>
							<span className='transition duration-300 ease-in-out border-b border-white hover:border-b-2 hover:border-black p-1'>
								Available Now!
							</span>
						</a>
						<a
							href='https://www.goodreads.com/book/show/56072452-on-the-brink-of-extinction'
							target='_blank'
						>
							<span className='transition duration-300 ease-in-out border-b border-white hover:border-b-2 hover:border-black p-1'>
								Find on Goodreads
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ExtinctionBook;
