import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  items: { description: string; icon: string }[] = [];
  visibleItems: { description: string; icon: string }[] = [];
  activeIndex: number = 0;

  constructor(private service: NewsService) { }

  async ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.service.getNews().subscribe(result => {
      this.items = result.find((s: any) => s.key === "news").items;
      this.updateVisibleItems();
    })
  }

  async updateVisibleItems() {
    this.visibleItems =
      this.items.slice(this.activeIndex, this.activeIndex + 1);
  }

  moveLeft() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
      this.updateVisibleItems();
    }
  }

  moveRight() {
    if (this.activeIndex < this.items.length - 1) {
      this.activeIndex++;
      this.updateVisibleItems();
    }
  }

}
