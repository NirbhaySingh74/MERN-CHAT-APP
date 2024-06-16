export const signup = async (req, res) => {
  try {
    const { name, email } = req.body;
    console.log(name, email);
    return res.status(200).json({ name: name, email: email });
  } catch (error) {
    return res.status(400).json({ error: "signup error" });
  }
};

export const login = async (req, res) => {
  res.status(200).json({ name: "Nirbhay Singh login successfully" });
};

export const logout = async (req, res) => {
  res.json({ name: "Nirbhay Singh logout successfully" });
};
