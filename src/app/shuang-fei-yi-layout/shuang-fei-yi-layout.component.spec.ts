import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuangFeiYiLayoutComponent } from './shuang-fei-yi-layout.component';

describe('ShuangFeiYiLayoutComponent', () => {
  let component: ShuangFeiYiLayoutComponent;
  let fixture: ComponentFixture<ShuangFeiYiLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShuangFeiYiLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShuangFeiYiLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
