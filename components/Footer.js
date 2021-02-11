import React from 'react';

function Footer() {
	return (
		<footer className='w-screen flex flex-row flex-wrap'>
			<div className='flex flex-row'>
				<div className='subscribe'>
					<form action='#'>
						<label for='email'>
							<h3>Subscribe for Updates!</h3>
						</label>
						<input
							className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 rounded-md'
							type='text'
							name='email'
							id='email'
							placeholder='example@email.com'
						/>
						<button className='btn' type='submit'>
							<span className='submit'>Submit</span>
						</button>
					</form>
				</div>
				<div className='social'>
					<a
						className='rounded transition duration-300 ease-in-out hover:bg-blue-900 p-4'
						href='https://www.facebook.com/wmwiltshire'
						target='_blank'
					>
						<span>Facebook</span>
					</a>
					<a
						className='rounded transition duration-300 ease-in-out hover:bg-blue-900 p-4'
						href='https://twitter.com/WMWiltshire'
						target='_blank'
					>
						<span>Twitter</span>
					</a>
					<a
						className='rounded transition duration-300 ease-in-out hover:bg-blue-900 p-4'
						href='https://www.amazon.com/W-M-Wiltshire/e/B07S2MYQ3V/ref=dp_byline_cont_ebooks_1'
						target='_blank'
					>
						<span>Amazon</span>
					</a>
					<a
						className='rounded transition duration-300 ease-in-out hover:bg-blue-900 p-4'
						href='https://www.goodreads.com/author/show/19183152.W_M_Wiltshire?from_search=true'
						target='_blank'
					>
						<span>Goodreads</span>
					</a>
					<a
						className='rounded transition duration-300 ease-in-out hover:bg-blue-900 p-4'
						href='https://www.bookbub.com/profile/w-m-wiltshire?list=about'
						target='_blank'
					>
						<span>Bookbub</span>
					</a>
				</div>
			</div>
			<div className='creator'>
				<p>Created by Kellen Wiltshire Web Development</p>
			</div>
		</footer>
	);
}

export default Footer;
