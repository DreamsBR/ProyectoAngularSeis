import { Component } from '@angular/core';
import {CrudService} from './service/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular9-firebaseapp';

cliente: any;

nombre:string;
apellido:string;
edad:string;
fechanac:string;
message:string;



promerdio : number;




  constructor(public crudservice:CrudService){}

ngOnInit() {

    this.crudservice.get_Allemployee().subscribe(data => {

      this.cliente = data.map(e => {
        return {
          id: e.payload.doc.id,
          isedit:  false,
          nombre: e.payload.doc.data()['name'],
          apellido: e.payload.doc.data()['apellido'],
          edad: e.payload.doc.data()['edad'],
          fechanac: e.payload.doc.data()['fechanac'],
        };
      })
      console.log(this.cliente);

    });
  }

  CreateRecord()
  {
    let Record = {};
    Record['nombre'] = this.nombre;
    Record['apellido'] = this.apellido;
    Record['edad'] = this.edad;
    Record['fechanac'] = this.fechanac;

    this.crudservice.create_Newemployee(Record).then(res => {

        this.nombre = "";
        this.apellido = "";
        this.edad = undefined;
        this.fechanac ="";
        console.log(res);
        this.message = "Cliente creado";
    }).catch(error => {
      console.log(error);
    });

  }

  EditRecord(Record)
  {
    Record.isedit = true;

    Record.nombre = Record.nombre;
    Record.ediapellido = Record.apellido;
    Record.edad = Record.edad;
    Record.fechanac = Record.fechanac;


  }

  Updatarecord(recorddata)
  {
    let record = {};
    record['name'] = recorddata.editname;
    record['apellido'] = recorddata.edit
    record['age'] = recorddata.editage;
    record['address'] = recorddata.editaddress;

    this.crudservice.update_employee(recorddata.id, record);
    recorddata.isedit = false;
  }

  Deleteemployee(record_id)
  {
    this.crudservice.delete_employee(record_id);
  }


}
