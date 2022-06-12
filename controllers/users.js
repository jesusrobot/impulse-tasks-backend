export const getUser = (req, res) => {
  res.json({ verb: "GET" });
};

export const createUser = (req, res) => {
  res.json({ verb: "POST" });
};

export const updateUser = (req, res) => {
  res.json({ verb: "PUT" });
};

export const deleteUser = (req, res) => {
  res.json({ verb: "DELETE" });
};
