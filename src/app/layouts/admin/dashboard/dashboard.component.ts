import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movie: any;

  constructor(private movieService: MovieService) {
    this.getMovieRecommend();
   }

  ngOnInit(): void {
   
  }

  getMovieRecommend(): void {
    this.movieService.getOneMovieService(45)
    .subscribe(
      (res) => {
        this.movie = res;
      },
      (err) => {
        console.log(err);
      })
  }

}
