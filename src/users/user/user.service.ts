import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  private readonly users: any[] = [];

  create(data: any) {
    this.users.push(data);
  }

  async find(): Promise<any[]> {
    return this.userRepo.find();
  }
}
