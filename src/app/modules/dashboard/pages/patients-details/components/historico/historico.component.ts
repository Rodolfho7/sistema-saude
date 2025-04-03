import { Component } from '@angular/core';
import { CheckComponent } from '../../../../components/icons/check/check.component';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-historico',
  imports: [CheckComponent, NgFor, NgClass],
  templateUrl: './historico.component.html',
  styleUrl: './historico.component.scss',
})
export class HistoricoComponent {
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
}
