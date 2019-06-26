import { Get, Controller, Render } from '@nestjs/common';

@Controller('about')
export class AboutController {
  @Get()
  @Render('about')
  root() {
    return { message: 'Hello world!' };
  }
}