import { Component } from '@angular/core';
import { AlumnosUtl } from '../interfaces/utl.interface';
import { UtlService } from '../service/utl.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  /* <li>lucia - 22</li>
            <li>Leonardo -21</li>
            <li>Diana -21</li> */

  regAlum: AlumnosUtl = {
    nombre: '',
    edad: 0,
  };
  constructor(private utlService:UtlService){}

  /*agregarNuevoAlumnodata:alumnosUtl){
    this.alumnosUtl.push(datos);
    this.
    UtlService.mostrarSaludo();
  }*/



}
