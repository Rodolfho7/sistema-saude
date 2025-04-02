import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { InfoComponent } from './components/info/info.component';
import { ConsultationComponent } from './components/consultation/consultation.component';
import { ExamsComponent } from './components/exams/exams.component';

@Component({
  selector: 'app-patients-details',
  templateUrl: './patients-details.component.html',
  styleUrl: './patients-details.component.css',
  imports: [InfoComponent, ConsultationComponent, ExamsComponent],
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

  back() {
    this.router.navigate([`/dashboard/patients`]);
  }
}
