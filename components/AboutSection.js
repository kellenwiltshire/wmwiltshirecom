import React from 'react';
import Image from 'next/image';

function AboutSection() {
	return (
		<div className='w-full flex flex-row flex-wrap justify-center'>
			<div className='w-full flex justify-center h-96'>
				<Image
					src='/authorpicture.webp'
					height={788}
					width={1787}
					alt='Author Picture'
					className='object-cover'
				/>
			</div>
			<div className='container mt-5'>
				<h1 className='text-center text-6xl font-header'>Wendy Wiltshire</h1>
				<p className='leading-loose m-10 font-body text-lg'>
					I was born and raised in Canada and currently reside on the outskirts
					of Toronto with my four-legged kid, Keiko (Shiba Inu). After a lengthy
					and successful career with Canada’s largest financial institution, I
					decided to start the next chapter of my life. Winters in Canada can be
					long and cold, which gave me the perfect opportunity to explore my
					creativity. When I began writing Next Time, I had no idea it would
					turn into a trilogy. A rather ambitious debut project, don’t you
					think? After spending countless hours researching many historical
					periods, the Next Time series started to materialize; adventures
					through history. When spring and summer rolls around, you can find me
					in search of the elusive little white ball. Golf season in Canada is
					short, so when the weather permits, I’m out on the fairway, or in the
					bushes, or fishing a ball out of a creek, or trying to chip out of the
					sand. Aww, the great outdoors, don’t you just love it? I also enjoy
					playing pickleball. I gave up curling in 2016 and started playing
					pickleball because it gave me a better cardio workout and I could play
					year-round. In between writing, golf and pickleball, I volunteer at
					the Toronto Zoo, providing guided tours for school children. It’s very
					rewarding when you look down, or in my case sometimes up, into those
					young faces and see wonder and amazement after you’ve just told them
					you’re taking them to see a real dragon! I have a private pilot
					licence and have logged hours in a Cessna 150 and 152. My love of
					flying came from my dad. He used to take me flying with him in his
					plane when I was but a wee lass. I enjoyed the sense of freedom that
					came with flying in a small airplane. As they say, the sky’s the
					limit! I also enjoy photography, especially photographs of nature.
				</p>
			</div>
		</div>
	);
}

export default AboutSection;
