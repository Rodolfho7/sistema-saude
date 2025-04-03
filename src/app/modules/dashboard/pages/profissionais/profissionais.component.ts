import { Component } from '@angular/core';
import { MedicosComponent } from './components/medicos/medicos.component';
import { EnfermeirosComponent } from './components/enfermeiros/enfermeiros.component';
import { TecnicosComponent } from './components/tecnicos/tecnicos.component';

@Component({
  selector: 'app-profissionais',
  imports: [MedicosComponent, EnfermeirosComponent, TecnicosComponent],
  templateUrl: './profissionais.component.html',
  styleUrl: './profissionais.component.scss',
})
export class ProfissionaisComponent {}
