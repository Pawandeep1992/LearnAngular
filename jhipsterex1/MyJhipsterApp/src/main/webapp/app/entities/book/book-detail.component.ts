import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from './book.model';
import { BookService } from './book.service';

@Component({
    selector: 'jhi-book-detail',
    templateUrl: './book-detail.component.html'
})
export class BookDetailComponent implements OnInit, OnDestroy {

    book: Book;
    private subscription: any;

    constructor(
        private bookService: BookService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.bookService.find(id).subscribe(book => {
            this.book = book;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
