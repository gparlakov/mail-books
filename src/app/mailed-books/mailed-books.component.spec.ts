import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailedBooksComponent, SharedBooksService, SharedBook } from './mailed-books.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('MailedBooksComponent', () => {
    let component: MailedBooksComponent;
    let fixture: ComponentFixture<MailedBooksComponent>;
    let serviceMock = jest.fn<SharedBooksService>();

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [{ provide: SharedBooksService, useValue: serviceMock }],
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

    it('should have the title', () => {
        //arrange
        //act
        const testEl = fixture.debugElement.query(By.css("[data-testid='mailed-books-title']")).nativeElement;

        //assert
        expect(testEl).toMatchSnapshot();
    });

    it('should have as many books displayed as the number of items returned by shared books service', () => {
        //arrange
        var oneBook = [new SharedBook("title", "author", "me")];
        serviceMock.mockReturnValue(oneBook);

        //act
        fixture.detectChanges();
        const testEl = fixture.debugElement
            .query(By.css("[data-testid='shared-books-list']")).nativeElement;

        //assert
        expect(testEl).toMatchSnapshot();
    });


});
