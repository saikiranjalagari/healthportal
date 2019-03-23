import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  registerForm =  new FormGroup
  ({
    first: new FormControl(),
    last: new FormControl(),
    age: new FormControl(),
    

  });

  Sub(){
     console.log(this.registerForm.value)
  }
}
