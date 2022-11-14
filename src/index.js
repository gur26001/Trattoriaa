import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './routes/Aboutus';
import Contact from './routes/Contact';
import Response from './routes/Response';
import Login from './components/Login';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<React.StrictMode>
					<Routes>
						<Route path="/" element={<App />}></Route>
						<Route path="/aboutus" element={<About />}></Route>
						<Route path="/contact" element={<Contact />}></Route>
						<Route path="/submitted" element={<Response />}></Route>
						<Route path="/admin" element={<Login />}></Route>
					</Routes>
				</React.StrictMode>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
