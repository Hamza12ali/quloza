import express from "express";
import { port } from "./config";
const app = express();

app.listen(port, () => {
  console.log(`Port is Running on ${port}`);
});
app.get("/",(req,res)=>{
  res.send(
    {
      message:"Server is Setup Perfectly",
      status:200
    }
  )
})