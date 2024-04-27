import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListacadenaComponent } from './pages/listacadena/listacadena.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListacadenaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
