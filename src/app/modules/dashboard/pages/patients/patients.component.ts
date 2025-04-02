import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { NgClass, NgFor } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-patients',
  imports: [NgFor, NgClass, ReactiveFormsModule],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.css',
})
export class PatientsComponent implements OnInit {
  patients = [
    {
      id: 0,
      nome: 'Hart Hagerty',
      pais: 'Brasil',
      profissao: 'Eletricista',
      planoSaude: 'UNIMED',
    },
    {
      id: 1,
      nome: 'Girosvaldo da Silva',
      pais: 'Brasil',
      profissao: 'Pedreiro',
      planoSaude: '--',
    },
    {
      id: 2,
      nome: 'Ronaldinho Gaúcho',
      pais: 'Brasil',
      profissao: 'Oni-presente',
      planoSaude: '--',
    },
  ];

  formNovopaciente!: FormGroup;

  constructor(
    private router: Router,
    private patientService: PatientService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formNovopaciente = this.fb.group({
      nome: [null, Validators.required],
      pais: [null, Validators.required],
      profissao: [null, Validators.required],
      planoSaude: [null, Validators.required],
    });
  }

  cadastrar() {
    const patient = this.formNovopaciente.value;
    this.patients.push({ ...patient, id: this.patients.length });
  }

  goToPatientDetails(element: any) {
    this.router.navigate([`/dashboard/patients/${element.id}`]);
  }
}
