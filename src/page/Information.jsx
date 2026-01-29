import { useState } from "react";
import "../styles/Information.css";

const Information = () => {
  const [selectedBreed, setSelectedBreed] = useState("");
  const [selectedWeight, setSelectedWeight] = useState("");
  const [selectedHeight, setSelectedHeight] = useState("");
  const [selectedLifespan, setSelectedLifespan] = useState("");
  const [selectedTemperament, setSelectedTemperament] = useState("");
  const [dogs, setDogs] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [weights, setWeights] = useState([]);
  const [heights, setHeights] = useState([]);
  const [lifespan, setLifespan] = useState([]);
  const handleResetFilters = () => {
    setSelectedBreed("");
    setSelectedWeight("");
    setSelectedHeight("");
    setSelectedLifespan("");
  };

  return (
    <div className="information-container">
      <h1>Danh Sách Chó</h1>
      
      {/* Dropdown Filters */}
      <div className="filter-section">
        <div className="filter-group">
          <label htmlFor="breed">Thể Loại: </label>
          <select 
            id="breed" 
            value={selectedBreed} 
            onChange={(e) => setSelectedBreed(e.target.value)}
          >
            <option value="">-- Tất cả thể loại --</option>
            {breeds.map((breed, index) => (
              <option key={index} value={breed}>{breed}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="weight">Cân Nặng: </label>
          <select 
            id="weight" 
            value={selectedWeight} 
            onChange={(e) => setSelectedWeight(e.target.value)}
          >
            <option value="">-- Tất cả cân nặng --</option>
            {weights.map((weight, index) => (
              <option key={index} value={weight}>{weight}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="height">Chiều Cao: </label>
          <select 
            id="height" 
            value={selectedHeight} 
            onChange={(e) => setSelectedHeight(e.target.value)}
          >
            <option value="">-- Tất cả chiều cao --</option>
            {heights.map((height, index) => (
              <option key={index} value={height}>{height}</option>
            ))}
          </select>
        </div>
            <div className="filter-group">
          <label htmlFor="life_span">tuoi tho: </label>
          <select 
            id="life_span" 
            value={selectedHeight} 
            onChange={(e) => selectedLifespan(e.target.value)}
          >
            <option value="">-- Tất cả tuổi thọ --</option>
            {heights.map((life_span, index) => (
              <option key={index} value={life_span}>{life_span}</option>
            ))}
          </select>
        </div>

        <button onClick={handleResetFilters} className="reset-btn">
          Xóa Bộ Lọc
        </button>
      </div>

      {/* Kết quả */}
      <div className="results-info">
        <p>Tìm thấy <strong>{dogs.length}</strong> con chó</p>
      </div>

      {/* Danh sách chó */}
      <div className="dogs-grid">
        {dogs.length > 0 ? (
          dogs.map((dog) => (
            <div key={dog.id} className="dog-card">
              <img src={dog.image} alt={dog.name} />
              <h3>{dog.name}</h3>
              <p><strong>Thể loại:</strong> {dog.breed}</p>
              <p><strong>Cân nặng:</strong> {dog.weight}</p>
              <p><strong>Chiều cao:</strong> {dog.height}</p>
              <p><strong>Giá:</strong> {dog.price?.toLocaleString() || "N/A"} đ</p>
            </div>
          ))
        ) : (
          <p className="no-results">Chưa có dữ liệu</p>
        )}
      </div>
    </div>
  );
};

export default Information;