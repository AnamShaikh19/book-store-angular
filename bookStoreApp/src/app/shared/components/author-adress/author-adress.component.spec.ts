import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorAdressComponent } from './author-adress.component';

describe('AuthorAdressComponent', () => {
  let component: AuthorAdressComponent;
  let fixture: ComponentFixture<AuthorAdressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorAdressComponent]
    });
    fixture = TestBed.createComponent(AuthorAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
