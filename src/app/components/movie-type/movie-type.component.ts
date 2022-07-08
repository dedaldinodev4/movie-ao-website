import { Component, EnvironmentInjector, Input, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movie.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-type',
  templateUrl: './movie-type.component.html',
  styleUrls: ['./movie-type.component.css']
})
export class MovieTypeComponent implements OnInit {

  movies: any;
  url = environment.MOVIE_IMAGE_URL;
  @Input() public category: any;
  @Input() public MIN_Size: any;
  @Input() public MAX_Size: any;

  
  constructor(private movieService: MovieService, private router: Router) {
    this.getAllMovies();
   }

  ngOnInit(): void {
   
  }

  onSelectedMove(id: number): void{
    this.router.navigate(['/movie-details/', id]);
  }

  getAllMovies(): void {
    this.movieService.getAllMovieService()
    .subscribe(
      (res) => {
        this.movies = res.results.slice(this.MIN_Size, this.MAX_Size);
      },
      (err) => {
        console.log(err);
      })
  }

}
