import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input()geItem!: string
textList:any []= []
ngOnChanges(){
if(this.getItem)
this.textList.push({title: this.getItem,done:false})
}
finishTask(index:number){
  this.textList[index].done =true
}
deleteTask(index:number){
  this.textList.splice(index,1)
}
}
