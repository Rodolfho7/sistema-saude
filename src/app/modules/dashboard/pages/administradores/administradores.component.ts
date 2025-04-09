import { Component } from '@angular/core';
import { PlusComponent } from '../../components/icones/plus/plus.component';
import { PersonComponent } from '../../components/icones/person/person.component';
import { OptionsComponent } from '../../components/icones/options/options.component';
import { RemoveComponent } from '../../components/icones/remove/remove.component';
import { DetailsComponent } from '../../components/icones/details/details.component';
import { AlertaSucessoComponent } from '../../components/alerta-sucesso/alerta-sucesso.component';
import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { CheckComponent } from '../../components/icones/check/check.component';
import { CancelComponent } from '../../components/icones/cancel/cancel.component';

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

@Component({
  selector: 'app-administradores',
  imports: [
    PlusComponent,
    PersonComponent,
    OptionsComponent,
    RemoveComponent,
    DetailsComponent,
    AlertaSucessoComponent,
    NgIf,
    NgClass,
    NgFor,
    DatePipe,
    ReactiveFormsModule,
    CheckComponent,
    CancelComponent,
  ],
  templateUrl: './administradores.component.html',
  styleUrl: './administradores.component.css',
  standalone: true,
})
export class AdministradoresComponent {
  mostrarAlertaSucesso = false;
  mensagemAlerta = '';

  formNovoAdministrador!: FormGroup;

  administradores: Admin[] = [];

  constructor(private adminService: AdminService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.administradores = this.adminService.administradores;

    this.formNovoAdministrador = this.fb.group({
      id: [null],
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      telefone: [null, Validators.required],
      cargo: [null, Validators.required],
      departamento: [null, Validators.required],
      dataAdmissao: [null, Validators.required],
      ativo: [true],
    });
  }

  cadastrarAdministrador() {
    const novoAdmin = this.formNovoAdministrador.value;
    this.adminService.addAdministrador(novoAdmin);
  }

  removerAdministrador(administrador: any) {}

  irParaDetalhes(administrador: any) {}
}
