import { Component, OnInit } from '@angular/core';
import { UtilServiceService } from '../util-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userData: any;

  constructor(private  commonService : UtilServiceService) { }

  ngOnInit() {

    this.getUserList()
     
  }

  getUserList(){
    this.commonService.getUserList().then(data => {
      this.userData = data
      console.log(this.userData)
    });
  }

}
