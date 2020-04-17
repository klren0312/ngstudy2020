import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyLifeComponent } from './my-life/my-life.component'
import { MyTestComponent } from './my-test/my-test.component'

const routes: Routes = [
  {
    path: 'mylife', component: MyLifeComponent
  },
  {
    path: 'mytest', component: MyTestComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
