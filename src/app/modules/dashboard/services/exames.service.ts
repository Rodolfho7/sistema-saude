import { Injectable } from '@angular/core';

type Exame = {
  id: number;
  laboratorio: string;
  tipoExame: string;
  data: string;
  status: string;
  pacientId: number;
};

@Injectable({
  providedIn: 'root',
})
export class ExamesService {
  exames: Exame[] = [];

  constructor() {}

  addExame(consulta: Exame) {
    this.exames.push({ ...consulta, id: this.exames.length });
  }

  atualizarDadosExame(exame: Exame) {
    const index = this.exames.findIndex((p) => p.id == exame.id);
    if (index != -1) {
      this.exames[index] = exame;
    }
  }
}
