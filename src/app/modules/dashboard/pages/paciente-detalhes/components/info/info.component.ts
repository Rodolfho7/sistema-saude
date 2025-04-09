import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PacienteService } from '../../../../services/paciente.service';
import { NgClass, NgIf } from '@angular/common';
import { AlertaSucessoComponent } from '../../../../components/alerta-sucesso/alerta-sucesso.component';

@Component({
  selector: 'app-info',
  imports: [ReactiveFormsModule, NgClass, NgIf, AlertaSucessoComponent],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',
})
export class InfoComponent implements OnInit {
  @Input() pacienteId: string | null = null;

  form!: FormGroup;

  mostrarAlertaSucesso = false;
  mensagemAlerta = '';

  constructor(
    private fb: FormBuilder,
    private pacienteService: PacienteService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.pacienteId],
      nome: [null, Validators.required],
      email: [null, Validators.required],
      telefone: [null, Validators.required],
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
    this.alertaSucesso('Os dados do paciente foram atualizados com sucesso!');
  }

  alertaSucesso(mensagem: string) {
    this.mensagemAlerta = mensagem;
    this.mostrarAlertaSucesso = true;
    setTimeout(() => {
      this.mostrarAlertaSucesso = false;
      this.mensagemAlerta = '';
    }, 2000);
  }
}
