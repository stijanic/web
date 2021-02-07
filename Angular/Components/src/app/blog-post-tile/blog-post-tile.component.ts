import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss']
})
export class BlogPostTileComponent implements OnInit {
	title: string;
	summary: string;

  constructor() { }

  ngOnInit(): void {
  	this.title = "Blog Title";
  	this.summary= "Blog Post Summary";
  }
}
