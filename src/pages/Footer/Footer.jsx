import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-300 text-base-content">
                <nav>
                    <header className="footer-title">Services</header>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </nav>
                <nav>
                    <header className="footer-title">Quick Links</header>
                    <Link className="link link-hover">Home</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Blog</Link>
                    <Link className="link link-hover">About us</Link>
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