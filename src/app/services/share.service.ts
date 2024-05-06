import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FPersonaje } from '../models/response/FuturamaResponse';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  private _currentPage = new BehaviorSubject<number>(1);
  private _personaje = new BehaviorSubject<Array<FPersonaje>>([]);
  currentPage = this._currentPage.asObservable()
  personaje = this._personaje.asObservable();

  constructor() { }

  setNewPage(page: number) {
    this._currentPage.next(page);
  }

  setCurrentPersonaje(personaje: FPersonaje) {
    let array: Array<FPersonaje> = this._personaje.getValue();
    array.push(personaje);
    this._personaje.next(array);
  }

}