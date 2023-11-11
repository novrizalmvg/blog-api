import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Query, Put, Delete } from '@nestjs/common';
import { JurnalService } from './jurnal.service';
import { CreateJurnalDTO } from './dto/create-jurnal.dto';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';

@Controller('jurnal')
export class JurnalController {
    constructor(private jurnalService: JurnalService) { }

    @Get('/')
    async getjurnals(@Res() res) {
        const jurnals = await this.jurnalService.getJurnals();
        return res.status(HttpStatus.OK).json(jurnals);
    }

    @Get('/:jurnalId')
    async getJurnal(@Res() res, @Param('jurnalId', new ValidateObjectId()) jurnalId) {
        const jurnal = await this.jurnalService.getJurnal(jurnalId);
        if (!jurnal) throw new NotFoundException('Jurnal does not exist!');
        return res.status(HttpStatus.OK).json(jurnal);

    }

    @Post('/')
    async addjurnal(@Res() res, @Body() createJurnalDTO: CreateJurnalDTO) {
        const newJurnal = await this.jurnalService.addJurnal(createJurnalDTO);
        return res.status(HttpStatus.OK).json({
            message: "Jurnal has been submitted successfully!",
            jurnal: newJurnal
        })
    }

    @Put('/edit')
    async editJurnal (
        @Res() res,
        @Query('jurnalId', new ValidateObjectId()) jurnalId,
        @Body() createJurnalDTO: CreateJurnalDTO
    ) {
        const editJurnal = await this.jurnalService.editJurnal(jurnalId, createJurnalDTO);
        if (!editJurnal) throw new NotFoundException('jurnal does not exist');
        return res.status(HttpStatus.OK).json({
            messsage: 'Jurnal has been seccessfuly updated',
            jurnal: editJurnal
        })
    }

    @Delete('/delete')
    async deleteJurnal(@Res() res, @Query('jurnalID', new ValidateObjectId()) jurnalId) {
        const deletedJurnal = await this.jurnalService.deleteJurnal(jurnalId);
        if (!deletedJurnal) throw new NotFoundException('jurnal does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'jurnal hes been deleted',
            jurnal: deletedJurnal
        })
    } 
}