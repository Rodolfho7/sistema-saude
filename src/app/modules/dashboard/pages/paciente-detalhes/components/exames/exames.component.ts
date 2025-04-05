import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PlusComponent } from '../../../../components/icones/plus/plus.component';
import { ExamesService } from '../../../../services/exames.service';
import { AlertaSucessoComponent } from '../../../../components/alerta-sucesso/alerta-sucesso.component';
import { OptionsComponent } from '../../../../components/icones/options/options.component';
import { CheckComponent } from '../../../../components/icones/check/check.component';
import { CancelComponent } from '../../../../components/icones/cancel/cancel.component';

@Component({
  selector: 'app-exames',
  imports: [
    NgClass,
    DatePipe,
    NgFor,
    NgIf,
    ReactiveFormsModule,
    PlusComponent,
    AlertaSucessoComponent,
    OptionsComponent,
    CheckComponent,
    CancelComponent,
  ],
  templateUrl: './exames.component.html',
  styleUrl: './exames.component.css',
})
export class ExamesComponent implements OnInit {
  @Input() pacienteId: string | null = null;

  formNovoExame!: FormGroup;
  mostrarAlertaSucesso = false;
  mensagemAlerta = '';

  exames: any[] = [];

  constructor(private fb: FormBuilder, private examesService: ExamesService) {}

  ngOnInit(): void {
    this.getExames();

    this.formNovoExame = this.fb.group({
      laboratorio: [null, Validators.required],
      tipoExame: [null, Validators.required],
      data: [null, Validators.required],
      status: [null],
    });
  }

  getExames() {
    if (this.pacienteId == null) {
      return;
    }
    const pacientId = +this.pacienteId;
    this.exames = this.examesService.exames.filter(
      (c) => c.pacientId == pacientId
    );
  }

  addExame() {
    const dadosExame = this.formNovoExame.value;
    if (this.pacienteId == null) {
      return;
    }
    const pacientId = +this.pacienteId;
    this.examesService.addExame({
      ...dadosExame,
      status: 'Marcado',
      pacientId: pacientId,
    });
    this.alertaSucesso('Exame marcado!');
    this.formNovoExame.reset();
    this.getExames();
  }

  alertaSucesso(mensagem: string) {
    this.mensagemAlerta = mensagem;
    this.mostrarAlertaSucesso = true;
    setTimeout(() => {
      this.mostrarAlertaSucesso = false;
      this.mensagemAlerta = '';
    }, 2000);
  }

  cancelarExame(exame: any) {
    this.examesService.atualizarDadosExame({ ...exame, status: 'Cancelado' });
    this.getExames();
  }

  marcarFeito(exame: any) {
    this.examesService.atualizarDadosExame({ ...exame, status: 'Feito' });
    this.getExames();
  }
}
