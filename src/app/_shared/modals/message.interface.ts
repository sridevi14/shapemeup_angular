//import { User } from './user.interface';

export interface Message {
    content: string;
    sender: string;
    sender2:string;
    receiver: string;
    date: Date;
    type: string;
    myMsg: boolean;
}