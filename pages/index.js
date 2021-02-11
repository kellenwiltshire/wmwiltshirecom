import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import RecentWork from '../components/RecentWork';
import Splash from '../components/Splash';
import Testimonials from '../components/Testimonials';

export default function Home() {
	return (
		<Layout>
			<Navigation />
			<Splash />
			<RecentWork />
			<Testimonials />
			<Footer />
		</Layout>
	);
}
