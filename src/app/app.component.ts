import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  status= true
fruitname:string=""
fruitprice:number=0
fruite=[]
additems(){
  this.status= !this.status
  this.fruite.push(this.fruitname+"    Rs:"+this.fruitprice)

}
}
