import { Component,OnInit  } from '@angular/core'; 
import { NavigateComponent } from '../navigate/navigate.component';
import { ShareService } from '../../services/share.service';
import { FuturamaResponse, FInfo, FPersonaje } from '../../models/response/FuturamaResponse';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NavigateComponent,HttpClientModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  private baseURL = "https://futuramaapi.com/api"
  respuesta: FuturamaResponse = new FuturamaResponse(0,0,new FInfo(), []);
  currentPage: number = 1;
  lastPage: number = 0;
  cp: Array<FPersonaje> = [];

  constructor(
    private share: ShareService,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.share.personaje.subscribe(p => {
      this.cp = p;
    });
    this.share.currentPage.subscribe(page => {
      this.currentPage = page;
      console.log(`currentPage : ${this.currentPage}`)
      this.getPersonajes(this.currentPage).subscribe (data => {
        console.log(data);
        this.lastPage = data.pages;
        this.respuesta = data;
        // console.log(this.respuesta);
      });
    });
  }

  getPersonajes(pagina: number) {
    return this.http.get<FuturamaResponse>(`${this.baseURL}/characters?page=${pagina}`);
  }

  backPage() {
    if (this.currentPage > 1) {
      console.log(`${this.currentPage - 1}`);
     this.share.setNewPage(this.currentPage - 1);
    }
  }

  nextPage() {
    if (this.currentPage < this.lastPage) {
      console.log(`${this.currentPage + 1}`);
      this.share.setNewPage(this.currentPage + 1)
    }
  }

  setCurrentPersonaje(p: FPersonaje) {
    this.share.setCurrentPersonaje(p);
  }

}
