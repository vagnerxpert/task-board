import { Component } from '@angular/core';
import { Column, Task } from 'src/app/models'
import { Column_1 as Column } from "../column/column";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  imports: [Column_1]
})
export class BoardComponent {
  Columns: Column[] = [
    {
      id: 1,
      title: 'A Fazer',
      tasks: [
        {id: 1, title: 'Aprender Angular'},
        {id: 2, title: 'Criar trello'}
      ]
    },
    {
      id: 2,
      title: 'Em Progresso',
      tasks: [
        {id: 3, title: 'Finalizar trello'},
        {id: 2, title: 'criar boards'}
      ]
    },
    {
      id: 3,
      title: 'Finalizado',
      tasks: [
        {id: 4, title: 'Teste Finalizado'},
        {id: 5, title: 'Teste finalizado 2'}
      ]
    }
  ];

}
