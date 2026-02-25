import BabyInfo from "../models/babyInfo.js"; 

const allBaby = async (req, res) => {
    try {
        const { userId } = req.body;
        if (!userId) {
            return res.status(400).json({ message: "userId is required" });
        }
        const babyInfo = await BabyInfo.find({ user: userId });
        res.status(200).json({
            count: babyInfo.length,
            babyInfo
        });
    } catch (error) {
        res.status(500).json({ message: "Error fetching baby info: " + error.message });
    }
}

export { allBaby };
