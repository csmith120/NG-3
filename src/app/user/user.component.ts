import { Component, EventEmitter, Input, Output } from '@angular/core';

import { type User } from './user.model';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter();

  /*get imagePath() {
    //!return 'assets/users/' + this.avatar "picturs dont load"
  }*/

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
