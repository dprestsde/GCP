import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseServAccountComponent } from './use-serv-account.component';

describe('UseServAccountComponent', () => {
  let component: UseServAccountComponent;
  let fixture: ComponentFixture<UseServAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseServAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseServAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
