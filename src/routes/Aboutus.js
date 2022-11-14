import { Footer } from '../components/footer';
import { NavBar } from '../components/navbar';
import './Aboutus.css';

export default function About() {
	return (
		<div className="about">
			<NavBar />
			<div className="aboutSection">
				<div className="abtTxt">
					<h1>About Us Page</h1>
					<p>Some text about who we are and what we do.</p>
					<p>
						Resize the browser window to see that this page is
						responsive by the way.
					</p>
				</div>
			</div>

			<h2 style={{ textAlign: 'center' }}>Our Team</h2>
			<div className="row">
				<div className="column">
					<div className="card">
						<div className="container">
							<h2>Gursimran Singh</h2>
							<p className="title">CEO & Founder</p>
							<p>
								Some text that describes me lorem ipsum ipsum
								lorem.
							</p>
							<p>jane@example.com</p>
							<p>
								<button className="button">Contact</button>
							</p>
						</div>
					</div>
				</div>

				<div className="column">
					<div className="card">
						{/* <img src="/w3images/team2.jpg" alt="Mike" style={{width:"100%"}} /> */}
						<div className="container">
							<h2>Gurpreet Singh</h2>
							<p className="title">Art Director</p>
							<p>
								Some text that describes me lorem ipsum ipsum
								lorem.
							</p>
							<p>mike@example.com</p>
							<p>
								<button className="button">Contact</button>
							</p>
						</div>
					</div>
				</div>

				<div className="column">
					<div className="card">
						{/* <img src="/w3images/team3.jpg" alt="John" style={{width:"100%"}} /> */}
						<div className="container">
							<h2>Gurdeep Singh</h2>
							<p className="title">Designer</p>
							<p>
								Some text that describes me lorem ipsum ipsum
								lorem.
							</p>
							<p>john@example.com</p>
							<p>
								<button className="button">Contact</button>
							</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
