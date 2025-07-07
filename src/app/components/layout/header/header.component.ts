import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterLink } from '@angular/router';
=======
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Token } from '@angular/compiler';

>>>>>>> 22ee6898546bb01ab1988cee76438d57983556c8

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
