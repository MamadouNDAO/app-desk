import { User } from "./user";
import { Room } from "./room";
import { Check } from "./check";
import { Statement } from "@angular/compiler";

export interface Ticket {
    id?: string,
    name: string,
    status: string,
    status_code: string,
    notification_sent?: boolean,
    room: Room,
    equipments: Object[],
    missions: Mission[],
    statement?: any,
    reporter?: User,
    created_at?: string,
    history?: any[]
}

export interface Mission {
    user: User,
    checkResponses: CheckResponse[]
}

export interface CheckResponse{
    id?: string,
    checked: number,
    check: Check,
    checkId : string
}
export interface CreateTicket {
    name: string,
    equipments: Object[]
}

export interface EditTicket {
    id?: string,
    equipments: string[],
    maintainers: Object[],
    reporter?: User
}

export interface EditTicketAssignment {
    user: string
}