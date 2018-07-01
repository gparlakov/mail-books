import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailedBooksComponent } from './mailed-books.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule, MatButton } from "@angular/material/button";
import { ExplorePipe } from './explore.pipe';

@NgModule({
    imports: [
        CommonModule,
        MatListModule,
        MatButtonModule
    ],
    declarations: [MailedBooksComponent, ExplorePipe],
    exports: [MailedBooksComponent]
})
export class MailedBooksModule { }
