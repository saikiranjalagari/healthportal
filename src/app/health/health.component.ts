import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; 

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor(private data: DataService) { }

  healthPlansData : any;
  itemsPerPage: number;
  startIndex: number;
  endIndex: number;
  myArray: any
  showPrevious: boolean
  showNext:boolean
  currentPageNumber: number

  ngOnInit() {
   this.data.plansGadgetData().subscribe((value)=>{
      this.healthPlansData = value;
    }, err=>err);
    this.startIndex = 0
    this.endIndex = 3
    this.showNext = true
  }

  pagination (arrayLenght, itemsPerPage) {
    this.itemsPerPage = itemsPerPage
    let myArray = []
    for(let i = 1 ;i <=(arrayLenght/itemsPerPage)+1;i++) {
      myArray.push(i);
   }
   this.myArray = myArray
   return myArray 
  }

  changePaginationIndex(event, buttonType) {

    let index = parseInt(event.target.innerHTML)
    if(buttonType === 'previous'){
      index = this.currentPageNumber-1
    } else if(buttonType === 'next'){
      index = this.currentPageNumber+1
    }
    
    this.startIndex = (this.itemsPerPage*index) - this.itemsPerPage
    this.endIndex = this.itemsPerPage*index
    this.currentPageNumber= index

    if(index === 1) {
      this.showPrevious = false
    } else {
      this.showPrevious = true
    }
    this.showNext = true
    if(index === Math.trunc(this.myArray.length)) {
      this.showNext = false
    }
  }


}
