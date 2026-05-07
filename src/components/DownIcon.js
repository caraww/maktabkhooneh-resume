import "../App.css";
import data from "../data.json";

const DownIcon = ({ onClick }) => {
  return (
    <img
      onClick={onClick}
      className="down"
      src={process.env.PUBLIC_URL + "/" + data.icons.down}
      alt="Down"
      style={{
        maxWidth: "50px",
        position: "relative",
        bottom: "-50px",
        animation: "jumpFaster ease-in-out infinite 1.5s",
      }}
    />
  );
};

export default DownIcon;
