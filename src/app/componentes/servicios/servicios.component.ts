import { Component } from '@angular/core';
import { ServiciosDeLaEmpresaService } from '../../servicios/servicios_de_la_empresa/servicios-de-la-empresa.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  solicitudes_formulario:any;

  constructor(private solicitudServicios:ServiciosDeLaEmpresaService){

  }

  ngOnInit(){
    this.obtenerSolicitudesFormulario()
  }

  obtenerSolicitudesFormulario(){
    this.solicitudServicios.obtenerSolicitudesFormulario().subscribe(
      (response:any) => {        
        console.log(response)
        this.solicitudes_formulario = response.servicios_empresa;          
        console.log(this.solicitudServicios);
      }, error => {
        console.log(error);
      }
    )
  }

}
