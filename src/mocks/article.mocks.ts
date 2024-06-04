import { Injectable } from "@angular/core";
import { Post } from "src/model/post";


export interface Article {
  id: number;
  name: string;
  desc: string;
  profile: string;
  post: any;
  images: any;
  comments: string;
  time: string;
  logo: string;
  like: string;
  share: string;
  imageLogo?: string;
}
export interface ArticleFavoris {
  id: number;
  name: string;
  desc: string;
  profile: string;
  post: any;
  images: any;
  comments: string;
  time: string;
  logo: string;
  like: string;
  share: string;
  imageLogo?: string;
}
export interface Weather {
  city: string;
  logo: string;
  temp: number;
}

@Injectable({
    providedIn: 'root'
})
export class ArticleMocks {

  public picture =[
    { id: 1,base64: '',images: 'assets/images/meteoo.jpeg',},
    { id: 2,base64: '',images: 'assets/images/revue.jpeg',},
    { id: 3,base64: '',images: 'assets/images/gym1.jpeg',},
    { id: 4,base64: '',images: 'assets/images/gym2.jpeg',},
    { id: 5,base64: '',images: 'assets/images/gym3.jpeg',},
    { id: 6,base64: '',images: 'assets/images/plat1.jpeg',},
    { id: 7,base64: '',images: 'assets/images/plat2.jpeg',},
    { id: 8,base64: '',images: 'assets/images/plat3.jpeg',},
    { id: 9,base64: '',images: 'assets/images/entreprise.jpeg',},
    { id: 10,base64: '',images: 'assets/images/cyberS.jpeg',},
    { id: 11,base64: '',images: 'assets/images/gel-h.jpeg',},
    { id: 12,base64: '',images: 'assets/images/collabo.png',},
    { id: 13,base64: '',images: 'assets/images/bienetre.png',},
    { id: 14,base64: '',images: 'assets/images/mobilite.png',},
    { id: 15,base64: '',images: 'assets/images/note.jpg',},
  ];

    public articles = [

        {
          id: 1,
          name: 'Actualité',
          desc: 'Les Bourses lancent une OPA sur la data ',
          profile: 'Profile',
          post: 'En perte de vitesse, les places boursières font le pari d’investir dans les données. En témoigne ' +
            'le rachat, par le London Stock Exchange,  du secteur informations et analyses financières de Reuters.',
          images:  this.picture[1],
          comments: '',
          time:'il y a une heure' ,
          logo:'globe',
          like:'true',
          share:'',
          commentColor:''

        },
        {
            id: 2,
            name: 'Météo',
            desc: 'city temp icon',
            profile: 'Profile',
            post: [{icon:'sunny-outline',temp:'16%',autre:'72%',desc:'Paris la défense'}],
            images: this.picture[0],
            comments: '',
            time:'il y a une heure' ,
            logo:'cloud',
            like:'',
            share:'',
            commentColor:''

        },
        {
            id: 3,
            name: 'Guide d\'utilisation',
            desc: 'Guide d\'utilisation <a href="https://iviplay-documents.s3.eu-west-3.amazonaws.com/Manuel+-+iViPlay+-+iViFlo+-+Assistant+personnel+-++20210430.pdf" target="_blank">consultable ici</a>',
            profile: 'Profile',
            post: 'Avec la redistribution des différents espaces et modes de travail, vos usagers ont plus que ' +
              'jamais besoin d’avoir les bons outils pour travailler en équipe.',
            images:  this.picture[14],
            comments: '',
            time:'il y a une heure' ,
            logo:'fast-food',
            imageLogo:'logo-color.png',
            like:'',
            share:'',
            commentColor:''

        },
        {
            id: 4,
            name: 'Hygiène / Gestes barrières',
            desc: 'Documentation hygiène / Gestes barrières <a href="https://iviplay-documents.s3.eu-west-3.amazonaws.com/doc-hygiene.pdf" target="_blank">consultable ici</a>',
            profile: 'Profile',
            post: 'N\'hésitez pas à nous contacter par mail : supportit@iviflo.com',
            images:  this.picture[10],
            comments: '',
            time:'il y a une heure' ,
            logo:'bandage',
            like:'',
            share:'',
            commentColor:''
        },
        {
            id: 5,
            name: 'Documentation RGPD',
            desc: 'Documentation RGPD <a href="https://iviplay-documents.s3.eu-west-3.amazonaws.com/guide-rgpd.pdf" target="_blank">consultable ici</a>',
            profile: 'Profile',
            post: 'Merci de votre vigilance et de garder le bon réflexe de nous prévenir ,' +
              ' comme le collaborateur aui a remonté cette alerte',
            images:  this.picture[9],
            comments: '',
            time:'il y a une heure' ,
            like:'',
            share:'',
            logo:'shield-checkmark',
            commentColor:''


        },
        {
            id: 6,
            name: 'Enquête de satisfaction',
            desc: 'Vous pouvez répondre à l\'enquête de satisfaction.',
            profile: 'Profile',
            post: '',
            images:  this.picture[12],
            comments: '',
            time:'il y a une heure' ,
            imageLogo:'logo-color.png',
            like:'',
            share:'',
            logo:'barbell',
            commentColor:''

        },
      {
            id: 7,
            name: 'Linkedin',
            desc: 'Vous pouvez consulter la page linkedin <a href="https://www.linkedin.com/company/iviplay/" target="_blank">juste ici</a>.',
            profile: 'Profile',
            post: '',
            images:  this.picture[11],
            comments: '',
            time:'il y a une heure' ,
            imageLogo:'logo-color.png',
            like:'',
            share:'',
            logo:'barbell',
            commentColor:''

        },
    ];

    public getAll() {
        return this.articles;
    }
  }
