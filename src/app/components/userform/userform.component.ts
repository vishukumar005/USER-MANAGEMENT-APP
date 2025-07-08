import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-userform',
  imports: [CommonModule, FormsModule],
  templateUrl: './userform.component.html',
  styleUrl: './userform.component.css'
})
export class UserformComponent {

  newUser: Partial<User> = {}
  constructor(private userService: UserService) {}

  onSubmit(userForm: NgForm) {
    this.userService.addUser(this.newUser);
    this.newUser = {};
    userForm.resetForm();
  }

  @Output() formSubmit = new EventEmitter<Partial<User>>();
@Output() formCancel = new EventEmitter<void>();

onSubmitForm() {
  if (this.newUser.name && this.newUser.email && this.newUser.username) {
    this.formSubmit.emit(this.newUser);
  }
}

onCancelForm() {
  this.formCancel.emit();
}


}
