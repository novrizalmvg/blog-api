import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';
import { ContactModule } from './contact/contact.module';
import { JurnalModule } from './jurnal/jurnal.module';
import { HomeModule } from './home/home.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest-blog'),
    BlogModule,
    ContactModule,
    JurnalModule,
    HomeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
