import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliksComponent } from './cliks.component';

describe('CliksComponent', () => {
  let component: CliksComponent;
  let fixture: ComponentFixture<CliksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CliksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CliksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
