import jwt from "jsonwebtoken";

const data = { name: "John Doe", age: 30 };

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      // console.log("authorization : ", req.headers.authorization)
      if (!req.headers.authorization) {
        return res.json({ status: 422, error: "Please provide headers" });
      }
      const token = req.headers.authorization.split("Bearer ")[1];
      // console.log("token : ", token)
      if (!token) {
        return res.json({ status: 422, error: "Token not found" });
      }
      const validUser = jwt.verify(token, process.env.JWT_SECRET);
      // console.log("valid user : ", validUser)
      if (!validUser) {
        return res.json({ status: 422, error: "Token not valid" });
      }
      return res.json({ status: 200, data });
    default:
      return res.json({ error: "Only accepting GET method" });
  }
}