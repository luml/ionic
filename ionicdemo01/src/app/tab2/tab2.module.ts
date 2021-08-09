import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
// 不用引入，根模块已经引入了
// import {ActionsheetComponent} from '../actionsheet/actionsheet.component';

@NgModule({ 
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
    // ActionsheetComponent
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
