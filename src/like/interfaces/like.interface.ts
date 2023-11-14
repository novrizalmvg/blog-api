export interface Like extends Document {
    readonly post_id: string;
    readonly email: string;
    readonly total: string;
}