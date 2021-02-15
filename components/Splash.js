import React from 'react';
import Image from 'next/image';

function Splash() {
	return (
		<div className='w-screen max-h-96 bg-cover flex flex-wrap flex-row justify-center'>
			<div>
				<Image
					src='/splash.jpg'
					alt='Splash Image'
					height={500}
					width={1920}
					className='md:object-cover'
					objectFit='cover'
				/>
			</div>
			<div className='absolute text-white text-4xl lg:text-7xl pt-8 md:pt-20 lg:pt-60 font-header'>
				WMWiltshire
			</div>
		</div>
	);
}

export default Splash;
