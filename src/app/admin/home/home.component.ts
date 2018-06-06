import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
    //console.log(JSON.parse(sessionStorage.getItem("jsessionid")))
  }

  ngOnInit() {
  }

}
