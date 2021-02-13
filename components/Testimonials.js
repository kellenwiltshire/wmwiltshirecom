import React from 'react';

function Testimonials() {
	return (
		<div className='w-2/3'>
			<div className='flex flex-col lg:grid lg:gap-4 2xl:gap-6 lg:grid-cols-3 2xl:row-span-2 2xl:pb-8 ml-2 pt-4 px-6'>
				{/* <!-- Beginning of the component about SHelby W --> */}
				<div className='bg-indigo-600 lg:order-1 lg:row-span-1 2xl:row-span-1 lg:col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0'>
					<div className='mx-6 my-8 2xl:mx-10'>
						<h1 className='text-white text-lg'>Shelby W</h1>
					</div>
					<div className='-mt-6 relative'>
						<p className='text-white text-lg font-bold px-7 lg:px-9 2xl:pt-6 2xl:mx-2 capitalize'>
							BRILLIANT!
						</p>
						<br />
						<p className='text-white text-opacity-50 font-medium text-xl px-7 lg:px-9 mb-3 2xl:pb-8 2xl:mx-2'>
							From the moment I started this book I was immediately hooked. The
							end of each chapter leaves you eager to continue to the next. The
							author really sets the story, and brings the characters to life! A
							great read!
						</p>
					</div>
				</div>

				{/* <!-- Beginning of the component about Debbie S --> */}
				<div className='bg-gray-900 lg:order-2 lg:row-span-1 2xl:row-span-1 lg:col-span-1 rounded-lg shadow-xl pb-4 mb-5 lg:mb-0'>
					<div className='mx-8 2xl:mx-10 my-10'>
						<h1 className='text-white text-lg'>Debbie S</h1>
					</div>
					<div className='-mt-8 mx-1 lg:mx-2'>
						<p className='text-white text-lg font-semibold pt-1 px-6 2xl:px-8 lg:pl-5 lg:pr-8 capitalize'>
							AN INCREDIBLE ADVENTURE!
						</p>
						<br />
						<p className='text-white text-opacity-50 font-medium text-xl pl-6 lg:pl-5 pr-4 -mt-1 lg:mt-6 2xl:mt-2 2xl:px-8'>
							A wonderful read packed with impeccably researched details. It
							truly transports the reader to the author’s destinations. Bring on
							#2!
						</p>
					</div>
				</div>

				{/* <!-- Beginning of the component about Carol H --> */}
				<div className='bg-primary-color-white lg:order-3 lg:row-span-1 lg:col-span-1 rounded-lg shadow-xl mb-5 lg:mb-0 2xl:mb-8'>
					<div className='mx-8 my-10 lg:my-8'>
						<h1 className='primary-color-blackish-blue text-lg'>Carol H</h1>
					</div>
					<div className='-mt-4 ml-5 mr-11'>
						<p className='primary-color-blackish-blue text-xl font-bold px-2 lg:px-3 -mt-6 lg:-mt-5 2xl:mt-12 2xl:pb-6 capitalize'>
							FIRST TIME AUTHOR. GREAT READ.
						</p>
						<br />
						<p className='primary-color-blackish-blue-opacity font-medium text-xl pl-2 lg:pl-3 lg:pr-4 mb-6 2xl:pt-2 -mt-3'>
							Thoroughly enjoyed how this book captured my interest from the
							very first page. I have always loved a time travel storyline that
							takes present day fictional characters back to a time they have
							only read about in their history books. Very excited for book #2
						</p>
					</div>
				</div>

				{/* <!-- Beginning of the component about Kellen W --> */}
				<div className='bg-purple-800 lg:order-4 lg:row-span-2 2xl:row-span-1 col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0 2xl:mb-8 lg:pb-14 2xl:pb-20'>
					<div className='mx-8 my-8'>
						<h1 className='text-white text-lg'>Kellen W</h1>
					</div>
					<div className='px-3 -mt-3 mb-5 lg:mb-0'>
						<p className='text-white text-lg font-semibold px-4 -mt-3 lg:-mt-6 2xl:mt-8 capitalize'>
							AMAZING TRILOGY!
						</p>
						<br />
						<p className='text-white text-opacity-50 font-medium text-xl px-4 mt-1 lg:-mt-3 2xl:mt-6'>
							Once you get going it is impossible to stop! Every twist and turn
							through history while an engaging present plot keeps the stakes
							high keep you turning every page! I hope there is more of the
							Delaney's in the future!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Testimonials;
