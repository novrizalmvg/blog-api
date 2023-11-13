import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Query, Put, Delete } from '@nestjs/common';
import { HomeService } from './home.service';
import { CreateHomeDTO } from './dto/create-home.dto';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';

@Controller('home')
export class HomeController {
    constructor(private homeService: HomeService) { }

    @Get('/')
    async getHomes(@Res() res) {
        const homes = await this.homeService.getHomes();
        return res.status(HttpStatus.OK).json(homes);
    }

    @Get('/:homeId')
    async getHome(@Res() res, @Param('homeId', new ValidateObjectId()) homeId) {
        const homes = await this.homeService.getHome(homeId);
        if (!homes) throw new NotFoundException('Home does not exist!');
        return res.status(HttpStatus.OK).json(homes);

    }

    @Post('/')
    async addHome(@Res() res, @Body() createHomeDTO: CreateHomeDTO) {
        const newHome = await this.homeService.addHome(createHomeDTO);
        return res.status(HttpStatus.OK).json({
            message: "Home has been submitted successfully!",
            home: newHome
        })
    }

    @Put('/edit')
    async editHome (
        @Res() res,
        @Query('homeId', new ValidateObjectId()) homeId,
        @Body() createHomeDTO: CreateHomeDTO
    ) {
        const editHome = await this.homeService.editHome(homeId, createHomeDTO);
        if (!editHome) throw new NotFoundException('home does not exist');
        return res.status(HttpStatus.OK).json({
            messsage: 'Home has been seccessfuly updated',
            home: editHome
        })
    }

    @Delete('/delete')
    async deleteHome(@Res() res, @Query('homeId', new ValidateObjectId()) homeId) {
        const deletedHome = await this.homeService.deleteHome(homeId);
        if (!deletedHome) throw new NotFoundException('home does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'home hes been deleted',
            home: deletedHome
        })
    } 
}
