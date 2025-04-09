import { Injectable } from '@angular/core';

type Paciente = {
  id?: number;
  nome: string;
  email?: string;
  telefone: string;
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
      email: 'HartHagerty@gmail.com',
      telefone: '1111111111',
      profissao: 'Eletricista',
      planoSaude: 'UNIMED',
    },
    {
      id: 1,
      nome: 'Girosvaldo da Silva',
      email: 'Girosvaldo@gmail.com',
      telefone: '2222222222',
      profissao: 'Pedreiro',
      planoSaude: '--',
    },
    {
      id: 2,
      nome: 'Ronaldinho Gaúcho',
      email: 'Ronaldinho@gmail.com',
      telefone: '3333333333',
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
