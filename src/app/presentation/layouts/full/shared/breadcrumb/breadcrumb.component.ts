import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Router, NavigationEnd, ActivatedRoute, Data } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterModule, NgIf,CommonModule],
  templateUrl: './breadcrumb.component.html',
  styleUrls: [],
})
export class AppBreadcrumbComponent {
  // @Input() layout;

  @Input() title: string = '';
  @Input() subtitle: string = '';
  pageInfo: Data | any = Object.create(null);
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
      )
      .pipe(filter((route) => route.outlet === 'primary'))
      .pipe(mergeMap((route) => route.data))
      // tslint:disable-next-line - Disables all
      .subscribe((event) => {
        // tslint:disable-next-line - Disables all
        this.titleService.setTitle(event['title']);
        this.pageInfo = event;
      });
  }
}
