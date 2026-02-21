import User from '../models/user.js';

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({role: "user"}).select("-password");
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: "Error fetching users: " + err });
    }
}

export { getAllUsers };