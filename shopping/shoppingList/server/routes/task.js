const express=require('express')
const {addTask,getTasks,changeStatus,deleteTask,getTask,editTitle}=require('../conttrollers/task')
const router=express.Router()

router.post('/add',addTask)
router.get('/get',getTasks)
router.get('/get/:id',getTas)
router.get('/status/:id',changeStatus)
router.put('/edit/:id',editTitle)

router.delete('/status/:id',deleteTask)

module.exports =router





