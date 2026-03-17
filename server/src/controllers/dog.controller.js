import Dog from "../models/Dog.js";
export const getAllDogs = async (req, res) => { //lay du lieu tat ca cac con cho
  try {
    const dogs = await Dog.find();
    res.json(dogs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch dogs" });
  }
};

export const searchDogs = async (req, res) => { //tim kiem theo ten
  try {
    const { q } = req.query;

    const dogs = await Dog.find({
      name: { $regex: q || "", $options: "i" }
    });

    res.json(dogs);
  } catch (err) {
    res.status(500).json({ error: "Search failed" });
  }
};


export const getDogById = async (req, res) => { //lay du lieu con cho theo id
  try {
    const dog = await Dog.findById(req.params.id);

    if (!dog) {
      return res.status(404).json({ error: "Dog not found" });
    }

    res.json(dog);
  } catch (err) {
    res.status(400).json({ error: "Invalid dog ID" });
  }
};
