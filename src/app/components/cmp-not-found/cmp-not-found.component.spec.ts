import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpNotFoundComponent } from './cmp-not-found.component';

describe('CmpNotFoundComponent', () => {
  let component: CmpNotFoundComponent;
  let fixture: ComponentFixture<CmpNotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmpNotFoundComponent]
    });
    fixture = TestBed.createComponent(CmpNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
