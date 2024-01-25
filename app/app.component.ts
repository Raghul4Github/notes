import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { LandingPgeComponent } from "./landing-pge/landing-pge.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet,LandingPgeComponent]
})
export class AppComponent 
{
  title = 'E-Book';
}
