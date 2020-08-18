import { serialize, serializeAs } from 'cerialize';

export class User {
    @serialize id: string;
    @serializeAs('email_address') email: string;
    @serialize token: string;

    constructor(id: string, email: string, token: string) {
        this.id = id;
        this.email = email;
        this.token = token;
    }
}
