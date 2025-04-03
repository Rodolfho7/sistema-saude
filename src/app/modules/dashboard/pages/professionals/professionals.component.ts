import { Component } from '@angular/core';
import { MedicosComponent } from './components/medicos/medicos.component';
import { EnfermeirosComponent } from './components/enfermeiros/enfermeiros.component';
import { TecnicosComponent } from './components/tecnicos/tecnicos.component';

@Component({
  selector: 'app-professionals',
  imports: [MedicosComponent, EnfermeirosComponent, TecnicosComponent],
  templateUrl: './professionals.component.html',
  styleUrl: './professionals.component.scss',
})
export class ProfessionalsComponent {}
