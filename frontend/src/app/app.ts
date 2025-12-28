import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CommonModule } from '@angular/common';
import { Giphy } from './web/urls';

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

  // Template como string - ¡IMPORTANTE: backticks (`) y sin [src] binding!
  spinnerTemplate = `
    <div style="text-align: center; padding: 20px;">
      <img 
        src="${Giphy.Gif2}" 
        alt="Loading..." 
        style="width: 60vh; height: 60vh; border-radius: 12px; margin-bottom: 15px;"
      />
      <p style="color: #333; font-size: 18px; font-weight: 600; margin: 0;">
        Iniciando Sera KDS
      </p>
      <p style="color: #666; font-size: 14px; margin-top: 5px;">
        Tu comunidad de aprendizaje
      </p>
    </div>
  `;

  ngOnInit(): void {
    // Mostrar spinner al inicio
    this.spinnerService.show();
    
    // Opcional: Ocultar después de 3 segundos (simulación de carga)
    setTimeout(() => {
      this.spinnerService.hide();
    }, 3000);
  }
}