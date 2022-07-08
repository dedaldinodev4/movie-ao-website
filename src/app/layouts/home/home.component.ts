import { Component, OnInit } from '@angular/core';
import { IMovie, IMovieRequestDTO } from 'src/app/shared/dtos/MovieRequestDTO';
import { MovieService } from 'src/app/shared/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    movie:any;
    movies: any;
    img_url = environment.MOVIE_IMAGE_URL;
    loading: boolean;

  
    constructor(private movieService: MovieService) {
      this.loading = true;
      this.getMovieRecommend();
    }

    ngOnInit(): void {
    
    }

    getMovieRecommend(): void {
      this.movieService.getOneMovieService(3)
      .subscribe(
        (res) => {
          this.movie = res;
          this.setWaitTime();
        },
        (err) => {
          console.log(err);
        })
    }

    setWaitTime():void {
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    }

}
