import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  standalone: true,
})
export class DashboardComponent {
  constructor(private router: Router) {}

  navigateTo(url: string) {
    this.router.navigate([url]);
  }

  exit() {
    localStorage.removeItem('user-token');
    this.router.navigate(['/login']);
  }
}
