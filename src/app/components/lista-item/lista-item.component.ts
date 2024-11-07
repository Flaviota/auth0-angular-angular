import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Tarefa } from '../../../Lista';
import { faTimes} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './lista-item.component.html',
  styleUrl: './lista-item.component.scss'
})
export class ListaItemComponent {
  @Input() tarefa!:Tarefa;
  @Output() onDeleteTask = new EventEmitter<Tarefa>();
  @Output() onToggleConcluido = new EventEmitter<Tarefa>

  faTimes = faTimes

  onDelete(tarefa: Tarefa){
    this.onDeleteTask.emit(tarefa);
}

onToggle(tarefa: Tarefa) {
  this.onToggleConcluido.emit(tarefa);
}
}
