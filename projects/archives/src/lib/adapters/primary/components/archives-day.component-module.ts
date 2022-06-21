import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchivesDayComponent } from './archives-day.component';
import { FormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule,FormsModule],
  	declarations: [ArchivesDayComponent],
  	providers: [],
  	exports: [ArchivesDayComponent] })
export class ArchivesDayComponentModule {
}
