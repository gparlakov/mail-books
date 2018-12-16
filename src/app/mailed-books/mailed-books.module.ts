import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailedBooksComponent } from './mailed-books.component';
import { SharedBooksService } from "./shared-books.service";
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from "@angular/material/button";
import { ExplorePipe } from './explore.pipe';

@NgModule({
    imports: [
        CommonModule,
        MatListModule,
        MatButtonModule
    ],
    providers: [SharedBooksService],
    declarations: [MailedBooksComponent, ExplorePipe],
    exports: [MailedBooksComponent]
})
export class MailedBooksModule { }
