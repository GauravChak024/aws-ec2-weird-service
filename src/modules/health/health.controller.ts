import { Controller, Get} from '@nestjs/common';

@Controller('health')
export class HealthController {

  @Get('/check')
  getHealth(): { message: string } {
    return { message: 'Everything is good here' };
  }
}