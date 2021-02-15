import React from 'react';

function Contact() {
	return (
		<div className='w-full mt-10'>
			<div className='max-w-2xl bg-white py-10 px-5 m-auto w-full font-header'>
				<div className='text-4xl mb-6 text-center '>
					<p>Burning question or want to say Hi?</p>
					<p>I'd be happy to hear from you!</p>
				</div>

				<form className='grid grid-cols-2 gap-4 max-w-xl m-auto font-body'>
					<div className='col-span-2 lg:col-span-1'>
						<input
							type='text'
							className='border-solid border-gray-400 border-2 p-3 md:text-xl w-full focus:ring-4'
							placeholder='Name'
							required
						/>
					</div>

					<div className='col-span-2 lg:col-span-1'>
						<input
							type='text'
							className='border-solid border-gray-400 border-2 p-3 md:text-xl w-full focus:ring-4'
							placeholder='Email Address'
							required
						/>
					</div>

					<div className='col-span-2'>
						<textarea
							cols='30'
							rows='8'
							className='border-solid border-gray-400 border-2 p-3 md:text-xl w-full focus:ring-4'
							placeholder='Message'
							required
						></textarea>
					</div>

					<div className='col-span-2 text-right'>
						<button className='py-3 px-6 bg-blue-600 rounded text-white font-bold w-full sm:w-32'>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Contact;
