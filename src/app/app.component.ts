import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**

   * The name of the application
   */
  name: string = 'Welcome to Turing Angular Interview';
  arr = [0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1];

  getConcecutiveOne(){
    const allCons: Array<number> = [];
    var cons = 0;
    for(let i = 0; i< this.arr.length; i++ ){
      if(this.arr[i] === 0){
        cons = 0
      } else {
        console.log(cons)
        allCons.push(++cons);
      }
    }
    var c = 0
    for(let y of allCons){
      if(y>c){
        c = y
      }
    }
     
    return c;
  }
}
