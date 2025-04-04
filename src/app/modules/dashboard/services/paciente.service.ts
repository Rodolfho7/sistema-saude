import { Injectable } from '@angular/core';

type Paciente = {
  id?: number;
  nome: string;
  pais: string;
  profissao: string;
  planoSaude: string;
  peso?: number;
  altura?: number;
  endereco?: string;
};

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  pacientes: Paciente[] = [
    {
      id: 0,
      nome: 'Hart Hagerty',
      pais: 'Brasil',
      profissao: 'Eletricista',
      planoSaude: 'UNIMED',
    },
    {
      id: 1,
      nome: 'Girosvaldo da Silva',
      pais: 'Brasil',
      profissao: 'Pedreiro',
      planoSaude: '--',
    },
    {
      id: 2,
      nome: 'Ronaldinho Gaúcho',
      pais: 'Brasil',
      profissao: 'Oni-presente',
      planoSaude: '--',
    },
  ];

  constructor() {}

  addPaciente(paciente: Paciente) {
    this.pacientes.push({ ...paciente, id: this.pacientes.length });
  }

  removerPaciente(paciente: Paciente) {
    this.pacientes = this.pacientes.filter((p) => p.id != paciente.id);
  }

  getPacienteById(id: number) {
    return this.pacientes.find((p) => p.id == id);
  }

  atualizarDadosPaciente(paciente: Paciente) {
    const index = this.pacientes.findIndex((p) => p.id == paciente.id);
    if (index != -1) {
      this.pacientes[index] = paciente;
    }
  }
}
