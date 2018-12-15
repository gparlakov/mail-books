import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailedBooksComponent } from './mailed-books.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

describe('MailedBooksComponent', () => {
  let component: MailedBooksComponent;
  let fixture: ComponentFixture<MailedBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailedBooksComponent ],
      imports: [MatButtonModule, MatListModule]
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
