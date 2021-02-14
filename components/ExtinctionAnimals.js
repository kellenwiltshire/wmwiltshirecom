import React from 'react';
import Image from 'next/image';

function ExtinctionAnimals() {
	return (
		<div className='w-full flex flex-row justify-center'>
			<div className='container flex flex-row flex-wrap justify-center'>
				<h1 className='text-4xl text-center w-full'>
					Support the Heroes of the Story through the WWF
				</h1>
				<div className='m-5 hover:bg-gray-400 transition duration-300 ease-in-out flex flex-row flex-wrap justify-center'>
					<a
						className='w-full'
						href='https://gifts.worldwildlife.org/gift-center/gifts/Species-Adoptions/Black-footed-Ferret.aspx'
					>
						<Image src='/Bubba.webp' height={250} width={250} alt='Bubba' />
					</a>
					<a
						href='https://gifts.worldwildlife.org/gift-center/gifts/Species-Adoptions/Black-footed-Ferret.aspx'
						target='_blank'
					>
						<span>Bubba</span>
					</a>
				</div>
				<div className='m-5 hover:bg-gray-400 transition duration-300 ease-in-out flex flex-row flex-wrap justify-center'>
					<a
						className='w-full'
						href='https://gifts.worldwildlife.org/gift-center/gifts/Species-Adoptions/Prairie-Dog.aspx'
					>
						<Image src='/Marty.webp' height={250} width={250} alt='Marty' />
					</a>
					<a
						href='https://gifts.worldwildlife.org/gift-center/gifts/Species-Adoptions/Prairie-Dog.aspx'
						target='_blank'
					>
						<span className='transition duration-300 ease-in-out border-b border-white hover:border-b-2 hover:border-black p-1'>
							Marty
						</span>
					</a>
				</div>
				<div className='m-5 hover:bg-gray-400 transition duration-300 ease-in-out flex flex-row flex-wrap justify-center'>
					<a
						className='w-full'
						href='https://wildlifetree.com/collections/north-american-animals/products/7-inch-stuffed-burrowing-owl-plush-animal-kingdom-collection'
					>
						<Image src='/Chantel.webp' height={250} width={250} alt='Chantel' />
					</a>
					<a
						href='https://wildlifetree.com/collections/north-american-animals/products/7-inch-stuffed-burrowing-owl-plush-animal-kingdom-collection'
						target='_blank'
					>
						<span className='transition duration-300 ease-in-out border-b border-white hover:border-b-2 hover:border-black p-1'>
							Chantel
						</span>
					</a>
				</div>
			</div>
		</div>
	);
}

export default ExtinctionAnimals;
