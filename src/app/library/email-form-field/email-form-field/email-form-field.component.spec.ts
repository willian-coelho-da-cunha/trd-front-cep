import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { EmailFormFieldComponent } from './email-form-field.component';

describe('Email form field component ... ', () => {

  let component: EmailFormFieldComponent;
  let fixture: ComponentFixture<EmailFormFieldComponent>;

  beforeEach(
    async(
      () => {
        TestBed.configureTestingModule({
          declarations: [
            EmailFormFieldComponent
          ],
          imports: [
            CommonModule,
            ReactiveFormsModule,
            MatInputModule,
            MatFormFieldModule
          ]
        })
        .compileComponents();
      }
    )
  );

  beforeEach(
    () => {
      fixture = TestBed.createComponent(EmailFormFieldComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }
  );

  afterEach(
    () => {
      fixture.nativeElement.remove();
      fixture.destroy();
    }
  );

  it('should be created.',
    () => {
      expect(component).toBeTruthy();
    }
  );
});
