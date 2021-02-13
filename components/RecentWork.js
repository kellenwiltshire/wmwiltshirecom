import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function RecentWork() {
	return (
		<div className='flex flex-col justify-center w-1/2 mt-44 h-auto'>
			<div className='w-full flex justify-center align-middle text-center'>
				<h1 className='text-4xl'>Recent Works</h1>
			</div>

			<div className='flex flex-row'>
				<Image
					src='/extinction.webp'
					height={1060}
					width={700}
					alt='On The Brink of Extinction'
				/>
				<div className='flex align-middle flex-row flex-wrap'>
					<h1 className='text-4xl text-left w-full'>
						On The Brink of Extinction
					</h1>
					<p>
						Three very diverse animals are united in a common goal: survival.
					</p>
					<p>
						Witness their remarkable journey as they search for a new home, one
						away from humans. These inspiring animals face perilous trials and
						harrowing challenges in a magnificent ecosystem that is rapidly
						disappearing. ON THE BRINK OF EXTINCTION is a heartwarming story
						about three unique characters: Marty, Chantel, and Bubba. It’s about
						their amazing journey, the bond they build, and the family they
						become. Humans brought them to the brink of extinction. Is it too
						late now to save them?
					</p>
					<div className='flex flex-row flex-wrap justify-between w-1/2'>
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
						<Link href='/Extinction'>
							<a>
								<span className='transition duration-300 ease-in-out border-b border-white hover:border-b-2 hover:border-black p-1'>
									More Information
								</span>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RecentWork;
