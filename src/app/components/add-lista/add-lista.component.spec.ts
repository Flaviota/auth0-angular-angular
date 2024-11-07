import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListaComponent } from './add-lista.component';

describe('AddListaComponent', () => {
  let component: AddListaComponent;
  let fixture: ComponentFixture<AddListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
