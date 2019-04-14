import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dang-ki',
  templateUrl: './dang-ki.component.html',
  styleUrls: ['./dang-ki.component.scss']
})
export class DangKiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @ViewChild("formAddUser") formAddUser:NgForm;

  // DSUser:[] <NgForm> ;

  themNguoiDung(user:NgForm):void
  {
    // console.log(user);
    if(this.formAddUser.valid)
    {
      console.log(this.formAddUser.value);
      this.formAddUser.reset();
      // this.formAddUser.resetForm();

      return;
    }
    alert("loi roi");
    // this.DSUser.push(user.value);
  }
}
