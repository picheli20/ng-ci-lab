import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule as CoreSharedModule } from 'core/modules/shared/shared.module';

import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FooterComponent,
  ],
  exports: [
    FooterComponent,
  ],
})
export class SharedModule extends CoreSharedModule { }
