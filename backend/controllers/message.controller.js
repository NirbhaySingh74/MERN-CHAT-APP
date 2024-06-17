export const sendMessage = async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json({ userId: id });
  } catch (error) {
    console.log("Error in sendMessage controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
