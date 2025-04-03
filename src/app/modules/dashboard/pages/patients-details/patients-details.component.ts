import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { InfoComponent } from './components/info/info.component';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { ExamesComponent } from './components/exames/exames.component';
import { LeftComponent } from '../../components/icons/left/left.component';

@Component({
  selector: 'app-patients-details',
  templateUrl: './patients-details.component.html',
  styleUrl: './patients-details.component.css',
  imports: [InfoComponent, ConsultasComponent, ExamesComponent, LeftComponent],
})
export class PatientsDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private patientService: PatientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const patientId = this.activatedRoute.snapshot.paramMap.get('id');
    if (patientId) {
      const patient = this.patientService.getPatientById(+patientId);
      console.log(patient);
    }
  }

  voltar() {
    this.router.navigate([`/dashboard/patients`]);
  }
}
