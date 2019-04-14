import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router"
import { AddUserComponent } from './add-user/add-user.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { DangKiComponent } from './dang-ki/dang-ki.component';
const formRouting:Routes=[
 {path:'',component:AddUserComponent,children:[
    {
      path:"signin",component:DangNhapComponent,
    },
    {
      path:"signup",component:DangKiComponent,
    },
  ]},
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(formRouting)
  ],
  exports:[RouterModule]
})
export class FormRoutingModule { }
