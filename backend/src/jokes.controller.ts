import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class JokesController {
  private readonly jokes = [
    'Why did the sysadmin cross the road? To get to the other subnet.',
    'I told my friend I containerized my life... now I don’t talk to people outside my namespace.',
    "There are 10 types of people: those who understand binary and those who don't.",
    "My password is 'incorrect', so when I forget it, my computer reminds me.",
    'I asked the Linux admin for a joke, but he said I need root privileges.',
    "I changed my WiFi name to 'HackMeIfYouCan'… now my Internet is blazing fast.",
  ];

  @Get('jokes')
  getJoke() {
    const random = Math.floor(Math.random() * this.jokes.length);
    return { joke: this.jokes[random] };
  }
}
