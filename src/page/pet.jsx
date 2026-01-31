import { useState, useEffect } from "react";
import "../styles/index.css";
import { getAllDogs } from "../api/Dogapi.jsx";
import { useNavigate } from "react-router-dom";

const Pet = () => {
  const [dogs, setDogs] = useState([]);
  const navigate = useNavigate();

  const fetchDogs = async () => {
    try {
      const data = await getAllDogs();
      setDogs(data);
    } catch (error) {
      console.error("Error fetching dogs:", error);
    }
  };

  useEffect(() => {
    fetchDogs();
  }, []);

  return (
    <div className="pet-container">
      <h1>Danh Sách Chó</h1>

      <div className="dogs-grid">
        {dogs.length > 0 ? (
          dogs.map((dog) => (
            <div key={dog._id || dog.id} className="dog-card">
              <img src={`http://localhost:3000${dog.image}`} alt={dog.name} />
              <h3>{dog.name}</h3>
              <p><b>Thể loại:</b> {dog.breed_group}</p>
              <p>
                <b>Cân nặng:</b> {dog.weight?.min} - {dog.weight?.max} kg
              </p>
              <p>
                <b>Chiều cao:</b> {dog.height?.min} - {dog.height?.max} cm
              </p>
              <p><b>Tuổi thọ:</b> {dog.life_span}</p>
              <div classname="btn-wrapper" style={{display:'flex', justifyContent:'flex-end', marginRight:'10px'}}> 
                <button className="more-info-btn"
                  onClick={() => navigate(`/Information/${dog._id}`)}
                >
                  More Information
                  </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">Chưa có dữ liệu</p>
        )}
      </div>
    </div>
  );
};

export default Pet;
