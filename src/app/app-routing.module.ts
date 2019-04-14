import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AddUserComponent } from "./angular-form/add-user/add-user.component";
import { DangNhapComponent } from "./angular-form/dang-nhap/dang-nhap.component";
import { DangKiComponent } from "./angular-form/dang-ki/dang-ki.component";
const appRoute: Routes = [
  // {path:"**",redirectTo:"form",pathMatch:'full'},
  { path: "form", loadChildren: './angular-form/angular-form.module#AngularFormModule' },
  { path: "**", redirectTo: "form", pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoute)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
