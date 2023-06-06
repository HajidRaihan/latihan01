import { useNavigate } from "react-router-dom";

const Intro = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Helloo : {props.name}</h1>
      <button onClick={() => navigate("/home")}>Home</button>
      <button onClick={() => navigate("/about")}>About</button>
    </div>
  );
};

export default Intro;
