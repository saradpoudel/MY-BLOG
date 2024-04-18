import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white fixed w-full">
            <ul className="flex justify-center items-center font-bold text-lg">
                <li className="hover:bg-indigo-700 px-6 py-3 transition-colors duration-300">
                    <Link to="/" className="hover:text-gray-200">Home</Link>
                </li>
                <li className="hover:bg-purple-700 px-6 py-3 transition-colors duration-300">
                    <Link to="/about" className="hover:text-gray-200">About</Link>
                </li>
                <li className="hover:bg-pink-700 px-6 py-3 transition-colors duration-300">
                    <Link to="/articles" className="hover:text-gray-200">Articles</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
