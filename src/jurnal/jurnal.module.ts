import { Module } from '@nestjs/common';
import { JurnalController } from './jurnal.controller';
import { JurnalService } from './jurnal.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JurnalSchema } from './schemas/jurnal.schemas';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Jurnal', schema: JurnalSchema }])
    ],
    controllers: [JurnalController],
    providers: [JurnalService]
})

export class JurnalModule {}