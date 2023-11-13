import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Home } from './interfaces/home.interfaces';
import { CreateHomeDTO } from './dto/create-home.dto';

@Injectable()
export class HomeService {

    constructor(@InjectModel('Home') private readonly homeModel: Model<Home>) { }

    async getHomes(): Promise<Home[]> {
        const homes = await this.homeModel.find().exec();
        return homes;
    }

    async getHome(homeId): Promise<Home> {
        const home = await this.homeModel
            .findById(homeId)
            .exec();
        return home;
    }

    async addHome(createHomeDTO: CreateHomeDTO): Promise<Home> {
        const newHome = new this.homeModel(createHomeDTO);
        return newHome.save();
    }

    async editHome(homeID, createHomeDTO: CreateHomeDTO): Promise<Home> {
        const editedHome = await this.homeModel
            .findByIdAndUpdate(homeID, createHomeDTO, { new: true });
        return editedHome;
    }

    async deleteHome(homeId): Promise<any> {
        const deletedHome = await this.homeModel
            .findByIdAndRemove(homeId);
        return deletedHome;
    }

}