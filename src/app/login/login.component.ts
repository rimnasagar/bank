import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title="bank"
  uname:any

  constructor(private ds:DataService){}
  ngOnInit(): void {
    
  }
  login(){
    
    alert(this.ds.sdata)

    
  }
  // unameChange(event:any){
  //   console.log(event.target.value);
    
  // }
}


