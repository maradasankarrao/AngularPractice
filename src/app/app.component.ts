import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
fruitname:string=""
fruitprice:number=0
fruite=[]
additems(){
  this.fruite.push(this.fruitname)

}
}
