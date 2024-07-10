const createComment = async (req, res) => {
  const { comment } = req.body;
  res.status(201).json({ comment });
};

export { createComment };
