import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class HomeController {
  @Get()
  @Render('home')
  root() {
    return { message: 'Hello world!' };
  }
}