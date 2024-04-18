import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="text-center py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full">
            <div className="max-w-4xl mx-auto">

                {/* Social Media Links */}
                <div className="flex justify-center">
                    {/* Replace # with your actual social media links */}
                    <a target="_blank" href="https://www.linkedin.com/in/saradpoudel/" className="text-white mx-2">
                        <FaLinkedin size={30} className="inline-block" />
                    </a>
                    <a target="_blank" href="https://github.com/saradpoudel/" className="text-white mx-2">
                        <FaGithub size={30} className="inline-block" />
                    </a>
                    <a target="_blank" href="mailto:sarad@saradpoudel.com.au" className="text-white mx-2">
                        <FaEnvelope size={30} className="inline-block" />
                    </a>
                    <a target="_blank" href="https://saradpoudel.com.au/" className="text-white mx-2">
                        <FaGlobe size={30} className="inline-block" />
                    </a>
                </div>
                <p className="text-md pt-2 text-white">© 2024 My Developer Blog. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
