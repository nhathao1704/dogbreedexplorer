import { useState, useEffect } from "react";
import { getDogById } from "../api/Dogapi.jsx";
import {
  getFavorites,
  toggleFavorite,
} from "../api/favoriteapi.jsx";
import {
  getComments,
  createComment,
} from "../api/commentApi.jsx";
import { useParams } from "react-router-dom";
import "../styles/index.css";

const Information = () => {
  const { id } = useParams();

  const [dog, setDog] = useState(null);
  const [isFav, setIsFav] = useState(false);
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  // ================= FETCH DOG =================
  const fetchDog = async () => {
    try {
      const data = await getDogById(id);
      setDog(data);
    } catch (err) {
      console.error(err);
    }
  };

  // ================= FETCH COMMENTS =================
  const fetchCommentsData = async () => {
    try {
      const data = await getComments(id);
      setComments(data);
    } catch (err) {
      console.error(err);
    }
  };

  // ================= CHECK FAVORITE =================
  const checkFavorite = async () => {
    try {
      const favorites = await getFavorites();

      // 🔥 FIX CHUẨN (do đã populate)
      const isLiked = favorites.some(
        (f) => f._id?.toString() === id
      );

      setIsFav(isLiked);
    } catch (err) {
      console.log("Chưa đăng nhập hoặc lỗi favorite");
    }
  };

  // ================= LOAD DATA =================
  useEffect(() => {
    fetchDog();
    fetchCommentsData();
    checkFavorite(); // 🔥 QUAN TRỌNG
  }, [id]);

  // ================= FAVORITE =================
  const handleFavorite = async () => {
    try {
      await toggleFavorite(id);

      // 🔥 sync lại từ DB (chuẩn hơn toggle state)
      checkFavorite();
    } catch (err) {
      alert("Bạn cần đăng nhập");
    }
  };

  // ================= COMMENT =================
  const handleComment = async () => {
    if (!text.trim()) return;

    try {
      await createComment(id, text);
      setText("");
      fetchCommentsData();
    } catch (err) {
      alert(err.message);
    }
  };

  if (!dog) return <p>Đang tải dữ liệu...</p>;

  return (
    <div className="info-wrapper">
      {/* CARD */}
      <div className="info-card">

        {/* ❤️ HEART */}
        <div
          className={`heart ${isFav ? "active" : ""}`}
          onClick={handleFavorite}
        >
          {isFav ? "❤️" : "🤍"}
        </div>

        {/* 🖼 IMAGE */}
        <div className="info-image">
          <img
            src={`http://localhost:3000${dog.image}`}
            alt={dog.name}
          />
        </div>

        {/* 📄 INFO */}
        <div className="info-content">
          <h1>{dog.name}</h1>

          <ul>
            <li><b>Mô tả:</b> {dog.description}</li>
            <li><b>Kích cỡ:</b> {dog.size}</li>
            <li><b>Thể loại:</b> {dog.breed_group || "Đang cập nhật"}</li>
            <li><b>Tuổi thọ:</b> {dog.life_span}</li>
            <li>
              <b>Cân nặng:</b> {dog.weight?.min} - {dog.weight?.max} kg
            </li>
            <li>
              <b>Chiều cao:</b> {dog.height?.min} - {dog.height?.max} cm
            </li>
            <li>
              <b>Tính cách:</b> {dog.temperament?.join(", ")}
            </li>
          </ul>
        </div>
      </div>

      {/* 💬 COMMENT */}
      <div className="comment-box">
        <h3>Bình luận</h3>

        <div className="comment-input">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Nhập bình luận..."
          />
          <button onClick={handleComment}>Gửi</button>
        </div>

        <div className="comment-list">
          {comments.length === 0 ? (
            <p>Chưa có bình luận</p>
          ) : (
            comments.map((c) => (
              <div key={c._id} className="comment-item">
                <b>{c.user?.username || "User"}:</b> {c.text}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Information;