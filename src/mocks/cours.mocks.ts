import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CoursMocks {

  public espaces = [

    {
      id: 1,
      name:'Body Barre',
      description: 'Cours de renforcement général du corp à l\'aide du barre.',
      hours: 'De 17h30 à 18h15',
      icon :'people',
    },
    {
      id: 2,
      name:'E-Cross Training',
      description: 'Circuit training qui fait appel à toutes les qualités physiques.',
      hours: 'De 18:00 à 18:45',
      icon :'people',
    },
    {
      id: 3,
      name:'Upper Body',
      description: 'Cours mobilisant l\'ensemble des muscles du haut du corps.',
      hours: 'De 18:15 à 18:45',
      icon :'people',
    },
    {
      id: 4,
      name:'E-Body Zen',
      description: 'Gymnastique douce basée sur des étirements des fibres musculaires.',
      hours: 'De 19:00 à 19:45',
      icon :'people',
    },
  ];
  public espacesOtherDay = [

    {
      id: 1,
      name:'Cross Training',
      description: 'Cours de renforcement général du corp à l\'aide du barre.',
      hours: 'De 17h30 à 18h15',
      icon :'people',
    },
    {
      id: 2,
      name:'E-pilates',
      description: 'Circuit training qui fait appel à toutes les qualités physiques.',
      hours: 'De 18:00 à 18:45',
      icon :'people',
    },
    {
      id: 3,
      name:'100% Abdos',
      description: 'Cours mobilisant l\'ensemble des muscles du haut du corps.',
      hours: 'De 18:15 à 18:45',
      icon :'people',
    },
    {
      id: 4,
      name:'Cuisses Abdos',
      description: 'Gymnastique douce basée sur des étirements des fibres musculaires.',
      hours: 'De 19:00 à 19:45',
      icon :'people',
    },
  ];
  public getAll() {
    return this.espaces;
  }

  getAllOther() {
    return this.espacesOtherDay;
  }
}
