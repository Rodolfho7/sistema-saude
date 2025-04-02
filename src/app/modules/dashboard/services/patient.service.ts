import { Injectable } from '@angular/core';

type Patient = {
  id?: number;
  nome: string;
  peso: number;
  altura: number;
};

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  patients: Patient[] = [
    { id: 0, nome: 'Rodolfho Azevedo', peso: 80, altura: 1.76 },
    { id: 1, nome: 'Thamara Leal', peso: 80, altura: 1.59 },
  ];

  constructor() {}

  addPatient(patient: Patient) {
    this.patients.push({ ...patient, id: this.patients.length });
  }

  getPatientById(id: number) {
    return this.patients.find((p) => p.id == id);
  }
}
