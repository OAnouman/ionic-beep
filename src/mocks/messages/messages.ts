import { Profile } from "../../models/user/user.interface";
import { Message } from "../../models/message/message.interface";
import { USERS_LIST } from "../users/users";


const messagesList: Message[] = [

    { user: USERS_LIST[0], date: new Date(), lastMessage: 'I\'m learning Python !' },
    { user: USERS_LIST[1], date: new Date(), lastMessage: 'I\'m learning C# !' },
    { user: USERS_LIST[2], date: new Date(), lastMessage: 'I\'m learning ANgular !' },
    { user: USERS_LIST[3], date: new Date(), lastMessage: 'I\'m learning Ionic ! It\'s too cool !!!' },
]

export const MESSAGES_LIST = messagesList;


