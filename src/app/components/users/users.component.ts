import { Component, OnInit } from '@angular/core';
import { UsercardComponent } from '../usercard/usercard.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { HeaderComponent } from '../header/header.component';
import { UserformComponent } from '../userform/userform.component';

@Component({
  selector: 'app-users',
  imports: [UsercardComponent, FormsModule, CommonModule, HeaderComponent, UserformComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  isFormOpen = false;
  constructor(public userService: UserService) {}

  ngOnInit() {
    this.userService.fetchUsers().subscribe({
      next: () => {
        console.log('User fetched sucessfully');
      },
      error: (error) => {
        console.error("Error fectching users: ", error);
      },
    });
  }

  onOpenAddForm() {
    this.isFormOpen = true;
  }

  onCloseAddForm() {
    this.isFormOpen = false;
  }

  onDeleteUser(userId: number) {
    this.userService.deleteUser(userId);
  }

  onAddUser(newUser: Partial<User>) {
    this.userService.addUser(newUser);
    this.onCloseAddForm();
  }

  onUpdateUser(updatedUser: User) {
    this.userService.editUserById(updatedUser.id, updatedUser);
  }

}
