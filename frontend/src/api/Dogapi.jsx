const BASE_URL = "http://localhost:3000/api/dogs";

// Search dog by name
const searchDogByName = async (keyword) => {
  const res = await fetch(`${BASE_URL}/search?q=${keyword}`);
  
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }
  
  return await res.json();
};

// Get dog by ID (lấy cả info + image)
const getDogById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }
  
  return await res.json();
};
// get all dogs
const getAllDogs = async () => {
  const res =   await fetch(`${BASE_URL}`);
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }
  return await res.json();
};

export { searchDogByName, getDogById, getAllDogs };
