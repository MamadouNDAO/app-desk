import { Injectable } from '@angular/core';
import { ConsiergerieMocks } from 'src/mocks/Conciergerie.mocks';

@Injectable({
  providedIn: 'root'
})
export class ConciergerieService {

  constructor(private conciergerieMocks :ConsiergerieMocks) { }

  getConciergerieServices(){
    return this.conciergerieMocks.getAll();
  }

}
