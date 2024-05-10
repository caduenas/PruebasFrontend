import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Cadenahash } from '../../intrfaces/cadenahash';
import { AuthServiceService } from '../../core/services/autentificacion/auth-service.service'; // Importa el servicio de autenticación

@Component({
  selector: 'app-hash',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hash.component.html',
  styleUrl: './hash.component.css'
})
export class HashComponent {
  constructor(private service: AuthServiceService){}
  fileContent: string | ArrayBuffer | null = null;
  HashSelecionado: string = '';
  Valor: string = ""
  Cadena: Cadenahash = {
    cadena: "",
    hashmethod: ""
  };
  archivoInput: string = '';
  resultado: string = '';
  valueError: string = '';
  generarCadena(){
    this.Cadena.hashmethod = this.HashSelecionado
    if (this.fileContent) {
      this.Cadena.cadena = this.fileContent.toString();
    }else{
      this.Cadena.cadena = this.Valor
    }
    this.service.Crearhash(this.Cadena).subscribe(
      (Response) =>{
        this.resultado = Response.hash;
      },
      (error) =>{
        if(error.status === 401){
          this.valueError = "No esta autorizado";
        }else{
          this.valueError = "Error en el servidor";
        }
      }
    )
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader: FileReader = new FileReader();

    reader.onload = (e) => {
      this.fileContent = reader.result;
    };

    reader.readAsText(file);
  }
}
