import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';

@Component({
    selector: 'mbs-mailed-books',
    templateUrl: './mailed-books.component.html',
    styleUrls: ['./mailed-books.component.scss']
})
export class MailedBooksComponent implements OnInit {

    @ViewChild('books')
    private books: MatSelectionList;

    constructor() { }

    ngOnInit() {
    }

    selectAll() {
        this.books.selectAll();
    }
}
