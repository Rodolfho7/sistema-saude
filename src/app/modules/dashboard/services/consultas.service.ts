import { Injectable } from '@angular/core';

type Consulta = {
  id: number;
  nomeMedico: string;
  data: string;
  status: string;
  pacientId: number;
};

@Injectable({
  providedIn: 'root',
})
export class ConsultasService {
  consultas: Consulta[] = [];

  constructor() {}

  addConsulta(consulta: Consulta) {
    this.consultas.push({ ...consulta, id: this.consultas.length });
  }

  atualizarDadosConsulta(consulta: Consulta) {
    const index = this.consultas.findIndex((p) => p.id == consulta.id);
    if (index != -1) {
      this.consultas[index] = consulta;
    }
  }
}
