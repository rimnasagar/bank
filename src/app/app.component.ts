import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bank';
  data="your perfect banking partner"
  placeholderData="enter username"
  placedata2="enter password"
  uname:any
  psw:any
  constructor(){}
  ngOnInit(): void {
    
  }
  login(a:any,b:any){
    this.uname=a.value
    this.psw=b.value
    console.log(this.uname,this.psw);
    

    alert("login clicked")
  }
  unameChange(event:any){
    console.log(event.target.value);
    
  }
}
