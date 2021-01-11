import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UtilServiceService } from '../util-service.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	userData: any;
	exampleModal: any;
	myModal: any;
	//@ViewChild('basicModal', { static: true }) basicModal: ModalDirective;
	closeResult = '';
	constructor(private commonService: UtilServiceService,private modalService: NgbModal) { }

	ngOnInit() {

		this.getUserList()

	}

	getUserList() {
		this.commonService.getUserList().then(data => {
			this.userData = data
			console.log(this.userData)
		});
	}
	open(content: any) {
		this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
		  this.closeResult = `Closed with: ${result}`;
		}, (reason) => {
		  this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
	  }
	  private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
		  return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
		  return 'by clicking on a backdrop';
		} else {
		  return `with: ${reason}`;
		}
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
