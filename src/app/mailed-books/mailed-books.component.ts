import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';

@Component({
    selector: 'mbs-mailed-books',
    templateUrl: './mailed-books.component.html',
    styleUrls: ['./mailed-books.component.scss']
})
export class MailedBooksComponent implements OnInit {

    @ViewChild('books')
    private books: MatSelectionList;

    bookItems: SharedBook[];

    constructor(private sharedBooks: SharedBooksService) { }

    ngOnInit() {
        this.bookItems = this.sharedBooks.getBy();
    }

    selectAll() {
        this.books.selectAll();
    }
}

export class SharedBook {
    constructor(
        public readonly title: string,
        public readonly author: string,
        public readonly sharedBy: string,
    ){

    }
}

@Injectable()
export class SharedBooksService {
    getBy(): SharedBook[] {
        throw new Error("Method not implemented.");
    }

}
