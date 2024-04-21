import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from 'firebase/auth';
import useUser from "../hooks/useUser";

function NavBar() {
    const { user } = useUser();
    const navigate = useNavigate();
    return (
        <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white fixed w-full py-3">
            <ul className="flex justify-center items-center font-bold text-lg">
                <li>
                    <Link to="/" className="hover:bg-indigo-700 px-6 py-3 transition-colors duration-300">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="hover:bg-purple-700 px-6 py-3 transition-colors duration-300">About</Link>
                </li>
                <li>
                    <Link to="/articles" className="hover:bg-pink-700 px-6 py-3 transition-colors duration-300">Articles</Link>
                </li>
            </ul>
            <div>
                {user
                    ? <button onClick={() => {
                        signOut(getAuth());
                    }}>Log Out</button>
                    : <button onClick={() => {
                        navigate('/login');
                    }}>Log In</button>}
            </div>
        </nav>
    );
}

export default NavBar;
