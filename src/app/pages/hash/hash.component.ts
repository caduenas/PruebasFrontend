import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hash',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hash.component.html',
  styleUrl: './hash.component.css'
})
export class HashComponent {
  HashSelecionado: string = '';
  Cadena: string = '';
  archivoInput: string = '';
  resultado: string = '';
}
