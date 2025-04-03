import { Component, OnInit } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { PlusComponent } from '../../../../components/icones/plus/plus.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PersonComponent } from '../../../../components/icones/person/person.component';
import { MedicosService } from '../../../../services/medicos.service';

@Component({
  selector: 'app-medicos',
  imports: [
    PlusComponent,
    ReactiveFormsModule,
    NgClass,
    NgFor,
    PersonComponent,
  ],
  templateUrl: './medicos.component.html',
  styleUrl: './medicos.component.scss',
})
export class MedicosComponent implements OnInit {
  formNovoProfissional!: FormGroup;

  medicos: any[] = [];

  constructor(
    private fb: FormBuilder,
    private medicosService: MedicosService
  ) {}

  ngOnInit(): void {
    this.medicos = this.medicosService.medicos;

    this.formNovoProfissional = this.fb.group({
      nome: [null, Validators.required],
      especialidade: [null, Validators.required],
      crm: [null, Validators.required],
    });
  }

  cadastrar() {
    const novoMedico = this.formNovoProfissional.value;
    this.medicosService.addMedico(novoMedico);
  }
}
