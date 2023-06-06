import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Ini adalah halaman Home</h1>
      <button onClick={() => navigate("/")}>back</button>
    </>
  );
};

export default Home;
