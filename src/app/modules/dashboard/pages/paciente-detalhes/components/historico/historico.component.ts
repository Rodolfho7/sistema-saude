import { Component, OnInit } from '@angular/core';
import { CheckComponent } from '../../../../components/icones/check/check.component';
import { NgClass, NgFor } from '@angular/common';
import { PlusComponent } from '../../../../components/icones/plus/plus.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-historico',
  imports: [CheckComponent, NgFor, NgClass, PlusComponent, ReactiveFormsModule],
  templateUrl: './historico.component.html',
  styleUrl: './historico.component.scss',
})
export class HistoricoComponent implements OnInit {
  formNovoHistorico!: FormGroup;

  constructor(private fb: FormBuilder) {}

  historico = [
    {
      data: '01/01/2025',
      resumo: 'Entrada no hospital com sintomas de gripe',
      descricao: 'O paciente chegou com febre, dor de cabeça e muita corisa',
    },
    {
      data: '02/01/2025',
      resumo: 'Leve melhora',
      descricao: 'O Paciente não tinha mais dores fortes de cabeça',
    },
    {
      data: '03/01/2025',
      resumo: 'Febre continua',
      descricao:
        'O Paciente não tem uma melhora com a febre, ela continua alta e sendo medicado',
    },
  ];

  ngOnInit(): void {
    this.formNovoHistorico = this.fb.group({
      resumo: [null, Validators.required],
      descricao: [null, Validators.required],
      data: [null, Validators.required],
    });
  }

  addHistorico() {
    const novoHistorico = this.formNovoHistorico.value;
    this.historico.push(novoHistorico);
    this.formNovoHistorico.reset();
  }
}
