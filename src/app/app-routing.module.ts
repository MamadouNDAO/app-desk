import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    // redirectTo: 'news',
    // pathMatch: 'full'
  },
  /*{
    path: 'news',
    redirectTo: 'news',
    pathMatch: 'full'
  },*/
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'service',
    loadChildren: () => import('./modules/service/service.module').then( m => m.ServicePageModule)
  },

  {
    path: 'cartographie',
    loadChildren: () => import('./modules/map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'cartographie/mode-reservation',
    loadChildren: () => import('./modules/map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./modules/news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'restauration',
    loadChildren: () => import('./pages/restauration/restauration.module').then( m => m.RestaurationPageModule)
  },
  {
    path: 'fitness',
    loadChildren: () => import('./pages/fitness/fitness.module').then( m => m.FitnessPageModule)
  },
  {
    path: 'gestion-confort',
    loadChildren: () => import('./pages/gestion-confort/gestion-confort.module').then( m => m.GestionConfortPageModule)
  },
  {
    path: 'conciergerie',
    loadChildren: () => import('./pages/conciergerie/conciergerie.module').then( m => m.ConciergeriePageModule)
  },
  {
    path: 'controle-acces',
    loadChildren: () => import('./pages/controle-acces/controle-acces.module').then( m => m.ControleAccesPageModule)
  },
  {
    path: 'constats',
    loadChildren: () => import('./pages/constats/constats.module').then( m => m.ConstatsPageModule)
  },
  {
    path: 'constat',
    loadChildren: () => import('./pages/constats/constats.module').then( m => m.ConstatsPageModule)
  },
  {
    path: 'visiteurs',
    loadChildren: () => import('./pages/visiteurs/visiteurs.module').then( m => m.VisiteursPageModule)
  },
  {
    path: 'plan-locaux',
    loadChildren: () => import('./pages/plan-locaux/plan-locaux.module').then( m => m.PlanLocauxPageModule)
  },
  {
    path: 'transport-old',
    loadChildren: () => import('./pages/transport/transport.module').then( m => m.TransportPageModule)
  },
  {
    path: 'meteo-old',
    loadChildren: () => import('./pages/meteo/meteo.module').then( m => m.MeteoPageModule)
  },
  {
    path: 'reservation_espace',
    loadChildren: () => import('./pages/reservation/reservation.module').then( m => m.ReservationPageModule)
  },
  {
    path: 'documents',
    loadChildren: () => import('./pages/documents/documents.module').then( m => m.DocumentsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'messagerie',
    loadChildren: () => import('./pages/messagerie/messagerie/messagerie.module').then( m => m.MessageriePageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'liens',
    loadChildren: () => import('./pages/liens/liens.module').then( m => m.LiensPageModule)
  },
  {
    path: 'boit-idee',
    loadChildren: () => import('./pages/boit-idee/boit-idee.module').then( m => m.BoitIdeePageModule)
  },

  {
    path: 'actualites',
    loadChildren: () => import('./pages/actualites/actualites.module').then( m => m.ActualitesPageModule)
  },
  {
    path: 'fil_actualites',
    loadChildren: () => import('./pages/actualites/actualites.module').then( m => m.ActualitesPageModule)
  },
  {
    path: 'informer',
    loadChildren: () => import('./pages/actualites/actualites.module').then( m => m.ActualitesPageModule)
  },
  {
    path: 'splashscreen',
    loadChildren: () => import('./splashscreen/splashscreen.module').then( m => m.SplashscreenPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'parkingx',
    loadChildren: () => import('./pages/parking/parking.module').then( m => m.ParkingPageModule)
  },
  {
    path: 'statistique',
    loadChildren: () => import('./pages/statistique/statistique.module').then( m => m.StatistiquePageModule)
  },
  {
    path: 'parametres',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'historique',
    loadChildren: () => import('./pages/historique/historique.module').then( m => m.HistoriquePageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./pages/inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'login-sso',
    loadChildren: () => import('./logincheck/logincheck.module').then( m => m.LogincheckPageModule)
  },
  {
    path: 'cartographie-not',
    loadChildren: () => import('./pages/cartographie/cartographie.module').then( m => m.CartographiePageModule)
  },
  {
    path: 'transport',
    loadChildren: () => import('./pages/transport-test/transport-test.module').then( m => m.TransportTestPageModule)
  },
  {
    path: 'meteo',
    loadChildren: () => import('./pages/meteo-app/meteo-app.module').then( m => m.MeteoAppPageModule)
  },
  {
    path: 'booking_bulle',
    loadChildren: () => import('./pages/reservation-bulle/reservation-bulle.module').then( m => m.ReservationBullePageModule)
  },
  {
    path: 'map-reservation',
    loadChildren: () => import('./modules/map-reservation/map-reservation.module').then( m => m.MapReservationPageModule)
  },
  {
    path: 'mission',
    loadChildren: () => import('./pages/mission/mission.module').then( m => m.MissionPageModule)
  }








];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
