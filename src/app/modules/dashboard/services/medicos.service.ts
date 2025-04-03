import { Injectable } from '@angular/core';

type Medico = {
  id: number;
  nome: string;
  especialidade: string;
  crm: number;
};

@Injectable({
  providedIn: 'root',
})
export class MedicosService {
  medicos: Medico[] = [
    {
      id: 0,
      nome: 'Rafael Nogueira',
      especialidade: 'Endocrinologista',
      crm: 111,
    },
    {
      id: 1,
      nome: 'Gabriela Balarini',
      especialidade: 'Neurologista',
      crm: 222,
    },
  ];

  constructor() {}

  addMedico(paciente: Medico) {
    this.medicos.push({ ...paciente, id: this.medicos.length });
  }

  getMedicoById(id: number) {
    return this.medicos.find((m) => m.id == id);
  }

  atualizarDadosMedico(medico: Medico) {
    const index = this.medicos.findIndex((m) => m.id == medico.id);
    if (index != -1) {
      this.medicos[index] = medico;
    }
  }
}
