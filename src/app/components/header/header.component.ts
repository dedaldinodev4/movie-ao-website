import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin = false;
  menuIsActive = false;
  menu?: HTMLElement | null; 
  
  constructor(private authService: AuthService,
      private router: Router
    ) { }

  ngOnInit(): void {
  }

  isLoginExists(): boolean {
    return this.authService.getUserCurrent();
  }

  handlerLogout():void {
    this.isLogin = false;
    this.authService.logoutService();
    this.router.navigate(['/home']);
  }


  handlerOpenMen():void {
    this.menu = document.querySelector('.mobile-menu');
    this.menu?.classList.add('active');
    document.body.style.overflow = "hidden";
  }

}
