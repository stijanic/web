import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';
import { BlogDataService } from '../blog-data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogPosts: BlogPost[][];
  currentPage: number;
  @ViewChildren('tile') blogPostTileComponent: QueryList<BlogPostTileComponent>;

  constructor(private blogDataService: BlogDataService) { }

  updatePage(newPage: number): void {
    this.currentPage = newPage;
  }

  expandAll(): void {
    this.blogPostTileComponent.forEach(post => post.showFullSummary());
  }

  favAll(): void {
      this.blogPosts[this.currentPage] =
      this.blogPosts[this.currentPage].map(post => ({
        title: post.title,
        summary: post.summary,
        isFav: true
      }));
  }

  ngOnInit(): void {
    this.currentPage = 0;
    this.blogPosts = this.blogDataService.getDate();
  }
}
