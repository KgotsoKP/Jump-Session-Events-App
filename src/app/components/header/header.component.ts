import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
currentUserLocation :string = 'Braamfontein,JHB';
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    //go to location page
  }
}
