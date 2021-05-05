import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreCommonModule } from '@tanglass-erp/core/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromShortCompany from './+state/short-company.reducer';
import * as fromShortSalePoint from './+state/short-salePoint.reducer';
import { ShortCompanyEffects } from './+state/short-company.effects';
import { ShortSalePointEffects } from './+state/short-salePoint.effects';
import { SharedFacade } from './+state/shared.facade';
import * as fromShortWarehouse from './+state/short-warehouse.reducer';
import { ShortWarehouseEffects } from './+state/short-warehouse.effects';
import * as fromWarehouseSubstance from './+state/warehouse-glass.reducer';
import { WarehouseSubstanceEffects } from './+state/warehouse-glass.effects';
import * as fromShortProduct from './+state/short-product.reducer';
import { ShortProductEffects } from './+state/short-product.effects';
import * as fromShortProvider from './+state/short-provider.reducer';
import { ShortProviderEffects } from './+state/short-provider.effects';
import * as fromWarehouseAccessory from './+state/warehouse-accessory.reducer';
import { WarehouseAccessoryEffects } from './+state/warehouse-accessory.effects';

@NgModule({
  imports: [
    CommonModule,
    CoreCommonModule,
    StoreModule.forFeature(
      fromShortCompany.SHORTCOMPANY_FEATURE_KEY,
      fromShortCompany.reducer
    ),
    EffectsModule.forFeature([ShortCompanyEffects]),
    StoreModule.forFeature(
      fromShortWarehouse.SHORTWAREHOUSE_FEATURE_KEY,
      fromShortWarehouse.reducer
    ),
    EffectsModule.forFeature([ShortWarehouseEffects]),
    StoreModule.forFeature(
      fromWarehouseSubstance.WAREHOUSE_GLASS_FEATURE_KEY,
      fromWarehouseSubstance.reducer
    ),
    StoreModule.forFeature(
      fromShortSalePoint.SHORTSALEPOINT_FEATURE_KEY,
      fromShortSalePoint.reducer
    ),
    EffectsModule.forFeature([
      WarehouseSubstanceEffects,
      ShortSalePointEffects,
    ]),
    StoreModule.forFeature(
      fromShortProduct.SHORT_PRODUCT_FEATURE_KEY,
      fromShortProduct.reducer
    ),
    EffectsModule.forFeature([ShortProductEffects]),
    StoreModule.forFeature(
      fromShortProvider.SHORT_PROVIDER_FEATURE_KEY,
      fromShortProvider.reducer
    ),
    EffectsModule.forFeature([ShortProviderEffects]),
    StoreModule.forFeature(
      fromWarehouseAccessory.WAREHOUSE_ACCESSORY_FEATURE_KEY,
      fromWarehouseAccessory.reducer
    ),
    EffectsModule.forFeature([WarehouseAccessoryEffects]),
  ],
  providers: [
    SharedFacade
  ],
})
export class StoreSharedModule {}
