const express = require("express");
const app = express();
const port=3000;

app.use((req,res)=>
{
    res.send("hello from server... ");
});

app.listen(port,()=>
{
   console.log(`sever is listening at port: ${port}`);
})
