import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatConfigComponent } from './chat-config.component';

describe('ChatConfigComponent', () => {
  let component: ChatConfigComponent;
  let fixture: ComponentFixture<ChatConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
