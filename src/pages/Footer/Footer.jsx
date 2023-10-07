import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-300 text-base-content">
                <nav>
                    <header className="footer-title">Others</header>
                    <p className="">Head Office: Dhanmondi, Dhaka.</p>
                    <p className="">Contact No: 01888-000000</p>
                    <p className="">Email: info@example.com</p>

                </nav>
                <nav>
                    <header className="footer-title">Quick Links</header>
                    <Link to = '/' className="link link-hover">Home</Link>
                    <Link to = '/contact' className="link link-hover">Contact</Link>
                    <Link to = '/blog' className="link link-hover">Blog</Link>
                    <Link to = '/about' className="link link-hover">About us</Link>
                </nav>
                <nav>
                    <header className="footer-title">Social</header>
                    <div className="grid grid-flow-col gap-4 text-3xl">
                    <Link><FaFacebook></FaFacebook></Link>
                    <Link><FaLinkedin></FaLinkedin></Link>
                    <Link><FaTwitter></FaTwitter></Link>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;