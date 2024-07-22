import { Injectable } from '@nestjs/common';


@Injectable()
export class AppService {
  findOne(data: { user_id: string }): any {
    return { name: 'navid', age: 40 };
  }
}
