export interface ConsiergerieModule {
    id: string;
    name: string;
    icon: string;
    modules:[]
}
export interface Consiergerie {
    id: string;
    name: string;
    icon: string;
    modules:ConsiergerieModule[]
}
