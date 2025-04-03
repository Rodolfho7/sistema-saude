import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PacienteService } from '../../../../services/paciente.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-info',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',
})
export class InfoComponent implements OnInit {
  @Input() pacienteId: string | null = null;

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private pacienteService: PacienteService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.pacienteId],
      nome: [null, Validators.required],
      pais: [null, Validators.required],
      peso: [null, Validators.required],
      altura: [null, Validators.required],
      planoSaude: [null, Validators.required],
      endereco: [null, Validators.required],
      profissao: [null, Validators.required],
    });

    this.getDadosPaciente();
  }

  getDadosPaciente() {
    if (!this.pacienteId) {
      return;
    }
    const paciente = this.pacienteService.getPacienteById(+this.pacienteId);
    if (!paciente) {
      return;
    }
    this.form.patchValue(paciente);
  }

  atualizarDadosPaciente() {
    const dadosAtualizados = this.form.value;
    this.pacienteService.atualizarDadosPaciente(dadosAtualizados);
  }
}
