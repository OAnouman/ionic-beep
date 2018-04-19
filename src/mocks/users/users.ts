import { Profile } from "../../models/user/user.interface";
import { BinaryOperator } from "@angular/compiler";

const usersList: Profile[] = [

    {
        lastName: 'Martial',
        firstName: 'Anouman',
        avatar: 'assets/imgs/avatar.png',
        email: 'manouman@live.fr',
        bio: 'Famous Ionic dev !',
        dateOfBirth: new Date()

    },

    {

        lastName: 'Dekado',
        firstName: 'Oulai',
        avatar: 'assets/imgs/avatar.png',
        email: 'dekado@live.fr',
        bio: 'Make love not war !',
        dateOfBirth: new Date()

    },

    {

        lastName: 'Marcellin',
        firstName: 'Anouman',
        avatar: 'assets/imgs/avatar.png',
        email: 'don.marc@gmail.fr',
        bio: 'Life is beautiful !',
        dateOfBirth: new Date()

    },

    {

        lastName: 'Yaya',
        firstName: 'Keita',
        avatar: 'assets/imgs/avatar.png',
        email: 'yaya.sniper@gmail.fr',
        bio: 'Famous Python dev !',
        dateOfBirth: new Date()

    }

];

export const USERS_LIST = usersList;
