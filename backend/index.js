import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.get("/test",(res,req)=>{
    res.status(200).send("AMINAGOYUM")
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is Running on port : ${process.env.PORT}`);
});
