import ExtinctionAnimals from '../components/ExtinctionAnimals';
import ExtinctionBook from '../components/ExtinctionBook';
import Layout from '../components/Layout';

export default function Extinction() {
	return (
		<Layout title='WMWiltshire || Extinction'>
			<ExtinctionBook />
			<ExtinctionAnimals />
		</Layout>
	);
}
