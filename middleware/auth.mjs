// import jwt from "jsonwebtoken";

// const middleware = (req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(" ")[1];
//     const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
//     const user = decodedToken.user;
//     req.auth = {
//       user: user,
//     };
//     next();
//   } catch (error) {
//     res.status(401).json({ error });
//   }
// };

// export default middleware;
