import {Equipment} from './equipment';

export interface Check {
    id?: number;
    description: string;
    checked: number;
    equipments?: Equipment[];
}

export interface CreateCheck {
    description: string;
}

export interface EditCheck {
    id?: number;
    description: string;
}

export const ALL_PROFILES = [
    {
        value: 'user',
        label: 'Usager',
    },
    {
        value: 'maintainer',
        label: 'Mainteneur',
    },
    {
        value: 'all',
        label: 'Tous',
    },
];
