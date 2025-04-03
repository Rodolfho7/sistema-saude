import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/icons/menu/menu.component';
import { PersonComponent } from './components/icons/person/person.component';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, RouterModule, MenuComponent, PersonComponent],
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
