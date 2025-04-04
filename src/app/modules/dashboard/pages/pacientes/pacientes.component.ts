import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacienteService } from '../../services/paciente.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PlusComponent } from '../../components/icones/plus/plus.component';
import { PersonComponent } from '../../components/icones/person/person.component';
import { RemoveComponent } from '../../components/icones/remove/remove.component';
import { OptionsComponent } from '../../components/icones/options/options.component';
import { DetailsComponent } from '../../components/icones/details/details.component';
import { AlertaSucessoComponent } from '../../components/alerta-sucesso/alerta-sucesso.component';

@Component({
  selector: 'app-pacientes',
  imports: [
    NgFor,
    NgClass,
    NgIf,
    ReactiveFormsModule,
    PlusComponent,
    PersonComponent,
    RemoveComponent,
    OptionsComponent,
    DetailsComponent,
    AlertaSucessoComponent,
  ],
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.css',
})
export class PacientesComponent implements OnInit {
  pacientes: any[] = [];

  formNovopaciente!: FormGroup;

  mostrarAlertaSucesso = false;
  mensagemAlerta = '';

  constructor(
    private router: Router,
    private pacienteService: PacienteService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.pacientes = this.pacienteService.pacientes;

    this.formNovopaciente = this.fb.group({
      nome: [null, Validators.required],
      pais: [null, Validators.required],
      profissao: [null, Validators.required],
      planoSaude: [null, Validators.required],
    });
  }

  cadastrar() {
    const paciente = this.formNovopaciente.value;
    this.pacienteService.addPaciente(paciente);
    this.alertaSucesso('Paciente cadastrado com sucesso!');
  }

  irParaDetalhes(element: any) {
    this.router.navigate([`/dashboard/pacientes/${element.id}`]);
  }

  removerPaciente(paciente: any) {
    this.pacienteService.removerPaciente(paciente);
    this.pacientes = this.pacienteService.pacientes;
    this.alertaSucesso('Paciente removido com sucesso!');
  }

  alertaSucesso(mensagem: string) {
    this.mensagemAlerta = mensagem;
    this.mostrarAlertaSucesso = true;
    setTimeout(() => {
      this.mostrarAlertaSucesso = false;
      this.mensagemAlerta = '';
    }, 2000);
  }
}
