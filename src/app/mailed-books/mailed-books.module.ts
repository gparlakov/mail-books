import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailedBooksComponent } from './mailed-books.component';
import { MatListModule } from '@angular/material/list';
@NgModule({
    imports: [
        CommonModule,
        MatListModule
    ],
    declarations: [MailedBooksComponent],
    exports: [MailedBooksComponent]
})
export class MailedBooksModule { }
