import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, StoreModule } from '@ngrx/store';
import * as AccessoryReducer from './reducers/accessory.reducer';
import * as ConsumableReducer from './reducers/consumable.reducer';
import * as GlassReducer from './reducers/glass.reducer';
import * as ServiceReducer from './reducers/servicesConfig.reducer';
import * as SupplyReducer from "./reducers/supply.reducer";
import { AccessoryEffects } from './effects/accessory.effects';
import { ConsumableEffects } from './effects/consumable.effects';
import { GlassEffects } from './effects/glass.effects';
import { EffectsModule } from '@ngrx/effects';
import { AlertEffects } from './effects/alert.effects';
import { ServiceEffects } from './effects/servicesConfig.effects';
import { ToastrModule } from 'ngx-toastr';
import { CoreProductModule } from '@tanglass-erp/core/product';


@NgModule({
  imports: [
    CommonModule,
    CoreProductModule,
    StoreModule.forFeature(
      AccessoryReducer.ACCESSORY_FEATURE_KEY,
      AccessoryReducer.reducer,

    ),
    StoreModule.forFeature(
      ConsumableReducer.CONSUMABLE_FEATURE_KEY,
      ConsumableReducer.reducer,

    ),
    StoreModule.forFeature(
      GlassReducer.GLASS_FEATURE_KEY,
      GlassReducer.reducer,

    ),
    StoreModule.forFeature(
      ServiceReducer.SERVICE_CONFIG_FEATURE_KEY,
      ServiceReducer.reducer,

    ),
    StoreModule.forFeature(
      SupplyReducer.SUPPLY_FEATURE_KEY,
      SupplyReducer.reducer,

    ),
    EffectsModule.forFeature([
      AccessoryEffects,
      ConsumableEffects,
      GlassEffects,
      AlertEffects,
      ServiceEffects
    ]),
    ToastrModule.forRoot(),
  ],
})
export class StoreProductModule {}
