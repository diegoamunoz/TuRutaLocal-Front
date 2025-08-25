import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/layout/footer/footer.component";
import { HeaderComponent } from "./components/layout/header/header.component";
import { environment } from '../environments/environment';


console.log('Environments: ', environment)

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'turutalocalfrontend';
}
