import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteNuevoService } from '../service/cliente-nuevo.service';

@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.css']
})
export class NewformComponent   {

  title = 'AngularCliente';
  cliente:any
  apellido:string
  nombre:string
  edad:number
  fechanac:string
  messaj : string

  constructor(
    public agregarServi : ClienteNuevoService,
    private router: Router,

  ){}


  ngOninit(){
    this.agregarServi.getClientes().subscribe(data => {
      this.cliente = data.map( e => {
        return {
        id : e.payload.doc.id,
        isedit: false,
        nombre :e.payload.doc.data()['nombre'],
        apellido :e.payload.doc.data()['apellido'],
        edad : e.payload.doc.data()['edad'],
        fechanac :e.payload.doc.data()['fechanac'],
      }
      })
    })
    console.log(this.cliente)
  }


  Ingreso(){

    let record = {};
    record['apellido'] = this.apellido;
    record['nombre'] = this.nombre;
    record['edad'] = this.apellido;
    record['fechanac'] = this.fechanac;


    this.agregarServi.AgregarEmpleado(record).then(res => {
      this.apellido = ""
      this.nombre = ""
      this.edad = 0
      this.fechanac = ""
      this.messaj = "Emplreado Grabado"
      console.log(res)
    }).catch(error => {
      console.log(error);
    })

    }


    goPlaces() {
      this.router.navigate(['/', 'listar']);
    }
}
