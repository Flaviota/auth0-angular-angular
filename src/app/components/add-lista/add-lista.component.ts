import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarefa } from '../../../Lista';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-lista',
  standalone: true,
  imports: [FormsModule, ButtonComponent,CommonModule],
  templateUrl: './add-lista.component.html',
  styleUrl: './add-lista.component.scss'
})
export class AddListaComponent {
  @Output() onAddTask = new EventEmitter<Tarefa>();

  tarefa: string = '';
  categoria: string =  '';
  concluido: boolean = false;
  mostrarAddTarefa: boolean = false;


  onSubmit() {
    //alerta de adicione uma tarefa
    if(!this.tarefa) {
      alert('Adicione a tarefa!')
      return;
    }

    const novaTarefa = {
     tarefa: this.tarefa,
     categoria: this.categoria,
     concluido: this.concluido
    }

    this.onAddTask.emit(novaTarefa);

    this.tarefa = '';
    this.categoria = '';
    this.concluido = false;

  }

  AlteraVisualizacao(valor: boolean){
    this.mostrarAddTarefa = valor;
  }
}
