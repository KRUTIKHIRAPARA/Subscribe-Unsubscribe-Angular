import { Component, OnDestroy, OnInit, Type } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy {
  // src = interval(500);
  // id = Date.now();
  // sub: Subscription | undefined;
 
  // constructor() {}
 
  // ngOnInit() {
  //   console.log("Component Created " + this.id);
 
  //   this.sub = this.src.subscribe(value => {
  //     console.log("Received " + this.id);
  //   });
  // }
 
  // ngOnDestroy() {
  //   this.sub?.unsubscribe();
  //   console.log("Component Destroyed " + this.id);
  // }

  tim = interval(500);
  count = new Date();

  sub : Subscription | undefined ;


  ngOnInit(): void {

    // let ans = (fn?:string,ln?:string)=>{

    //   if(fn != undefined && ln != undefined)
    //   {
    //     console.log(fn + " " + ln);
    //   }
    //   else if(fn != undefined)
    //   {
    //     console.log(fn);
    //   }
    //   else if(ln != undefined){
    //     console.log(ln)
    //   }
    //   else{
    //     console.log("No Any Name Availble");
    //   }
    //   // console.log(fn + " " + ln);
    // }

    // ans('krutik');

    // let number : string | number ;

    // number = 99867;

    // console.log(typeof number);
    // console.log(number);


    console.log(this.sub);
    console.log("Component Created "+ this.count);
    
    this.sub = this.tim.subscribe((val)=>{
      console.log("Received " + this.count);
    });
    console.log(this.sub);
  }

  ngOnDestroy(): void {
    console.log(this.sub);

    this.sub?.unsubscribe();  // ?.  =  optional chaining
    console.log("Component Destroyed " + this.count);
    console.log(this.sub);

  }
}
