import { Component } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-users',
  imports: [CommonModule, RouterLink], 
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: any;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.onLoadData();
  }

  onLoadData() {
    this.usersService.getUsers().subscribe({
      next: (data) => {
        console.log('Usuarios recibidos:', data);
        this.users = data;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  onDelete(id: string) {
    this.usersService.deleteUser(id).subscribe({
      next: () => this.onLoadData(),
      error: (error) => console.error(error)
    });
  }
}


