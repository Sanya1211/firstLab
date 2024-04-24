import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  public users: User[] = [
    {"id": 1, "name": "Ylya", "age": 12, "email": "Ylya@example.com", "subscription": false},
    {"id": 2, "name": "Nikita", "age": 52, "email": "Nikita@example.com", "subscription": true},
    {"id": 3, "name": "Vlad", "age": 35, "email": "Vlad@example.com", "subscription": true},
    {"id": 4, "name": "Dima", "age": 26, "email": "Dima@example.com", "subscription": true}
  ]

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find(user => user.id === id);
    if (!user) {
        throw new NotFoundException(`A user with such a id: ${id} no!`);
    }
    return user;    
  } 
}
