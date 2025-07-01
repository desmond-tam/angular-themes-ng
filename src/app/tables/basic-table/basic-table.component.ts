import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/user';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss']
})
export class BasicTableComponent implements OnInit {
  users: IUser[];
  cols: any[];
  totalRecords: number;
  userService:UserService;
  constructor(private service:UserService) {
    this.userService = service;
   }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(response => {
      this.users = response;
      this.totalRecords = this.users.length;
    });
  //   this.users = [
  //     {"name": "The Godfather", "price": 10, "author": "Mario Puzo"},
  //     {"name": "The Fellowship of the Ring", "price": 15, "author": "J.R.R. Tolkien"},
  //     {"name": "Harry Potter and the Deathly Hallows", "price": 20, "author": "J.K. Rowling  "},
  //     {"name": "book1", "price": 120.12, "author": "author1  "},
  //     {"name": "book2", "price": 20.44, "author": "author2  "},
  //     {"name": "book3", "price": 20.68, "author": "author3  "},
  //     {"name": "book4", "price": 20.45, "author": "author4  "},
  //     {"name": "book5", "price": 120, "author": "author5  "},
  //     {"name": "book6", "price": 30, "author": "author6  "},
  //     {"name": "book7", "price": 32, "author": "author7  "},
  //     {"name": "book8", "price": 33, "author": "author8  "},
  //     {"name": "book9", "price": 34, "author": "author9  "},
  //     {"name": "book10", "price": 35, "author": "author10  "},
  //     {"name": "book11", "price": 39, "author": "author11  "},
  //     {"name": "book12", "price": 10, "author": "author12  "},
  //     {"name": "book13", "price": 12, "author": "author13  "},
  //     {"name": "book14", "price": 14, "author": "author14  "},
  //     {"name": "book15", "price": 15, "author": "author15  "},
  //     {"name": "book16", "price": 16, "author": "author16  "},
  //     {"name": "book17", "price": 17, "author": "author17  "},
  //     {"name": "book18", "price": 18, "author": "author18  "},
  //     {"name": "book19", "price": 19, "author": "author19  "},
  //     {"name": "book20", "price": 21, "author": "author20  "},
  //     {"name": "book1", "price": 22, "author": "author1  "},
  //     {"name": "book2", "price": 23, "author": "author2  "},
  //     {"name": "book3", "price": 24, "author": "author3  "},
  //     {"name": "book4", "price": 26, "author": "author4  "},
  //     {"name": "book5", "price": 27, "author": "author5  "},
  //     {"name": "book6", "price": 28, "author": "author6  "},
  //     {"name": "book7", "price": 29.55, "author": "author7  "},
  //     {"name": "book8", "price": 210, "author": "author8  "},
  //     {"name": "book9", "price": 220, "author": "author9  "},
  //     {"name": "book10", "price": 230, "author": "author10  "},
  //     {"name": "book11", "price": 240, "author": "author11  "},
  //     {"name": "book12", "price": 250, "author": "author12  "},
  //     {"name": "book13", "price": 260, "author": "author13  "},
  //     {"name": "book14", "price": 270, "author": "author14  "},
  //     {"name": "book15", "price": 280, "author": "author15  "},
  //     {"name": "book16", "price": 290, "author": "author16  "},
  //     {"name": "book17", "price": 230, "author": "author17  "},
  //     {"name": "book18", "price": 220, "author": "author18  "},
  //     {"name": "book19", "price": 320, "author": "author19  "},
  //     {"name": "book20", "price": 420, "author": "author20  "},
  //     {"name": "book21", "price": 520, "author": "author1  "},
  //     {"name": "book22", "price": 620, "author": "author2  "},
  //     {"name": "book23", "price": 720, "author": "author3  "},
  //     {"name": "book24", "price": 820, "author": "author4  "},
  //     {"name": "book25", "price": 920, "author": "author5  "},
  //     {"name": "book26", "price": 1020, "author": "author6  "},
  //     {"name": "book27", "price": 1120, "author": "author7  "},
  //     {"name": "book28", "price": 1220, "author": "author8  "},
  //     {"name": "book29", "price": 1320, "author": "author9  "},
  //     {"name": "book310", "price": 15.28, "author": "author10  "},
  //     {"name": "book311", "price": 10.05, "author": "author11  "},
  //     {"name": "book312", "price": 80.24, "author": "author12  "},
  //     {"name": "book313", "price": 60.45, "author": "author13  "},
  //     {"name": "book314", "price": 12.55, "author": "author14  "},
  //     {"name": "book315", "price": 18.65, "author": "author15  "},
  //     {"name": "book316", "price": 25.58, "author": "author16  "},
  //     {"name": "book317", "price": 12.56, "author": "author17  "},
  //     {"name": "book318", "price": 18.55, "author": "author18  "},
  //     {"name": "book319", "price": 620, "author": "author19  "},
  //     {"name": "book320", "price": 820.45, "author": "author20  "}
  // ];


    this.cols = [
        { field: 'name', header: 'Name' },
        { field: 'price', header: 'Price' },
        { field: 'author', header: 'Author' },
    ];
  }

}




