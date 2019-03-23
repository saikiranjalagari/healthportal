import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  countriesData:any;
  CoverageYear:any;
  ngOnInit() {
    this.countriesData =[
      { "id" : '1', "countryName" : "India", "countryCode" : "123"},
      { "id" : '2', "countryName" : "Japan", "countryCode" : "123"},
      { "id" : '3', "countryName" : "Chaina", "countryCode" : "123"}
    ]

    this.CoverageYear =[
      { "id" : '1', "Coverage" : "2019", "coverageCode" : "123" },
      { "id" : '2', "Coverage" : "2018", "coverageCode" : "123"  },
      { "id" : '3', "Coverage" : "2017", "coverageCode" : "123" }
    ]

  };

  


  

}
