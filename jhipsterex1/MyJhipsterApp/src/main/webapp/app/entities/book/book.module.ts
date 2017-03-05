import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MyJhipsterAppSharedModule } from '../../shared';

import {
    BookService,
    BookPopupService,
    BookComponent,
    BookDetailComponent,
    BookDialogComponent,
    BookPopupComponent,
    BookDeletePopupComponent,
    BookDeleteDialogComponent,
    bookRoute,
    bookPopupRoute,
    BookResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...bookRoute,
    ...bookPopupRoute,
];

@NgModule({
    imports: [
        MyJhipsterAppSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        BookComponent,
        BookDetailComponent,
        BookDialogComponent,
        BookDeleteDialogComponent,
        BookPopupComponent,
        BookDeletePopupComponent,
    ],
    entryComponents: [
        BookComponent,
        BookDialogComponent,
        BookPopupComponent,
        BookDeleteDialogComponent,
        BookDeletePopupComponent,
    ],
    providers: [
        BookService,
        BookPopupService,
        BookResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyJhipsterAppBookModule {}
