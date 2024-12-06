import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SolicitudFormularioService } from '../../servicios/solicitud-formulario/solicitud-formulario.service';
import { TecnicosDeLaEmpresaService } from '../../servicios/tecnicos_de_la_empresa/tecnicos-de-la-empresa.service';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent {
  solicitudes_formulario:any;
  formularioForm;
  datos_formulario: any;
  constructor(private formBuild: FormBuilder, private solicitudFormularioSrv:SolicitudFormularioService,private solicitudTecnicos:TecnicosDeLaEmpresaService ){
    this.formularioForm = this.formBuild.group({
      nombre: '',
      apellido: '',
      correo: '',
      telefono: '',
      mensaje: ''
    });
  }
  ngOnInit(){
    this.obtenerSolicitudesFormulario()
  }
  enviarDatos(){
    this.solicitudFormularioSrv.registrarFormulario(this.formularioForm.value).subscribe(
      (response:any) => {
        
        this.datos_formulario = response.solicitud_formulario
        console.log(this.datos_formulario);        
        alert("Datos guardados correctamente");
        this.formularioForm.reset();
      },error => {
        console.log(error);
      }
    )   
  }

  obtenerSolicitudesFormulario(){
    this.solicitudTecnicos.obtenerSolicitudesFormulario().subscribe(
      (response:any) => {        
        console.log(response)
        this.solicitudes_formulario = response.profesionales;          
        console.log(this.solicitudTecnicos);
      }, error => {
        console.log(error);
      }
    )
  }
}
