import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as path from 'path';

const httpsOptions = {
  ca: fs.readFileSync(
    path.resolve(__dirname, '../certificate/certificate_ca.crt'),
  ),
  cert: fs.readFileSync(
    path.resolve(__dirname, '../certificate/certificate.crt'),
  ),
  key: fs.readFileSync(
    path.resolve(__dirname, '../certificate/certificate.key'),
  ),
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { httpsOptions });

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('TodoList example')
    .setDescription('The TodoList API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
  });

  await app.listen(80, () => console.log(`🚀 server has been started`));
}
bootstrap();
