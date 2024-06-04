export interface Profile {
  email?: string,
  firstname?: string,
  id?: string,
  lastname?: string,
  organization: {
    id: number,
    address: string,
    colorPrimary: string,
    colorSecondary: string,
    logo: string,
    mail: string,
    name: string
  },
  phone?: string,
  plainPassword: string,
  role?: number,
  role_description?:string,
  society?: string,
}


