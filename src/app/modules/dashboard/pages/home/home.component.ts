import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';

@Component({
  selector: 'app-home',
  imports: [NgFor, RouterLink, BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  options = [
    {
      label: 'Administradores',
      url: '/dashboard/administradores',
    },
    {
      label: 'Pacientes',
      url: '/dashboard/pacientes',
    },
    {
      label: 'Profissionais',
      url: '/dashboard/profissionais',
    },
  ];
}
