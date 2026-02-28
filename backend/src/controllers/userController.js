export const getUsers = (req, res) => {
  res.json([
    { id: 1, name: "Alice", email: "alice@test.com" },
    { id: 2, name: "Bob", email: "bob@test.com" },
    { id: 3, name: "Bobby", email: "bobby@test.com" },
  ]);
};