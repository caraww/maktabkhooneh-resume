import "../App.css";
import data from "../data.json";

const UpIcon = ({ onClick }) => {
  return (
    <img
      onClick={onClick}
      className="Up"
      src={process.env.PUBLIC_URL + "/" + data.icons.down}
      alt="Up"
      style={{
        maxWidth: "50px",
        position: "relative",
        bottom: "-20px",
        rotate: "180deg",
        animation: "jumpFaster ease-in-out infinite 1.5s",
      }}
    />
  );
};

export default UpIcon;
