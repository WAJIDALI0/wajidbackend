import express from 'express'
const app=express()
import dotenv from 'dotenv'
dotenv.config()
const port=3000
app.get('/',(req,res)=>{
    res.get('welcome')
})
app.listen(process.env.PORT,()=>{
    console.log(`server in  running on this port ${process.env.PORT}`)
})