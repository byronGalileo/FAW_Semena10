import { Component,Input  } from '@angular/core';
import { FPersonaje } from '../../models/response/FuturamaResponse';

@Component({
  selector: 'app-navigate',
  standalone: true,
  imports: [],
  templateUrl: './navigate.component.html',
  styleUrl: './navigate.component.css'
})
export class NavigateComponent {
  @Input() personaje: FPersonaje = new FPersonaje();
}
