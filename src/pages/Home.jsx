
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero">
      <h1>Luxury Shopping Experience</h1>
      <p>Discover Premium Products with Style</p>
      <Link to="/shop">
        <button className="hero-btn">Explore Now</button>
      </Link>
    </div>
  );
}

export default Home;
