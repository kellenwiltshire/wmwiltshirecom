import React from 'react';
import Image from 'next/image';

function NextTimeBooks() {
	return (
		<div>
			{/* <!-- Books - Lost In Time --> */}
			<div className='container'>
				<Image
					src='/lostintime.webp'
					height={622}
					width={400}
					alt='Lost In Time Book Cover'
				/>
				<div className='book-description'>
					<h1>Lost In Time</h1>
					<p>
						Professor Quinn Delaney is in the final stage of his lifelong quest
						to unlock the mystery of time travel. But before he can complete his
						work disaster strikes. The professor’s twins, Dani and Daric, are
						abruptly ripped from the present and flung into the past. Desperate
						to bring his children back home, Quinn turns to a dear friend and
						colleague, Richard Barak Case, for help. They must retrieve a rare
						mineral from an underwater cave halfway around the world; without
						it, Quinn’s children could be lost in time forever. But Richard has
						his own agenda and he’ll stop at nothing to get his hands on
						everything Quinn holds dear. Meanwhile, Dani and her brother, Daric
						must use every ounce of resourcefulness they possess to survive in
						their unfamiliar world. Without knowing how to control the time
						travel bands that jerked them into the past, the siblings are forced
						to helplessly watch history unfold, while fighting the overwhelming
						urge to intervene and risk altering history forever.
					</p>
					<div className='buttons'>
						<a
							className='btn'
							href='https://books2read.com/Lost-In-Time'
							target='_blank'
						>
							<span>Available Now!</span>
						</a>
						<a
							className='btn'
							href='https://www.goodreads.com/book/show/45882252-lost-in-time'
							target='_blank'
						>
							<span>Find on Goodreads</span>
						</a>
						<a className='btn' href='#'>
							<span>Book Club Q&A</span>
						</a>
					</div>
				</div>
			</div>

			{/* <!-- Running Out of Time --> */}
			<div className='container'>
				<Image
					src='/runningoutoftime.webp'
					height={622}
					width={400}
					alt='Running Out of Time Book Cover'
				/>
				<div className='book-description'>
					<h1>Runnings Out of Time</h1>
					<p>
						The NEXT TIME series is back with another gripping adventure across
						time. After narrowly cheating death, our favorite time-travelling
						twins, Dani and Daric, are back in action. With no clue how to find
						their way back home, the siblings attempt to navigate life in a
						period of history they’ve only ever read about. Each jump in time
						takes them to a more foreign and ancient place in the world’s
						timeline, causing the twins to doubt whether they will ever see
						their home again. In the present, Professor Quinn Delaney struggles
						to complete his work, to have any chance of bringing his children
						back from the past, but he runs into serious complications of his
						own. Richard, meanwhile, remains a man fueled by a feverish desire
						to take everything from Quinn, including rekindling the spark once
						shared with Quinn’s wife, Sandra. But just how far will Richard go
						to ensure his devious plan succeeds? As the Delaney family will soon
						discover, a once close family friend has unexpectedly become an
						unstoppable adversary.
					</p>
					<div className='buttons'>
						<a
							className='btn'
							href='https://books2read.com/RunningOutOfTime'
							target='_blank'
						>
							<span>Available Now!</span>
						</a>
						<a
							className='btn'
							href='https://www.goodreads.com/book/show/51194182-running-out-of-time'
							target='_blank'
						>
							<span>Find on Goodreads</span>
						</a>
						<a className='btn' href='#'>
							<span>Book Club Q&A</span>
						</a>
					</div>
				</div>
			</div>

			{/* <!-- Race Against Time --> */}
			<div className='container'>
				<Image
					src='/raceagainsttime.webp'
					height={622}
					width={400}
					alt='Race Against Time Book Cover'
				/>
				<div className='book-description'>
					<h1>Race Against Time</h1>
					<p>
						At last, the final installment in the NEXT TIME series is here.
						Professor Quinn Delaney has proven time travel is possible, but at
						what cost? His children have vanished. His wife is in danger. And
						he’s been left for dead. Closer than ever to getting his hands on
						Quinn’s remarkable invention, Richard manipulates everyone to fill
						the shoes of the man he betrayed. When the determined Quinn breaks
						out of his subterranean prison, he vows to put a stop to Richard’s
						plan; failure is not an option. Quinn must bring his children back
						home, if it’s not too late. In the meantime, Dani and Daric barely
						avoid capture in a brutal civil war by tumbling into yet another
						time period. Seeking shelter in a small Roman town, the twins soon
						realize they are standing in the shadow of a sleeping giant. In a
						last-ditch effort to jump into another period and escape certain
						death, Dani and Daric discover they just may have run out of time.
					</p>
					<div className='buttons'>
						<a
							className='btn'
							href='https://books2read.com/RaceAgainstTime'
							target='_blank'
						>
							<span>Available Now!</span>
						</a>
						<a
							className='btn'
							href='https://www.goodreads.com/book/show/48500003-race-against-time'
							target='_blank'
						>
							<span>Find on Goodreads</span>
						</a>
						<a className='btn' href='#'>
							<span>Book Club Q&A</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NextTimeBooks;