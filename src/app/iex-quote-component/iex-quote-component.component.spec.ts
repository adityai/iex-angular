import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IexQuoteComponentComponent } from './iex-quote-component.component';

describe('IexQuoteComponentComponent', () => {
  let component: IexQuoteComponentComponent;
  let fixture: ComponentFixture<IexQuoteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IexQuoteComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IexQuoteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
