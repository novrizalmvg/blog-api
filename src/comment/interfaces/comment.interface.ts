import { Document } from "mongoose";

export interface Comment extends Document {
    readonly post_id: string;
    readonly email: string;
    readonly message: string;
}