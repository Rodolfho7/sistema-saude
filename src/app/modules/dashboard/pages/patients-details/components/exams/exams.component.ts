import { Component } from '@angular/core';

const ELEMENT_DATA: any[] = [
  {
    id: 1,
    titulo: 'otorrino',
    medico: 'Dr. Romulo',
    data: '02/01/2025',
    status: 'agendado',
  },
  {
    id: 1,
    titulo: 'dermatologista',
    medico: 'Dra. Rafaela',
    data: '20/01/2025',
    status: 'consultado',
  },
  {
    id: 1,
    titulo: 'dermatologista',
    medico: 'Dra. Rafaela',
    data: '20/01/2025',
    status: 'atrasado',
  },
  {
    id: 1,
    titulo: 'dermatologista',
    medico: 'Dra. Rafaela',
    data: '20/01/2025',
    status: 'agendado',
  },
  {
    id: 1,
    titulo: 'dermatologista',
    medico: 'Dra. Rafaela',
    data: '20/01/2025',
    status: 'agendado',
  },
  {
    id: 1,
    titulo: 'dermatologista',
    medico: 'Dra. Rafaela',
    data: '20/01/2025',
    status: 'agendado',
  },
  {
    id: 1,
    titulo: 'dermatologista',
    medico: 'Dra. Rafaela',
    data: '20/01/2025',
    status: 'agendado',
  },
];

@Component({
  selector: 'app-exams',
  imports: [],
  templateUrl: './exams.component.html',
  styleUrl: './exams.component.css',
})
export class ExamsComponent {
  displayedColumns: string[] = ['titulo', 'medico', 'data', 'status'];
  displayedColumnsWithExpand = [...this.displayedColumns, 'detalhes'];
  dataSource = ELEMENT_DATA;
}
