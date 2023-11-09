import { Controller, Get  } from '@nestjs/common';

@Controller('')
export class appController {
  @Get('')
  async getAllUsers() {
    return { message : "Welcome Gaurav!!!" };
  }
}