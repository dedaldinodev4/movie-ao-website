import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/shared/services/movie.service';
import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  id?: number;
  loading: boolean;
  movie: any;
  movies: any[] = [];
  url = environment.MOVIE_IMAGE_URL;
  moreInfo:boolean;
  private sub: any;

  constructor(private route: ActivatedRoute, 
    private movieService: MovieService, private router: Router) { 
      this.loading = true;
      this.moreInfo = false;
    }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    }) 
    
    this.movieService
      .getOneMovieService(this.id)
      .subscribe((res: any) => {
        console.log(res)
        this.movie = res;
       this.setWaitTime();
      }, (err: any) => {
          console.log(err);
      })
      
  }

  openMoreInfo(): void {
    this.moreInfo = !this.moreInfo;
  }
  showRouteSpec(): void {
    this.router.navigate(['spec'], {relativeTo: this.route});
  }

  setWaitTime():void {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

 
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
