const BASE_URL = "http://localhost:3000/api/user";

export const toggleFavorite = async (dogId) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/favorite/${dogId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Favorite thất bại");
  }

  return data;
};
export const getFavorites = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/favorites`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};