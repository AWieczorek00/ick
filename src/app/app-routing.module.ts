import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyMealsPageModule } from './pages/daily-meals.page-module';
import { NewMealPageModule } from './pages/new-meal.page-module';
import { AccountPageModule } from './pages/account.page-module';
import { ArchivesDayPageModule } from './pages/archives-day.page-module';

const routes: Routes = [{
  path: '',
  loadChildren: () => DailyMealsPageModule
},
  { 
        path: 'new-meal', 
        loadChildren: () => NewMealPageModule
      },
  { 
        path: 'account', 
        loadChildren: () => AccountPageModule
      },
  { 
        path: 'archivesDay', 
        loadChildren: () => ArchivesDayPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
