import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PlanComponent } from './plan/plan.component';
import { ClassesComponent } from './classes/classes.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TrainersComponent } from './trainers/trainers.component';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component'
import { NothingComponent } from './nothing/nothing.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'header', component: HeaderComponent
}, {
  path: 'plan', component: PlanComponent
}, {
  path: 'classes', component: ClassesComponent
}, {
  path: 'schedule', component: ScheduleComponent
}, {
  path: 'trainers', component: TrainersComponent
}, {
  path: 'blog', component: BlogComponent
}, {
  path: 'signup', component: SignupComponent
}, {
  path: 'footer', component: FooterComponent
}, {
  path: '', component: HomeComponent
}, {
  path: '**', component: NothingComponent
}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
