import { AppModule } from "./app/app.module";

async function bootstrap() {
  const app = new AppModule();
  await app.run();
}

bootstrap();