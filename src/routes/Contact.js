import { Footer } from '../components/footer';
import Form from '../components/Form';
import { NavBar } from '../components/navbar';
import './Contact.css';

export default function Contact() {
	return (
		<div>
			<NavBar />
			<div className="cContainer">
				<Form indicator="purple" show={true} isDisabled={false} />
			</div>
			<Footer />
		</div>
	);
}
