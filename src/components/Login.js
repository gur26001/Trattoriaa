import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

    const navi = useNavigate();

    function handleSubmit(e){
        if(name=="admin" && password=="admin" ){
            navi('/submitted');
        }
    }

	return (
		<div className="login">
			<form>
				<label>username</label>
				<input type="text" onChange={(e) => setName(e.target.value)} />
				<label>password</label>
				<input
					type="password"
					onChange={(e) => setPassword(e.target.value)}
				/>
                <button onClick={handleSubmit}>
                    Submit
                </button>
			</form>
		</div>
	);
}
