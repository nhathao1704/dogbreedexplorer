const BASE_URL = "http://localhost:3000/api/comment";

// lấy comment theo dogId
export const getComments = async (dogId) => {
  const res = await fetch(`${BASE_URL}/${dogId}`);

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Lỗi lấy comment");
  }

  return data;
};

// tạo comment
export const createComment = async (dogId, text) => {
  const res = await fetch(`${BASE_URL}/${dogId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ text }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Lỗi comment");
  }

  return data;
};