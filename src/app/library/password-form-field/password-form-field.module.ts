import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

/**@description Angular material.*/
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

/**@description Resources.*/
import { FlexLayoutModule } from '@angular/flex-layout';

/**@description Components.*/
import { PasswordFormFieldComponent } from './password-form-field/password-form-field.component';

@NgModule({
  declarations: [
    PasswordFormFieldComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FlexLayoutModule
  ],
  exports: [
    PasswordFormFieldComponent
  ]
})
export class PasswordFormFieldModule { }
