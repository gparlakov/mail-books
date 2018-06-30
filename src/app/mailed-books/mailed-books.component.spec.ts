import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailedBooksComponent } from './mailed-books.component';

describe('MailedBooksComponent', () => {
  let component: MailedBooksComponent;
  let fixture: ComponentFixture<MailedBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailedBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
