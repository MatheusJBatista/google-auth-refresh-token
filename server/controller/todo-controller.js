const get = (req, res) =>
  res.send({
    greetings: `Hello UserId ${req.user.sub}`,
    toDos: [{ id: "1", description: "Learn K8S" }],
  });

module.exports = { get };
