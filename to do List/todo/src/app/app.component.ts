import { Component } from '@angular/core';
import { commonModule } from '@angular/router';
import { RouterOutlet } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { textComponent } from './text/text.component';
import { ListComponent } from './list/list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo';
text!:string
getChildOutput(event:any){
  this.text=event
}
}
