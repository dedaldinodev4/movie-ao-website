import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  loading: boolean;

  constructor() { 
    this.loading = true;
    this.setWaitThreeTimes();
  }

  ngOnInit(): void {
    
  }

  setWaitThreeTimes():void {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

}
