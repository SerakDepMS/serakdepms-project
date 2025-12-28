import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    ButtonModule, 
    NgxSpinnerModule,
    ToastModule, 
    ConfirmDialogModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('frontend');
  private readonly spinnerService = inject(NgxSpinnerService);

  ngOnInit(): void {
    // Mostrar spinner al inicio
    this.spinnerService.show();
    
    // Opcional: Ocultar después de 3 segundos (simulación de carga)
    setTimeout(() => {
      this.spinnerService.hide();
    }, 3000);
  }
}