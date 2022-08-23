import { Link } from "react-router-dom";

const KeepBuying = ({ handleInter }) => {
  return (
    <>
      <Link to="/">
        <button onClick={handleInter} className="button-fw ">
          Keep Buying
        </button>
      </Link>
    </>
  );
};
export default KeepBuying;
