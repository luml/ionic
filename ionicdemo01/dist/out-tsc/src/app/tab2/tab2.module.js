var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
// 不用引入，根模块已经引入了
// import {ActionsheetComponent} from '../actionsheet/actionsheet.component';
var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = __decorate([
        NgModule({
            imports: [
                IonicModule,
                CommonModule,
                FormsModule,
                RouterModule.forChild([{ path: '', component: Tab2Page }])
                // ActionsheetComponent
            ],
            declarations: [Tab2Page]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());
export { Tab2PageModule };
//# sourceMappingURL=tab2.module.js.map