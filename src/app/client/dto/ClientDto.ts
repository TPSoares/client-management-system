export class ClientDto {

    id: string;
    name: string;
    email: string;
    phone: string;
    birth_date: string;

    constructor() {
        this.id = '';
        this.name = '';
        this.email = '';
        this.phone = '';
        this.birth_date = '';
    }
}