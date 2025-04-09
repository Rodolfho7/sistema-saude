import { Injectable } from '@angular/core';

type Admin = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  cargo: string;
  departamento: string;
  dataAdmissao: Date;
  ativo: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  administradores: Admin[] = [
    {
      id: 0,
      nome: 'João Silva',
      email: 'joao.silva@example.com',
      telefone: '123456789',
      cargo: 'Gerente',
      departamento: 'Recursos Humanos',
      dataAdmissao: new Date('2020-01-15'),
      ativo: true,
    },
    {
      id: 1,
      nome: 'Maria Oliveira',
      email: 'maria.oliveira@example.com',
      telefone: '987654321',
      cargo: 'Analista',
      departamento: 'Financeiro',
      dataAdmissao: new Date('2019-03-10'),
      ativo: true,
    },
    {
      id: 2,
      nome: 'Carlos Pereira',
      email: 'carlos.pereira@example.com',
      telefone: '456123789',
      cargo: 'Supervisor',
      departamento: 'Operações',
      dataAdmissao: new Date('2021-07-20'),
      ativo: false,
    },
    {
      id: 3,
      nome: 'Ana Costa',
      email: 'ana.costa@example.com',
      telefone: '321654987',
      cargo: 'Coordenadora',
      departamento: 'Marketing',
      dataAdmissao: new Date('2018-11-05'),
      ativo: true,
    },
  ];

  constructor() {}

  addAdministrador(admin: Admin) {
    this.administradores.push({ ...admin, id: this.administradores.length });
  }

  getAdminById(id: number) {
    return this.administradores.find((a) => a.id == id);
  }

  atualizarDadosAdmin(admin: Admin) {
    const index = this.administradores.findIndex((a) => a.id == admin.id);
    if (index != -1) {
      this.administradores[index] = admin;
    }
  }
}
