import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacienteService } from '../../services/paciente.service';
import { NgClass, NgFor } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PlusComponent } from '../../components/icones/plus/plus.component';
import { PersonComponent } from '../../components/icones/person/person.component';

@Component({
  selector: 'app-pacientes',
  imports: [
    NgFor,
    NgClass,
    ReactiveFormsModule,
    PlusComponent,
    PersonComponent,
  ],
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.css',
})
export class PacientesComponent implements OnInit {
  pacientes: any[] = [];

  formNovopaciente!: FormGroup;

  constructor(
    private router: Router,
    private pacienteService: PacienteService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.pacientes = this.pacienteService.pacientes;

    this.formNovopaciente = this.fb.group({
      nome: [null, Validators.required],
      pais: [null, Validators.required],
      profissao: [null, Validators.required],
      planoSaude: [null, Validators.required],
    });
  }

  cadastrar() {
    const paciente = this.formNovopaciente.value;
    this.pacienteService.addPaciente(paciente);
  }

  irParaDetalhes(element: any) {
    this.router.navigate([`/dashboard/pacientes/${element.id}`]);
  }
}
