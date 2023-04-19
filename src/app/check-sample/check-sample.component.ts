import { 
  Component,
   OnInit,
   DoCheck, 
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
  } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit,
DoCheck, 
AfterContentChecked,
AfterContentInit,
AfterViewChecked,
AfterViewInit,
OnDestroy

{
  quantidade:number = 0 ;

  constructor() { }
  
  adicionar(){
    this.quantidade +=1;
  }

  decrementar(){
    this.quantidade -=1;
  }
  ngAfterViewInit(): void {
    console.log("nngAfterViewInitgDoChek");
  }
  ngAfterViewChecked(): void {
    console.log("ngngAfterViewCheckedDoChek");
  }
  ngAfterContentInit(): void {
    console.log("ngDngAfterContentInitoChek");
  }
  ngAfterContentChecked(): void {
    console.log("ngDngAfterContentCheckedoChek");
  }
  ngDoCheck(): void {
    console.log("ngDoChek")
  }

  ngOnInit(): void {
    console.log("ngDoChek")
  }

  ngOnDestroy(): void {
    console.log("Godbye my friend")
  }

}
