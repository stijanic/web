import { Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from "../truncate.pipe";

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss'],
  encapsulation: ViewEncapsulation.Emulated, // ViewEncapsulation.Emulated is the default value: the view is encapsulated and CSS remains local to the component
  //changeDetection: ChangeDetectionStrategy.OnPush // Update done only when top reference is changed
})
export class BlogPostTileComponent implements OnInit {
	@Input('post') post: BlogPost;
	fullSummary: string;

  constructor(private truncatePipe: TruncatePipe) {
  }

  showFullSummary(): void {
  	this.post.summary = this.fullSummary;
		console.log(this.fullSummary);
  }

  toggleFav() {
    this.post.isFav = !this.post.isFav;
  }

  ngOnInit(): void {
		this.fullSummary = this.post.summary;
  	this.post.summary = this.truncatePipe.transform(this.post.summary, 30);
  }
}
