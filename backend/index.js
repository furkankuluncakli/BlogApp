import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/users.route.js";
import postRouter from "./routes/posts.route.js";
import commentRouter from "./routes/comments.route.js";

const app = express();
dotenv.config();

app.use("/users", userRouter);
app.use("/comments", commentRouter);
app.use("/posts", postRouter);


app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is Running on port : ${process.env.PORT}`);
});
