export interface RoomStatement {
    // id?: number,
    description: string,
    createdAt : Date

    id:string,
    label: string,
    status: string,
    status_code: string,
    created_at: string,
    history: [],
    phone: any,
    notification_sent: any,
    room: {},
    equipments: [],
    missions: [],
    check: null,
    reporter: {
      id: string,
      email: string,
      firstname: string,
      lastname: string,
      plainPassword: string,
      organization: {
        id: 3,
        name: string,
        colorPrimary: string,
        colorSecondary:string,
        address: string,
        telephone: string,
        mail: string,
        log: string
      },
      society:string,
      phone: string,
      role: number,
      role_description: string
    },
    reported: false

}

