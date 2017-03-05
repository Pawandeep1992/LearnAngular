import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { BookComponent } from './book.component';
import { BookDetailComponent } from './book-detail.component';
import { BookPopupComponent } from './book-dialog.component';
import { BookDeletePopupComponent } from './book-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class BookResolvePagingParams implements Resolve<any> {

  constructor(private paginationUtil: PaginationUtil) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      let page = route.queryParams['page'] ? route.queryParams['page'] : '1';
      let sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
      return {
          page: this.paginationUtil.parsePage(page),
          predicate: this.paginationUtil.parsePredicate(sort),
          ascending: this.paginationUtil.parseAscending(sort)
    };
  }
}

export const bookRoute: Routes = [
  {
    path: 'book',
    component: BookComponent,
    resolve: {
      'pagingParams': BookResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Books'
    }
  }, {
    path: 'book/:id',
    component: BookDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Books'
    }
  }
];

export const bookPopupRoute: Routes = [
  {
    path: 'book-new',
    component: BookPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Books'
    },
    outlet: 'popup'
  },
  {
    path: 'book/:id/edit',
    component: BookPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Books'
    },
    outlet: 'popup'
  },
  {
    path: 'book/:id/delete',
    component: BookDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Books'
    },
    outlet: 'popup'
  }
];
