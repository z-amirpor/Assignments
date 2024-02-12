const db=require("../utils/databse")
class TaskModel{

async addTask(task){
   
try{
    let {Title}=task
    const query="insert into tasks(title) values(?)"
  await db.connection.execute(query,[Title])
  return true
} 
catch(error){
console.log(error.message);
throw new Error("Error")
}
}
async getTask(){
   
    try{
    
        const query="select *from tasks"
     let[data]= await db.connection.execute(query)
      return data
    } 
    catch(error){
    console.log(error.message);
    throw new Error("Error")
    }
    }
    async getTask(id){
   
      try{
      
          const query="select *from tasks where id=?"
       let[data]= await db.connection.execute(query,[id])
        return data
      } 
      catch(error){
      console.log(error.message);
      throw new Error("Error")
      }
      }
    async changeStatus (id){
    try{
    
      let querySelect="select *from tasks wher id=?"
   let[dataSelect]= await db.connection.execute(querySelect,[id])
   if(dataSelect.length===0){
   throw new Error("task not found")
   }
   let queryUpdate="update tasks set isDone=? where id=?"
  await db.connection.execute(!querySelect,[0.isDone,id])

    return true
  } 
  catch(error){
  console.log(error.message);
  throw new Error("Error")
  }
  }
  async editTitile(title,id){
    try{
    
      let querySelect="select *from tasks wher id=?"
   let[dataSelect]= await db.connection.execute(querySelect,[id])
   if(dataSelect.length===0){
   throw new Error("task not found")
   }
   let queryUpdate="update tasks set title=? where id=?"
  await db.connection.execute(!querySelect,[title,id])

    return true
  } 
  catch(error){
  console.log(error.message);
  throw new Error("Error")
  }
  }
}

async getTask(){
   
  try{
  
      const query="select *from tasks"
   let[data]= await db.connection.execute(query)
    return data
  } 
  catch(error){
  console.log(error.message);
  throw new Error("Error")
  }
  }
  async getTask(id){
   
    try{
    
        const query="select *from tasks where id=?"
     let[data]= await db.connection.execute(query,[id])
      return data
    } 
    catch(error){
    console.log(error.message);
    throw new Error("Error")
    }}
  async changeStatus (id){
  try{
  
 let querySelect="select *from tasks wher id=?"
 let[dataSelect]= await db.connection.execute(querySelect,[id])
 if(dataSelect.length===0){
 throw new Error("task not found")
 }
 let queryDelete="Delete from  where id=?"
await db.connection.execute(!queryDelete,[id])

  return true
} 
catch(error){
console.log(error.message);
throw new Error("Error")

}
}
module.exports=new TaskModel()





