import { Injectable } from '@angular/core';
import { NgSimpleStateBaseStore, NgSimpleStateStoreConfig } from 'ng-simple-state';
import { Observable } from 'rxjs';
import { Profile } from 'src/model/profile';
import themered from '../themered';
import themegreen from '../themegreen';
import themegrey from '../themegrey';

export interface CounterState {
  count?: number;
  colorPrimary?: string;
  currentPage?: string;
  showDidactiel?: boolean;
  user?: boolean;
  token?: string;
  isLogged?: boolean;
  informerStatus?: boolean;
  infosUser: Profile;
  currentRoote: string;
  theme?: any;

}
@Injectable({
  providedIn: 'root'
})
export class StateService extends NgSimpleStateBaseStore<CounterState> {

  storeConfig(): NgSimpleStateStoreConfig {
    return {
      storeName: 'StateStore'
    };
  }

  initialState(): CounterState {
    return {
      count: 0,
      colorPrimary: '',
      currentPage: '',
      showDidactiel: false,
      isLogged: false,
      currentRoote:'',
      informerStatus: false,
      theme: localStorage.getItem('theme') === 'red' ? themered : themegreen,
      infosUser:{
        email: '',
        firstname: '',
        id: '',
        lastname: '',
        organization: {
          id: 0,
          address: '',
          colorPrimary: '',
          colorSecondary: '',
          logo: '',
          mail: '',
          name: ''
        },
        phone: '',
        plainPassword: '',
        role: null,
        role_description: '',
        society: '',
      }
    };
  }

  getInformerStatus(): Observable<boolean> {
    return this.selectState(state => state.informerStatus);
  }
  setInformerStatus(__informerStatus) {
    this.setState(state => ({ informerStatus: __informerStatus }));
  }

  selectCount(): Observable<number> {
    return this.selectState(state => state.count);
  }

  selectIslogged(): Observable<boolean> {
    return this.selectState(state => state.isLogged);
  }
  selectedInfoUser(): Observable<Profile> {
    return this.selectState(state => state.infosUser);
  }

  selectedshowDidactiel(): Observable<boolean> {
    return this.selectState(state => state.showDidactiel);
  }

  selectedCurrentRoot(): Observable<string> {
    return this.selectState(state => state.currentRoote);
  }

  setCurrentRoot(pageUrl:string): void {
    this.setState(state => ({ currentRoote: pageUrl }));
  }




  setuserInfos(userInfo:Profile): void {
    this.setState(state => ({ infosUser: userInfo }));
  }

  userLogger(logged:boolean): void {
    this.setState(state => ({ isLogged: logged }));
  }


  alterDidacticiel(t: boolean): void {
    this.setState(state => ({ showDidactiel:t }));
  }
  increment(increment: number = 1): void {
    this.setState(state => ({ count: state.count + increment }));
  }

  decrement(decrement: number = 1): void {
    this.setState(state => ({ count: state.count - decrement }));
  }

  getToken(): Observable<string> {
    return this.selectState(state => state.token);
  }

  setToken(_token:string) {
    this.setState(state => ({ token: _token }));
  }


  getTheme() {
    return this.selectState(state => state.theme);
  }

}
