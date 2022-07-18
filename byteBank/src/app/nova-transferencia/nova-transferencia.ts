import {Component, EventEmitter, Output} from '@angular/core';
import {TransferenciaService} from '../service/transferencia.service';
import {TransferenciaModel} from '../model/transferenciaModel';


@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.html',
  styleUrls: ['./nova-transferencia.scss']
})

export class NovaTransferenciaComponent {
  // aoTransferir objeto criado
  // new EventEmitter => propagar os dados

  @Output() aoTransferir = new EventEmitter<any>();

  valor = 0;
  destino = '';

  constructor(private service: TransferenciaService) {
  }

  transferir = () => {
    console.log('Solicitada nova transferência');
    const valorEmitido: TransferenciaModel = {valor: this.valor, destino: this.destino};
    this.service.adicionar(valorEmitido).subscribe(resultado => {
      console.log(resultado);
      this.limpar(); // limpa os campos
    }, error => console.error(error));
    this.limpar();
    // this.aoTransferir.emit(valorEmitido);
  };

  limpar = () => {
    this.valor = 0;
    this.destino = null;
  };

}


