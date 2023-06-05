import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@pages/home/home.component').then(mod => mod.HomeComponent)
  },
  {
    path: 'profile/:profileId',
    loadChildren: () =>
      import('@pages/profile/profile.component').then(
        mod => mod.ProfileComponent
      )
  },
  {
    path: '**',
    loadChildren: () =>
      import('@pages/page-not-found/page-not-found.component').then(
        mod => mod.PageNotFoundComponent
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
