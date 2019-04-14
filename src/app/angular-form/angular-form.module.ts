import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { DangKiComponent } from './dang-ki/dang-ki.component';
import { FormRoutingModule } from './form-routing.module';
import {FormsModule} from "@angular/forms"
@NgModule({
  declarations: [AddUserComponent, DangNhapComponent, DangKiComponent],
  imports: [
    CommonModule,FormRoutingModule,FormsModule
  ],
  exports:[AddUserComponent, DangNhapComponent, DangKiComponent]
})
export class AngularFormModule { }
