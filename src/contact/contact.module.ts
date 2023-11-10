import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactSchema } from './schemas/contact.schemas';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'contact', schema: ContactSchema }])
    ],
    controllers: [ContactController],
    providers: [ContactService]
})

export class ContactModule {}