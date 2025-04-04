import { Component, OnInit } from '@angular/core';
import { PersonComponent } from '../../../../components/icones/person/person.component';
import { NgClass, NgFor, NgIf } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PlusComponent } from '../../../../components/icones/plus/plus.component';
import { AlertaSucessoComponent } from '../../../../components/alerta-sucesso/alerta-sucesso.component';

@Component({
  selector: 'app-enfermeiros',
  imports: [
    PersonComponent,
    NgFor,
    NgIf,
    NgClass,
    ReactiveFormsModule,
    PlusComponent,
    AlertaSucessoComponent,
  ],
  templateUrl: './enfermeiros.component.html',
  styleUrl: './enfermeiros.component.scss',
})
export class EnfermeirosComponent implements OnInit {
  formNovoProfissional!: FormGroup;

  mostrarAlertaSucesso = false;
  mensagemAlerta = '';

  professionals = [
    {
      id: 0,
      nome: 'Luciana Moura',
    },
    {
      id: 1,
      nome: 'Alberto Santos',
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formNovoProfissional = this.fb.group({
      nome: [null, Validators.required],
    });
  }

  cadastrar() {
    const novoEnfermeiro = this.formNovoProfissional.value;
    this.professionals.push({
      ...novoEnfermeiro,
      id: this.professionals.length,
    });

    this.alertaSucesso('Enfermeiro cadastrado com sucesso');
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
