import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromWarehouses from './reducers/warehouses.reducer';
import * as fromtfrhouses from './reducers/transferOrder.reducer';
import * as fromAccessoryWarehouses from './reducers/warehouseAccessory.reducer';
import * as fromGlassWarehouses from './reducers/warehouseGlass.reducer';
import * as fromConsumableWarehouses from './reducers/warehouseConsumable.reducer';
import { WarehousesEffects } from './effects/warehouses.effects';
import { AccessoryWareHouseEffects } from './effects/warehouseAccessory.effects';
import { ConsumableWareHouseEffects } from './effects/warehouseConsumable.effects';
import { GlassWareHouseEffects } from './effects/warehouseGlass.effects';
import { TransferOrderEffects } from './effects/transferOrder.effects';

import { WarehousesFacade } from './+state/warehouses.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromWarehouses.WAREHOUSES_FEATURE_KEY,
      fromWarehouses.reducer
    ),
    StoreModule.forFeature(
      fromtfrhouses.TRANSFERORDER_FEATURE_KEY,
      fromtfrhouses.reducer
    ),
    StoreModule.forFeature(
      fromAccessoryWarehouses.ACCESSORY_WAREHOUSE_FEATURE_KEY,
      fromAccessoryWarehouses.reducer
    ),
    StoreModule.forFeature(
      fromGlassWarehouses.GLASS_WAREHOUSE_FEATURE_KEY,
      fromGlassWarehouses.reducer
    ),
    StoreModule.forFeature(
      fromConsumableWarehouses.CONSUMABLE_WAREHOUSE_FEATURE_KEY,
      fromConsumableWarehouses.reducer
    ),
    EffectsModule.forFeature([
      WarehousesEffects,
      TransferOrderEffects,
      AccessoryWareHouseEffects,
      ConsumableWareHouseEffects,
      GlassWareHouseEffects
    ]),
  ],
  providers: [WarehousesFacade],
})
export class StoreInventoryModule {}
