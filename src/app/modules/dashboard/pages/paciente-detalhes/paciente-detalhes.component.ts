import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../../services/paciente.service';
import { InfoComponent } from './components/info/info.component';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { ExamesComponent } from './components/exames/exames.component';
import { LeftComponent } from '../../components/icones/left/left.component';
import { HistoricoComponent } from './components/historico/historico.component';

@Component({
  selector: 'app-paciente-detalhes',
  templateUrl: './paciente-detalhes.component.html',
  styleUrl: './paciente-detalhes.component.css',
  imports: [
    InfoComponent,
    ConsultasComponent,
    ExamesComponent,
    LeftComponent,
    HistoricoComponent,
  ],
})
export class PacienteDetalhesComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private pacienteService: PacienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const pacientId = this.activatedRoute.snapshot.paramMap.get('id');
    if (pacientId) {
      const paciente = this.pacienteService.getPacienteById(+pacientId);
      console.log(paciente);
    }
  }

  voltar() {
    this.router.navigate([`/dashboard/pacientes`]);
  }
}
