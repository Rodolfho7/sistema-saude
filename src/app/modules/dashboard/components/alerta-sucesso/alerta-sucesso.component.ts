import { Component, Input } from '@angular/core';
import { CheckComponent } from '../icones/check/check.component';

@Component({
  selector: 'app-alerta-sucesso',
  imports: [CheckComponent],
  templateUrl: './alerta-sucesso.component.html',
  styleUrl: './alerta-sucesso.component.scss',
})
export class AlertaSucessoComponent {
  @Input() mensagemAlerta = '';
}
