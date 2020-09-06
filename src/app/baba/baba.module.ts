import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BabaRoutingModule } from './baba-routing.module';
import { PersonalComponent } from './personal/personal.component';


@NgModule({
  declarations: [PersonalComponent],
  imports: [
    CommonModule,
    BabaRoutingModule
  ],
  exports:[PersonalComponent]
})
export class BabaModule { }
