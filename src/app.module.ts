import { Module } from '@nestjs/common';
import { TeacherModule } from './teacher/dto/teacher.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [TeacherModule, ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env'
  }), MongooseModule.forRoot(process.env.RegisterTeacher)],
  controllers: [],
  providers: [],
})
export class AppModule { }
