import { Component } from '@angular/core';
import { MedicosComponent } from './components/medicos/medicos.component';

@Component({
  selector: 'app-professionals',
  imports: [MedicosComponent],
  templateUrl: './professionals.component.html',
  styleUrl: './professionals.component.scss',
})
export class ProfessionalsComponent {}
