import Layout from '../components/Layout';
import RecentWork from '../components/RecentWork';
import Splash from '../components/Splash';
import Testimonials from '../components/Testimonials';

export default function Home() {
	return (
		<Layout title='WMWiltshire'>
			<Splash />
			<RecentWork />
			<Testimonials />
		</Layout>
	);
}
