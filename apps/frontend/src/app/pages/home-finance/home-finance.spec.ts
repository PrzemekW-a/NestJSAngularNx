import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeFinance } from './home-finance';

describe('HomeFinance', () => {
  let component: HomeFinance;
  let fixture: ComponentFixture<HomeFinance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeFinance],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeFinance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
