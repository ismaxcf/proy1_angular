import { Component, OnInit } from '@angular/core';
import{MessageService} from '../message.service'
import{DataService} from '../data.service';
//import { Data } from '@angular/router';
import{Post}from'../Post';
@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.css']
})
export class TestAPIComponent implements OnInit {
  constructor(private messageService:MessageService, private dataService: DataService) { }
  posts: Post[];
  getPosts(){
    console.log("Working on it!! ;D");
    this.dataService.getData("https://jsonplaceholder.typicode.com/posts").subscribe(data => {
      console.log(data);
      this.posts = data;
      console.log(this.posts);
    })
    
  }
  ngOnInit() {
    this.getPosts();
  }

}
