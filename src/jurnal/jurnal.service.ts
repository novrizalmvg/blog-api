import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Jurnal } from './interfaces/jurnal.interface';
import { CreateJurnalDTO } from './dto/create-jurnal.dto';

@Injectable()
export class JurnalService {

    constructor(@InjectModel('Jurnal') private readonly jurnalModel: Model<Jurnal>) { }

    async getJurnals(): Promise<Jurnal[]> {
        const jurnals = await this.jurnalModel.find().exec();
        return jurnals;
    }

    async getJurnal(jurnalId): Promise<Jurnal> {
        const jurnal = await this.jurnalModel
            .findById(jurnalId)
            .exec();
        return jurnal;
    }

    async addJurnal(createJurnalDTO: CreateJurnalDTO): Promise<Jurnal> {
        const newJurnal = new this.jurnalModel(createJurnalDTO);
        return newJurnal.save();
    }

    async editJurnal(jurnalID, createJurnalDTO: CreateJurnalDTO): Promise<Jurnal> {
        const editedJurnal = await this.jurnalModel
            .findByIdAndUpdate(jurnalID, createJurnalDTO, { new: true });
        return editedJurnal;
    }

    async deleteJurnal(jurnalId): Promise<any> {
        const deletedJurnal = await this.jurnalModel
            .findByIdAndRemove(jurnalId);
        return deletedJurnal;
    }

}