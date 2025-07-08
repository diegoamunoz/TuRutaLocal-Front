import { Component } from '@angular/core';
<<<<<<< HEAD
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Token } from '@angular/compiler';

=======
import { RouterLink } from '@angular/router';
>>>>>>> feature/users

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor (private authservice: AuthService, private router: Router) {

  }

  logout(){
    this.authservice.deleteLocalStorage( 'token' );
    this.router.navigateByUrl('home')
  }
}
