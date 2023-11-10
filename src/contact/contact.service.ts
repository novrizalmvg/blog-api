import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Contact } from './interfaces/contact.interface';
import { CreateContactDTO } from './dto/create-contact.dto';

@Injectable()
export class ContactService {

    constructor(@InjectModel('Contact') private readonly contactModel: Model<Contact>) { }

    async getContacts(): Promise<Contact[]> {
        const contacts = await this.contactModel.find().exec();
        return contacts;
    }

    async getContact(contactId): Promise<Contact> {
        const contact = await this.contactModel
            .findById(contactId)
            .exec();
        return contact;
    }

    async addContact(createContactDTO: CreateContactDTO): Promise<Contact> {
        const newContact = new this.contactModel(createContactDTO);
        return newContact.save();
    }

    async editContact(contactID, createContactDTO: CreateContactDTO): Promise<Contact> {
        const editedContact = await this.contactModel
            .findByIdAndUpdate(contactID, createContactDTO, { new: true });
        return editedContact;
    }

    async deleteContact(contactId): Promise<any> {
        const deletedContact = await this.contactModel
            .findByIdAndRemove(contactId);
        return deletedContact;
    }

}