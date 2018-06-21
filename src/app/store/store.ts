import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

// we want to group together the state and update methods so:
// tslint:disable:member-ordering
export class Store implements UserStore, BooksStore {

  private store$: BehaviorSubject<any> = new BehaviorSubject({});

  user$: Observable<User> = this.store$.pipe(map(s => s.user));
  setUser(user: User) {
    const nextState = { ...this.store$.value, user };
    this.store$.next(nextState);
  }

  books$: Observable<Book[]> = this.store$.pipe(map(s => s.projects));
  setBooks(projects: Book[]) {
    const nextState = { ...this.store$.value, projects };
    this.store$.next(nextState);
  }
}

export class User {
  name: string;
}

export abstract class UserStore {
  abstract user$: Observable<User>;
  abstract setUser(user: User);
}

export class Book {
  id: string;
  name: string;
  author: string;
}

export abstract class BooksStore {
  abstract books$: Observable<Book[]>;

  abstract setBooks(projects: Book[]);
}
