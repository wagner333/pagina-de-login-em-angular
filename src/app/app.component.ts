import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  imageUrl: string = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/775dfae9-f9b5-46c9-bcd8-62e7d40ba177/dg8lit8-56655dec-712e-4efd-b212-fe7cf7dff9a6.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3NWRmYWU5LWY5YjUtNDZjOS1iY2Q4LTYyZTdkNDBiYTE3N1wvZGc4bGl0OC01NjY1NWRlYy03MTJlLTRlZmQtYjIxMi1mZTdjZjdkZmY5YTYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.T_g4k1AsMHtQDP6_uzVCFOPZ8uT1aftHUjPyR0gD4NY';  // Caminho correto para acessar a pasta assets  // Caminho correto para acessar a pasta assets
  changeImage(newImageUrl: string): void {
    this.imageUrl = newImageUrl;
  }
  namePlaceholder: string = 'Enter your name';
  emailPlaceholder: string = 'Enter your email';
  passwordPlaceholder: string = 'Create a password';
  title = "";
  user = {
    name: '',
    email: '',
    password: ''
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('User Registered:', this.user);
      form.reset();
    }
  }
}