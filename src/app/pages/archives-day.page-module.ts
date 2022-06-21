import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponentModule } from '@static-element';
import { ArchivesDayComponentModule, FirebaseArchivesServiceModule } from '@archives';
import { ArchivesDayPage } from './archives-day.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: ArchivesDayPage,
        }
      ]),
  NavbarComponentModule,
  ArchivesDayComponentModule,
  FirebaseArchivesServiceModule,
],
  	declarations: [ArchivesDayPage],
  	providers: [],
  	exports: [] })
export class ArchivesDayPageModule {
}
