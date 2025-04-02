import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NgFor, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  options = [
    {
      label: 'Administradores',
      url: '/dashboard/administrators',
    },
    {
      label: 'Pacientes',
      url: '/dashboard/patients',
    },
  ];
}
