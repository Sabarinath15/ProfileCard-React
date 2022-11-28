import img from '../images/profileImg.jpg';

//icons
import { FaEnvelope, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

export default function Card() {
    return (
        <div className="card">
            <div className="img-con">
                <img src={img} alt="" />
            </div>
            <div className="info">
                <h1>Sabarinath</h1>
                <p>Full-Stack Developer</p>
                <span>sabarinath.website</span>
            </div>
            <div className="buttons">
                <button className='email'><FaEnvelope/><p>Email</p></button>
                <button className='linkedin'><FaLinkedin/><p>LinkedIn</p></button>
            </div>
            <div className="about">
                <h3>About</h3>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>
            <div className="about">
                <h3>Interests</h3>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
            <footer>
                <button><FaTwitter/></button>
                <button><FaFacebook/></button>
                <button><FaInstagram/></button>
                <button><FaGithub/></button>
            </footer>
        </div>
    );
}