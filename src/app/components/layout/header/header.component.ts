import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private authService: AuthService) {

  }

  logout() {
    this.authService.logoutUser();
  }

  menuAbierto: boolean = false;
  abrirMenu() {
    this.menuAbierto = true;
  }
  cerrarMenu() {
    this.menuAbierto = false;
  }


}


