
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer-section">
      <p className="copy-footer">
        2022 &#169;{" "}
        <a
          href="https://www.linkedin.com/in/mar%C3%ADa-guadalupe-a-5bb12116a"
          target="_blank"
          rel="noreferrer"
          className="linkedin-url"
        >
          {" "}
          Luzma Grey
        </a>
        . All rights reserved
      </p>
    </footer>
  );
};
export default Footer;
