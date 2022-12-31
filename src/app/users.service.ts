import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { 

  }
  getdata(){
    let url = "https://api.codingninjas.com/api/v3/events?event_category=ALL_EVENTS&event_sub_category=Upcoming&tag_list=&offset=0";

    return this.http.get(url);
  }
  getdata1(){
    let url = "https://api.codingninjas.com/api/v3/events?event_category=ALL_EVENTS&event_sub_category=Archived&tag_list=&offset=0";

    return this.http.get(url);
  }

  getdataWeb(){
    let url = "https://api.codingninjas.com/api/v3/events?event_category=WEBINAR&event_sub_category=Upcoming&tag_list=&offset=0";

    return this.http.get(url);
  }

  getdataWeb1(){
    let url = "https://api.codingninjas.com/api/v3/events?event_category=WEBINAR&event_sub_category=Archived&tag_list=&offset=0";

    return this.http.get(url);
  }
  getdataCE(){
    let url = "https://api.codingninjas.com/api/v3/events?event_category=CODING_EVENT&event_sub_category=Upcoming&tag_list=&offset=0";

    return this.http.get(url);
  }

  getdataCE1(){
    let url = "https://api.codingninjas.com/api/v3/events?event_category=CODING_EVENT&event_sub_category=Archived&tag_list=&offset=0";

    return this.http.get(url);
  }
}
