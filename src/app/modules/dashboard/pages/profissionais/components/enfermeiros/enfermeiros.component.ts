import { Component, OnInit } from '@angular/core';
import { PersonComponent } from '../../../../components/icones/person/person.component';
import { NgClass, NgFor } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PlusComponent } from '../../../../components/icones/plus/plus.component';

@Component({
  selector: 'app-enfermeiros',
  imports: [
    PersonComponent,
    NgFor,
    NgClass,
    ReactiveFormsModule,
    PlusComponent,
  ],
  templateUrl: './enfermeiros.component.html',
  styleUrl: './enfermeiros.component.scss',
})
export class EnfermeirosComponent implements OnInit {
  formNovoProfissional!: FormGroup;

  professionals = [
    {
      id: 0,
      nome: 'Luciana Moura',
    },
    {
      id: 1,
      nome: 'Alberto Santos',
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formNovoProfissional = this.fb.group({
      nome: [null, Validators.required],
    });
  }

  cadastrar() {
    const novoEnfermeiro = this.formNovoProfissional.value;
    this.professionals.push({
      ...novoEnfermeiro,
      id: this.professionals.length,
    });
  }
}
