import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfermeirosComponent } from './enfermeiros.component';

describe('EnfermeirosComponent', () => {
  let component: EnfermeirosComponent;
  let fixture: ComponentFixture<EnfermeirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnfermeirosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnfermeirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
