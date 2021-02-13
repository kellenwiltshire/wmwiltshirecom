import React from 'react';

function Contact() {
	return (
		<div className='w-full'>
			<div className='header contact-header'>
				<h1 className='header-text'>Drop Me a Line!</h1>
			</div>

			<div className='container'>
				<p>
					Do you have a burning question about the Next Time Trilogy or On The
					Brink of Extinction? Or do you just want to say hi? Maybe you want a
					virtual guest at your next Book Club meeting! Just send me a message
					through the form below and I will get back to you!
				</p>
			</div>

			<div className='container'>
				<form className='contact-form' action='#'>
					<input type='text' name='name' id='name' placeholder='Name' />
					<input
						type='text'
						name='email'
						id='email'
						placeholder='example@email.com'
					/>
					<textarea name='message' placeholder='Comments'></textarea>
					<button className='btn' type='submit'>
						<span className='submit'>Submit</span>
					</button>
				</form>
			</div>
		</div>
	);
}

export default Contact;
