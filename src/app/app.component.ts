
import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { KeyValue } from '@angular/common';
import { MatTabChangeEvent } from '@angular/material/tabs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CNWebsite';

  allupcoming: any[] = [];
  name: any[] = [];
  allarchieved: any[] = [];
  webupcoming: any[] = [];
  webrecorded: any[] = [];
  ceupcoming: any[] = [];
  cearchieved: any[] = [];

  img: Array<String> = [];


  constructor(private user: UsersService) {

  }


  ngOnInit(): void {
    this.user.getdata().subscribe(datas =>
      Object(Object(datas).data).events.forEach((element: any) => {
        this.allupcoming.push(element)
      }
      )

    );

  }

  onAllEvents(event: MatTabChangeEvent) {
    const tab = event.tab.textLabel;
    console.log(tab);
    if (tab === "Upcoming") {
      this.user.getdata().subscribe(datas =>
        Object(Object(datas).data).events.forEach((element: any) => {
          this.allupcoming.push(element)
        }
        )

      );
    }
    if (tab === "Archieved") {
      this.user.getdata1().subscribe(datas =>
        Object(Object(datas).data).events.forEach((element: any) => {
          this.allarchieved.push(element)
        }
        )

      );
    }
  }

  onWebinars(event: MatTabChangeEvent) {
    const tab = event.tab.textLabel;
    if (tab === "Upcoming") {
      this.user.getdataWeb().subscribe(datas =>
        Object(Object(datas).data).events.forEach((element: any) => {
          this.webupcoming.push(element)
         
        }
        )

      );
    }
    if (tab === "Recorded") {
      this.user.getdataWeb1().subscribe(datas =>
        Object(Object(datas).data).events.forEach((element: any) => {
          this.webrecorded.push(element)
        }
        )

      );
    }
  }

  onCE(event: MatTabChangeEvent) {
    const tab = event.tab.textLabel;
    if (tab === "Upcoming") {
      this.user.getdataCE().subscribe(datas =>
        Object(Object(datas).data).events.forEach((element: any) => {
          this.ceupcoming.push(element)
         
        }
        )

      );
    }
    if (tab === "Archieved") {
      this.user.getdataCE1().subscribe(datas =>
        Object(Object(datas).data).events.forEach((element: any) => {
          this.cearchieved.push(element)
        }
        )

      );
    }
  }


}

