import { Component } from '@angular/core';
import { UsersComponent } from './components/users/users.component';
import { UserformComponent } from './components/userform/userform.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'USER-MANAGEMENT-APP';
}
