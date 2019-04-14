import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.scss']
})
export class DangNhapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  DangNhapTaiKhoan(user:NgForm){
    console.log(user.value);


  }

}
