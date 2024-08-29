  import { Component } from '@angular/core';
  import { RouterOutlet } from '@angular/router';
import { FinancialTableComponent } from './financial-table/financial-table.component';

  @Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, FinancialTableComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
  })
  export class AppComponent {
    title = 'financial-table';
  }
