import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailedBooksComponent } from './mailed-books.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MailedBooksComponent', () => {
  let component: MailedBooksComponent;
  let fixture: ComponentFixture<MailedBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailedBooksComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    //   imports: [MatButtonModule, MatListModule]
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
