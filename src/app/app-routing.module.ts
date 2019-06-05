import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorListComponent } from './tutor-list/tutor-list.component';

const routes: Routes = [
  {path: '', component: TutorListComponent},
  {path: '**', component: TutorListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
