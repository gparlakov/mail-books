import { Injectable } from '@angular/core';
import { SharedBook } from './mailed-books.component';

@Injectable()
export class SharedBooksService {

    getBy(): SharedBook[] {
        // throw new Error("Method not implemented.");
        return [];
    }
}
