import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Query, Put, Delete } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDTO } from './dto/create-contact.dto';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';

@Controller('contact')
export class ContactController {
    constructor(private contactService: ContactService) { }

    @Get('/')
    async getContacts(@Res() res) {
        const contacts = await this.contactService.getContacts();
        return res.status(HttpStatus.OK).json(contacts);
    }

    @Get('/:contactId')
    async getContact(@Res() res, @Param('contactId', new ValidateObjectId()) contactId) {
        const contact = await this.contactService.getContact(contactId);
        if (!contact) throw new NotFoundException('Contact does not exist!');
        return res.status(HttpStatus.OK).json(contact);

    }

    @Post('/')
    async addContact(@Res() res, @Body() createContactDTO: CreateContactDTO) {
        const newContact = await this.contactService.addContact(createContactDTO);
        return res.status(HttpStatus.OK).json({
            message: "Contact has been submitted successfully!",
            contact: newContact
        })
    }

    @Put('/edit')
    async editContact (
        @Res() res,
        @Query('contactlId', new ValidateObjectId()) contactId,
        @Body() createContactDTO: CreateContactDTO
    ) {
        const editContact = await this.contactService.editContact(contactId, createContactDTO);
        if (!editContact) throw new NotFoundException('contact does not exist');
        return res.status(HttpStatus.OK).json({
            messsage: 'Contact has been seccessfuly updated',
            Contact: editContact
        })
    }

    @Delete('/delete')
    async deleteContact(@Res() res, @Query('contactID', new ValidateObjectId()) contactId) {
        const deletedContact = await this.contactService.deleteContact(contactId);
        if (!deletedContact) throw new NotFoundException('contact does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'contact hes been deleted',
            contact: deletedContact
        })
    } 
}