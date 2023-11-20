import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';
import { ContactModule } from './contact/contact.module';
import { JurnalModule } from './jurnal/jurnal.module';
import { HomeModule } from './home/home.module';
import { CommentModule } from './comment/comment.module';
import { LikeModule } from './like/like.module';

@Module({
  imports: [
     MongooseModule.forRoot('mongodb://localhost/nest-blog'),
    // MongooseModule.forRoot('mongodb+srv://novrizalmvg:Novrizal123@cluster0.8dwixav.mongodb.net/nest-blog?retryWrites=true&w=majority'),
    BlogModule,
    ContactModule,
    JurnalModule,
    HomeModule,
    CommentModule,
    LikeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
