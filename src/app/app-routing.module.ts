import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartMeetingComponent } from './components/start-meeting/start-meeting.component';

const routes: Routes = [
  { path: '', component: StartMeetingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
