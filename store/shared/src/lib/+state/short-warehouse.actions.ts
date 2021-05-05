import { createAction, props } from '@ngrx/store';
import { ShortFeauture } from '@tanglass-erp/core/common';

export const loadShortWarehouse = createAction(
  '[ShortWarehouse] Load ShortWarehouse'
);

export const loadShortWarehouseSuccess = createAction(
  '[ShortWarehouse] Load ShortWarehouse Success',
  props<{ shortWarehouse: ShortFeauture[] }>()
);

export const loadShortWarehouseFailure = createAction(
  '[ShortWarehouse] Load ShortWarehouse Failure',
  props<{ error: any }>()
);
