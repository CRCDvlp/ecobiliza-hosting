import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() folder: string;

  conductor: any = {
    selfie: '',
    licencia: '',
    antecedentes: '',
    ine: '',
    domicilio: '',
    propietario: '',
    nombre: '',
    email: '',
    celular: '',
    password: '',
    seguro: '',
    tarjetacirculacion: '',
    tag: '',
    cuenta: '',
    placas: '',
    modelo: '',
    fotoauto: '',
  }

  constructor(private auth: AngularFireAuth, private data: AngularFireDatabase, private storage: AngularFireStorage) {
  }

  ngOnInit() {
  }

  registrarConductor(){
    console.log(this.conductor);
  }

  updateProfilePhoto(){
    var reader = new FileReader();
    reader.onload = function() {
      var arrayBuffer = this.result,
        array = new Uint8Array(arrayBuffer),
        binaryString = String.fromCharCode.apply(null, array);
      console.log(binaryString);
    }
    //reader.readAsArrayBuffer([(<HTMLInputElement>document.getElementById('file'))]);
    reader.readAsArrayBuffer(this.conductor.selfie);
    //let upload = this.storage.ref('driver-request/').put(file);
  }

  updateSelfie($event){
    if ($event.target.files.length === 1) {
      this.subirArchivo($event.target.files[0]);
    }
  }

  public subirArchivo(file){
    let reference = this.storage.ref('driver-request/');
    reference.put(file).then(info => {
      console.log(info + ' - archivo subido');
    });
    /*let formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const url = "http://"; //destino en el servidor
    const headers = new Headers({});*/
  }
}
