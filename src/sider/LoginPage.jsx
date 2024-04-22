import { useState } from 'react'
import { auth } from '../../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredential);
            const user = userCredential.user;
            sessionStorage.setItem('user', user.email);
            navigate("/medarbejder");
        } catch (error) {
            console.error(error);
        }

        
    }


    return (
        <section className='dark'>
        <div id='webinarside'>
            <h1>LOG IND<span className='prik'>.</span></h1>
            <form onSubmit={handleSubmit} className='login-form'>
                <input className="webinar_kasse"
                    type="email"
                    placeholder="Your Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="useremail"
                />
                <input className="webinar_kasse"
                    type="password"
                    placeholder="Your Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="userpassword"
                />
                <button type="submit" className='knap'>Login</button>
            </form>
        </div>
        </section>
    )
}