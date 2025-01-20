import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchTodoComponent } from './fetch-todo.component';

describe('FetchTodoComponent', () => {
  let component: FetchTodoComponent;
  let fixture: ComponentFixture<FetchTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
