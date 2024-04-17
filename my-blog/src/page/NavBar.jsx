import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav className="border-b-4 border-black text-center fixed top-0 w-full bg-white">
            <ul className="flex justify-center font-bold">
                <li className="hover:text-white hover:bg-black px-4 py-2">
                    <Link to="/">Home</Link>
                </li>
                <li className="hover:text-white hover:bg-black px-4 py-2">
                    <Link to="/about">About</Link>
                </li>
                <li className="hover:text-white hover:bg-black px-4 py-2">
                    <Link to="/articles">Articles</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar