import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchDogByName } from "../api/Dogapi.jsx";

const Home = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!keyword.trim()) return;

    try {
      setLoading(true);
      setError("");
      setDog(null);

      // 🔍 Gọi API MongoDB
      const dogs = await searchDogByName(keyword);

      if (!dogs || dogs.length === 0) {
        setError("Không tìm thấy giống chó 😢");
        return;
      }

      //  Lấy con đầu tiên
      setDog(dogs[0]);
    } catch (err) {
      console.error(err);
      setError("Có lỗi xảy ra, thử lại sau!");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="home">
      <div className="home-container">

        {/* LEFT */}
        <div className="home-left">
          <h1>
            Explore
             <span> dog breed</span> <br /> you love
          </h1>

          <p>
            Search your favourite dog breed and get detailed information
          </p>

          <div className="search-box">
            <input
              placeholder="Find Your Favourite Pet Here"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch}>🔍</button>
          </div>

          {loading && <p>Đang tìm kiếm...</p>}
          {error && <p className="error">{error}</p>}
        </div>

        {/* RIGHT */}
        <div className="home-right">
          {!loading && dog && (
            <div className="dog-info">
              <img
                src={`http://localhost:3000${dog.image}`}
                alt={dog.name}
                className="dog-img"
              />
              <h2>{dog.name}</h2>
              {dog.origin && (
                <p><b>Origin:</b> {dog.origin}</p>
              )}
              {dog.temperament && (
                <p><b>Temperament:</b> {dog.temperament.join(",")} </p>
              )}
              {dog.life_span && (
                <p><b>Life span:</b> {dog.life_span}</p>
              )}
              <div className="btn-wrapper" style={{display:'flex', justifyContent:'flex-end'}}>
                <button 
                  className="more-info-btn"
                  onClick={() => navigate(`/Information/${dog._id}`)}
                >
                  More Information
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Home;
