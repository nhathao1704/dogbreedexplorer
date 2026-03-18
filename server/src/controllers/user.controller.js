import User from "../models/user.models.js";

export const toggleFavorite = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { dogId } = req.params;

    const user = await User.findById(userId);

    const isExist = user.favorites.some(
      (id) => id.toString() === dogId
    );

    if (isExist) {
      user.favorites = user.favorites.filter(
        (id) => id.toString() !== dogId
      );
    } else {
      user.favorites.push(dogId);
    }

    await user.save();

    res.json({ favorites: user.favorites });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Lỗi favorite" });
  }
};
export const getFavorites = async (req, res) => {
  try {
    const userId = req.user.userId;

    const user = await User.findById(userId).populate("favorites");

    if (!user) {
      return res.status(404).json({ message: "User không tồn tại" });
    }

    res.json(user.favorites);
  } catch (err) {
    res.status(500).json({ message: "Lỗi lấy favorites" });
  }
};