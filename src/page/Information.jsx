import { useState, useEffect } from "react"; // Sử dụng useEffect để gọi API khi component được gắn
import { getDogById } from "../api/Dogapi.jsx"; 
import { useParams } from "react-router-dom"; // Sử dụng useParams để lấy ID từ URL
import "../styles/index.css";
const Information = () => {
  const { id } = useParams();
  const [dog, setDog] = useState(null);

  const fetchDogById = async (id) => {
    try {
      const data = await getDogById(id);
      setDog(data);
    } catch (error) {
      console.error("Error fetching dog by ID:", error);
    }
  };

  useEffect(() => {
    fetchDogById(id);
  }, [id]);

  if (!dog) return <p>Đang tải dữ liệu...</p>;

  return (
    <div className="info-wrapper">
      <div className="info-card">
        <div className="info-image">
          <img
            src={`http://localhost:3000${dog.image}`}
            alt={dog.name}
          />
        </div>

        <div className="info-content">
          <h1 >{dog.name}</h1>

          <ul>
            <li><b>Mô Tả:</b> {dog.description}</li>
            <li><b>kích cỡ:</b> {dog.size }</li>
            <li><b>Thể loại:</b> {dog.breed_group || "Đang cập nhật"}</li>
            <li><b>Tuổi thọ:</b> {dog.life_span}</li>
            <li>
              <b> Cân nặng:</b>{" "}
              {dog.weight?.min} - {dog.weight?.max} kg
            </li>
            <li>
              <b> Chiều cao:</b>{" "}
              {dog.height?.min} - {dog.height?.max} cm
            </li>
            <li>
              <b> Tính cách:</b>{" "}
              {dog.temperament?.join(", ")}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Information;
