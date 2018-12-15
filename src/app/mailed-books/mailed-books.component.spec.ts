import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailedBooksComponent } from './mailed-books.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MailedBooksComponent', () => {
    let component: MailedBooksComponent;
    let fixture: ComponentFixture<MailedBooksComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MailedBooksComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MailedBooksComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(fixture.elementRef.nativeElement).toMatchSnapshot();
    });
});
