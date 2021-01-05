import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { UtilServiceService } from '../util-service.service';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
	dataSource = ELEMENT_DATA;
	userData: any;
	exampleModal: any;
	myModal: any;
	//@ViewChild('basicModal', { static: true }) basicModal: ModalDirective;

	constructor(private commonService: UtilServiceService) { }

	ngOnInit() {

		this.getUserList()

	}

	getUserList() {
		this.commonService.getUserList().then(data => {
			this.userData = data
			console.log(this.userData)
		});
	}

	editUser(editUserData: NgForm){
		console.log(editUserData.value)
		let	obj = {
			name: editUserData.value.name,
			email : editUserData.value.email,
			gender : editUserData.value.gender,
			status : editUserData.value.status

		}
		console.log('obj Data ',obj)
		this.commonService.updateUserData(obj).then(data => {
			console.log('return data ',data)
			this.getUserList();
		})

	}
}
