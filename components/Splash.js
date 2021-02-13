import React from 'react';
import Image from 'next/image';

function Splash() {
	return (
		<div className='w-screen max-h-96 bg-cover flex justify-center'>
			<div>
				<Image
					src='/splash.jpg'
					alt='Splash Image'
					height={500}
					width={1920}
					className='object-cover'
					objectFit='cover'
				/>
			</div>
			<div className='absolute text-white text-5xl pt-60'>WMWiltshire</div>
		</div>
	);
}

export default Splash;
