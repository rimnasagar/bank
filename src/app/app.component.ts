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
  constructor(){}
  ngOnInit(): void {
    
  }
  login(){

    alert("login clicked")
  }
  unameChange(event:any){
    console.log(event.target.value);
    
  }
}
