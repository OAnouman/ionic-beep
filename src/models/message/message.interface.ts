import { Profile } from "../user/user.interface";

export interface Message {

    userFromId: string;

    userFromProfile: {
        firstName: string;
        lastName: string;
    }

    userToId: string;

    userToProfile: {
        firstName: string;
        lastName: string;
    }

    text: string;

}