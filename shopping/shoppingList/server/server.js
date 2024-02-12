const express=require("express")
const app =express()
const cors=require("cors")
const PORT=3000
app.use(cors())
app.use(express.json())
const taskRoutes=require('./routes./task')
app.use('/api/task',taskRoutes)

app.listen(PORT,()=>{
    console.log("listening on port");
})