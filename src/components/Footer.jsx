import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-blue-950 px-[5%] py-[3%] mt-10 flex justify-between text-white items-center">
      <div>
        <p className="text-[24px] text-white font-bold">Star Tech</p>
      </div>
      <div>
        <h3 className="mb-[10px] text-lg">Useful Links</h3>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">Terms and Condition</a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="mb-[10px] text-lg">Follow us on our Socials</h3>
        <ul className="flex gap-[20px] text-2xl justify-center">
          <li>
            <FaFacebook />
          </li>
          <li>
            <AiFillInstagram />
          </li>
          <li>
            <FaSquareXTwitter />
          </li>
          <li>
            <FaTiktok />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
