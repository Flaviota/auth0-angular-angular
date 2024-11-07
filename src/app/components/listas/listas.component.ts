import { Component, OnInit } from '@angular/core';
import { ListacomprasService } from '../../services/listacompras.service';
import { Tarefa } from '../../../Lista';
import { CommonModule } from '@angular/common';
import { ListaItemComponent } from '../lista-item/lista-item.component';
import { AddListaComponent } from "../add-lista/add-lista.component";

@Component({
  selector: 'app-listas',
  standalone: true,
  imports: [CommonModule, ListaItemComponent, AddListaComponent, AddListaComponent],
  templateUrl: './listas.component.html',
  styleUrl: './listas.component.scss'
})
export class ListasComponent implements OnInit {

  tarefas: Tarefa[] = [];

  constructor(private taskService: ListacomprasService){}

  ngOnInit(): void{
    this.taskService.getTasks().subscribe((dado) => {
        this.tarefas = dado;
        console.log(dado)
    });

  }

  deleteTask(tarefa: Tarefa){
    this.taskService.deleteTask(tarefa).subscribe(() => 
      (this.tarefas = this.tarefas.filter((t) => t.id !== tarefa.id)));
  }

  onToggleConcluido(tarefa: Tarefa){
      tarefa.concluido = !tarefa.concluido;
      this.taskService.updateTask(tarefa).subscribe();
  }

  AddTask(tarefa: Tarefa){
    this.taskService.addTask(tarefa).subscribe((tarefa) => {
      this.tarefas.push(tarefa);
    });
  }
}
