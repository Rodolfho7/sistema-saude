import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/icones/menu/menu.component';
import { PersonComponent } from './components/icones/person/person.component';
import { LeaveComponent } from './components/icones/leave/leave.component';
import { HomeComponent } from './components/icones/home/home.component';
import { PersonGroupComponent } from './components/icones/person-group/person-group.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    RouterOutlet,
    RouterModule,
    MenuComponent,
    PersonComponent,
    LeaveComponent,
    HomeComponent,
    PersonGroupComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  standalone: true,
})
export class DashboardComponent {
  constructor(private router: Router) {}

  navegarPara(url: string, overlay: HTMLLabelElement) {
    this.router.navigate([url]);
    if (window.innerWidth <= 1024) {
      overlay.click();
    }
  }

  sair() {
    localStorage.removeItem('user-token');
    this.router.navigate(['/login']);
  }
}
