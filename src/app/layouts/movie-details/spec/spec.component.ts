import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/shared/services/movie.service';
import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-spec',
  templateUrl: './spec.component.html',
  styleUrls: ['./spec.component.css']
})
export class SpecComponent implements OnInit {

  id?: number;
  loading: boolean;
  movie: any;
  movies: any[] = [];
  url = environment.MOVIE_IMAGE_URL;
  private sub: any;

    constructor(private route: ActivatedRoute, 
    private movieService: MovieService) { 
      this.loading = true;
    }

    ngOnInit(): void {
      this.sub = this.route.params.subscribe(params => {
        this.id = +params['id'];
      }) 
      
      this.movieService
        .getOneMovieService(this.id)
        .subscribe((res: any) => {
          this.movie = res.results;
        this.setWaitTime();
        }, (err: any) => {
            console.log(err);
        })
        
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
