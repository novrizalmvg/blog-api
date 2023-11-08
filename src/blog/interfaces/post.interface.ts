import { exec } from "child_process";
import { Document } from "mongoose";

export interface post extends Document {
    readonly title: string;
    readonly description: string;
    readonly body: string;
    readonly author: string;
    readonly date_posted: string
}