import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PlusComponent } from '../../../../components/icones/plus/plus.component';
import { AlertaSucessoComponent } from '../../../../components/alerta-sucesso/alerta-sucesso.component';
import { ConsultasService } from '../../../../services/consultas.service';
import { MedicosService } from '../../../../services/medicos.service';
import { OptionsComponent } from '../../../../components/icones/options/options.component';
import { CancelComponent } from '../../../../components/icones/cancel/cancel.component';
import { CheckComponent } from '../../../../components/icones/check/check.component';

@Component({
  selector: 'app-consultas',
  imports: [
    NgClass,
    ReactiveFormsModule,
    NgFor,
    PlusComponent,
    NgClass,
    NgIf,
    DatePipe,
    AlertaSucessoComponent,
    OptionsComponent,
    CancelComponent,
    CheckComponent,
  ],
  templateUrl: './consultas.component.html',
  styleUrl: './consultas.component.css',
})
export class ConsultasComponent implements OnInit {
  @Input() pacienteId: string | null = null;

  formNovaConsulta!: FormGroup;
  mostrarAlertaSucesso = false;
  mensagemAlerta = '';

  consultas: any[] = [];
  medicos: any[] = [];

  constructor(
    private consultasService: ConsultasService,
    private medicosService: MedicosService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getConsultas();
    this.getMedicos();

    this.formNovaConsulta = this.fb.group({
      nomeMedico: [null, Validators.required],
      data: [null, Validators.required],
      status: [null],
    });
  }

  getConsultas() {
    if (this.pacienteId == null) {
      return;
    }
    const pacientId = +this.pacienteId;
    this.consultas = this.consultasService.consultas.filter(
      (c) => c.pacientId == pacientId
    );
  }

  getMedicos() {
    this.medicos = this.medicosService.medicos;
  }

  addConsulta() {
    const dadosConsulta = this.formNovaConsulta.value;
    if (this.pacienteId == null) {
      return;
    }
    const pacientId = +this.pacienteId;
    this.consultasService.addConsulta({
      ...dadosConsulta,
      status: 'A consultar',
      pacientId: pacientId,
    });
    this.alertaSucesso('Consulta agendada!');
    this.formNovaConsulta.reset();
    this.getConsultas();
  }

  alertaSucesso(mensagem: string) {
    this.mensagemAlerta = mensagem;
    this.mostrarAlertaSucesso = true;
    setTimeout(() => {
      this.mostrarAlertaSucesso = false;
      this.mensagemAlerta = '';
    }, 2000);
  }

  cancelarConsulta(consulta: any) {
    this.consultasService.atualizarDadosConsulta({
      ...consulta,
      status: 'Cancelado',
    });
    this.getConsultas();
  }

  marcarFeito(consulta: any) {
    this.consultasService.atualizarDadosConsulta({
      ...consulta,
      status: 'Consultado',
    });
    this.getConsultas();
  }
}
