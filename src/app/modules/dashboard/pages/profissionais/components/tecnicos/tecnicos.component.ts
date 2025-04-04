import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PlusComponent } from '../../../../components/icones/plus/plus.component';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { PersonComponent } from '../../../../components/icones/person/person.component';
import { AlertaSucessoComponent } from '../../../../components/alerta-sucesso/alerta-sucesso.component';

@Component({
  selector: 'app-tecnicos',
  imports: [
    PlusComponent,
    ReactiveFormsModule,
    NgClass,
    PersonComponent,
    NgFor,
    NgIf,
    AlertaSucessoComponent,
  ],
  templateUrl: './tecnicos.component.html',
  styleUrl: './tecnicos.component.scss',
})
export class TecnicosComponent implements OnInit {
  formNovoProfissional!: FormGroup;

  mostrarAlertaSucesso = false;
  mensagemAlerta = '';

  professionals = [
    {
      id: 0,
      nome: 'Alana Albuquerque',
      especialidade: 'Radiologia',
    },
    {
      id: 1,
      nome: 'Luana Gonçalves',
      especialidade: 'Laboratorio',
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formNovoProfissional = this.fb.group({
      nome: [null, Validators.required],
      especialidade: [null, Validators.required],
    });
  }

  cadastrar() {
    const novoTecnico = this.formNovoProfissional.value;
    this.professionals.push({ ...novoTecnico, id: this.professionals.length });
    this.alertaSucesso('Técnico cadastrado com sucesso');
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
