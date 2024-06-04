import { Site } from "./site";

export const RoleUser = {
    2: 'Administrateur',
    3: 'Mainteneur',
    4: 'Usager',
    5: 'Gestionnaire de site'
};

export interface Qr {
    status: string,
    qr : string
}

export interface User {
    id?: string;
    firstname: string;
    lastname: string;
    society: string;
    phone: string;
    email: string;
    role: string;
    qr? : Qr;
    sites?: Site;
    assignments?: string[];
    role_description?: string;
    plainPassword?: string;
}

export interface UserAssignment {
    type: string,
    user?: User,
    assignment?: any
}
export interface CreateUserAssignment {
    type: string,
    user: string
}

export interface CreateUser {
    firstname: string;
    lastname: string;
    password: string;
    email: string;
}

export interface EditUser extends CreateUser {
    id?: string;
    users: string[];
}

export interface ContactUser {
  id: string;
  email: string;
  society: string;
  role: string;
  firstName: string;
  lastName: string;
}
