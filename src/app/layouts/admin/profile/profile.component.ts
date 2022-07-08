import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service'
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;
  name = '';
  email = '';
  nameUser ='';
  emailUser = '';
  errorMessage = '';
  loading = false;
  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private _user: UserService,
    private _router: Router
  ) {
    this.user = this._auth.getUserCurrent();
    console.log(this.user);
    this.getUserDatas(this.user);
  }



  ngOnInit(): void {}

  getUserDatas(id: string):void {
    this._user.getOneUserService(id)
      .subscribe(
        (res) => {
          this.nameUser = res.name
          this.emailUser = res.email
        },
        (err) => {
          this.errorMessage = err.error.message;
        }
      )
  }

  onSubmit(): void {
    this.errorMessage = '';
  
    if (this.name && this.email ) {
        this.loading = true;
        this._user
          .updateUserService(this.user, {
            name: this.name,
            email: this.email,
          })
          .subscribe(
            (res) => {
              this.loading = false;
              this._router.navigate(['/']);
            },
            (err) => {
              this.errorMessage = err.error.message;
              this.loading = false;
            }
          );
      }
    
  }

}
