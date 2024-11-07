import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeaderComponent } from "../../components/header/header.component";
import { ListasComponent } from "../../components/listas/listas.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, AsyncPipe, HeaderComponent, ListasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(public auth: AuthService) {}
}
