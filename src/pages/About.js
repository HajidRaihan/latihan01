import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Ini adalah halaman about</h1>
      <button onClick={() => navigate("/")}>Back</button>
    </>
  );
};
export default About;
