
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer-section poke-footer">
      <p className="copy-footer poke-copy">
        {new Date().getFullYear()} &#169;{" "}
        <a
          href="https://www.linkedin.com/in/mar%C3%ADa-guadalupe-a-5bb12116a"
          target="_blank"
          rel="noreferrer"
          className="linkedin-url poke-linkedin"
        >
          Luzma Grey
        </a>
        . Gotta Catch 'Em All!
      </p>
    </footer>
  );
};
export default Footer;
