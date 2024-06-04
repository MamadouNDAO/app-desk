export interface ServiceModule {
    id: string;
    key: string;
    label: string;
    icon?: string;
    background: string;
    position: number;
    id_number: string;
    modules: ServiceModule[];
}
