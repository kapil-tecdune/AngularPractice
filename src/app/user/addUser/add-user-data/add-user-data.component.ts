import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UtilServiceService } from 'src/app/util-service.service';

@Component({
  selector: 'app-add-user-data',
  templateUrl: './add-user-data.component.html',
  styleUrls: ['./add-user-data.component.css']
})
export class AddUserDataComponent implements OnInit {
  

  constructor(private commonService : UtilServiceService) { }

  ngOnInit(): void {
    
  }

  addUser(addUserDataForm : NgForm){
    let gender : Boolean = false;

    if(addUserDataForm.value.gender == "male"){
        gender = true
    }
      console.log("data ",addUserDataForm.value)
      let obj =  {
        name : addUserDataForm.value.name,
        email : addUserDataForm.value.email,
        status : addUserDataForm.value.status,
        gender : gender
      }
     this.commonService.saveUserData(obj).then(data => {
       console.log(data)
       
     })

  }

}
