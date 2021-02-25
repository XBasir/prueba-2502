import { Component, OnInit } from '@angular/core';
import users from '../fake-db/data.json'

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  userList:{id: Number, email: String, first_name: String, last_name: String, n_document: String, phone_number: String}[]=users;
  constructor() { }

  ngOnInit(): void {
    this.showUsersEmail();
  }


  showUsersEmail(): void{
    console.log("Emails:")
    this.userList.forEach((user: any) => {
      console.log(user.email);
    });
  }

}
