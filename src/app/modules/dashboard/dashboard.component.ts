import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/icones/menu/menu.component';
import { PersonComponent } from './components/icones/person/person.component';
import { LeaveComponent } from './components/icones/leave/leave.component';
import { HomeComponent } from './components/icones/home/home.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    RouterOutlet,
    RouterModule,
    MenuComponent,
    PersonComponent,
    LeaveComponent,
    HomeComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  standalone: true,
})
export class DashboardComponent {
  constructor(private router: Router) {}

  navigateTo(url: string) {
    this.router.navigate([url]);
  }

  sair() {
    localStorage.removeItem('user-token');
    this.router.navigate(['/login']);
  }
}
