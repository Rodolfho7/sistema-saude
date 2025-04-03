import { Injectable } from '@angular/core';

type Paciente = {
  id?: number;
  nome: string;
  peso: number;
  altura: number;
};

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  pacientes: Paciente[] = [];

  constructor() {}

  addPaciente(paciente: Paciente) {
    this.pacientes.push({ ...paciente, id: this.pacientes.length });
  }

  getPacienteById(id: number) {
    return this.pacientes.find((p) => p.id == id);
  }
}
