import React from 'react';
import Head from 'next/head';
import Navigation from './Navigation';
import Footer from './Footer';

function Layout({ title, children }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<link rel='icon' href='/favicon.ico' />

				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Josefin+Slab&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<Navigation />
			<main className='mx-auto flex justify-center flex-row flex-wrap w-screen'>
				{children}
			</main>
			<Footer />
		</div>
	);
}

export default Layout;
