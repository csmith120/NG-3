import { Component, EventEmitter, Input, Output } from '@angular/core';

//type User = {
//  id: string;
//  avatar: string;
//  name: string;
//}

interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input({required: true}) user!: User;
  @Output() select = new EventEmitter();

  /*get imagePath() {
    //!return 'assets/users/' + this.avatar "picturs dont load"
  }*/

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
