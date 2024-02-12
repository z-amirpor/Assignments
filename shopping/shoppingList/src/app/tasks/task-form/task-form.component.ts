import { Component } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
import { ITask } from '../typings/task.models';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskService } from '../task.service';
import { Title } from '@angular/platform-browser';
import { TaskSubmitType } from '../enums/task-submit-type';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule,
TaskItemComponent

  ],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {
onSubmiteTask() {
throw new Error('Method not implemented.');
}
onDeleteTask($event: any) {
throw new Error('Method not implemented.');
}
onDoneteTask($event: any) {
throw new Error('Method not implemented.');
}
constructor(private fb:FormBuilder,
  private taskservice: TaskService
  ){


    this.getTasks()
  }
  
formTask:FormGroup=this.fb.group({
  title:['',Validators.required]
})
  taslList: ITask[] = [
  ]
submitType=TaskSubmitType.submite
selectedtaskId!:number
getTasks(){
  this.taskservice.getTasks().subscribe( {
    next:(data)=>{
      this.taslList=data.result
    },
    error:(error)=>{
    },
    complete:()=>{
    }
  })
}
  onsubmitTask(){
console.log(this.formTask.get("title")?.value);
if(this.submitType==TaskSubmitType.submite){
this.taskservice.addTask(this.formTask.value).subscribe(
  {
  next:(data)=>{
    console.log(data);
    this.getTasks()
  },
  error:(error)=>{
  },
  complete:()=>{
  }
});}
if(this.submitType==TaskSubmitType.update){
this.taskservice.editTitle(this.formTask.value,this.selectedtaskId).subscribe(
  {
  next:(data)=>{
    console.log(data);
    this.getTasks()
  },
  error:(error)=>{
  },
  complete:()=>{

this.submitType=TaskSubmitType.submite

  }
});}

this.formTask.reset()
  }
ondeleteTask(taskId:number){
  this.taskservice.deleteTask(taskId).subscribe(
    {
    next:(data)=>{
      console.log(data);
      this.getTasks()
    },
    error:(error)=>{
    },
    complete:()=>{
    }
  });
}
onEditTask(taskId:number){
this.taskservice.getTask(taskId).subscribe(
{
  next:(data)=>{
    this.formTask.get("title")?.setValue(data.result[0].title)
    this.submitType=TaskSubmitType.update
    this.selectedtaskId=taskId
  },
  error:(error)=>{
  },
  complete:()=>{
  }
}
);
}
onDoneTask(taskId:number){
  this.taskservice.chengeStatus(taskId).subscribe(
    {
    next:(data)=>{
      console.log(data);
      this.getTasks()
    },
    error:(error)=>{
    },
    complete:()=>{
    }
  });
  
  console.log(taskId);
}
}
