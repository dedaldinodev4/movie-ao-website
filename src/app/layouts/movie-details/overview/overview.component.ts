import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/shared/services/movie.service';
import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

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
      .getAllMovieService()
      .subscribe((res: any) => {
        this.movie = res.results.filter((obj:any) => (obj.id == this.id))[0];
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
