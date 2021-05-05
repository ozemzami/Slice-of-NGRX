import { createAction, props } from '@ngrx/store';
import { ShortFeauture } from '@tanglass-erp/core/common';



/****************************************************************** */
/*****LOAD SHORT SALEPOINTS ** */
/****************************************************************** */

export const loadShortSalePoint = createAction(
  '[ShortSalePoint] Load ShortSalePoint'
);

export const loadShortSalePointSuccess = createAction(
  '[ShortSalePoint] Load ShortSalePoint Success',
  props<{ shortSalePoint: ShortFeauture[] }>()
);

export const loadShortSalePointFailure = createAction(
  '[ShortSalePoint] Load ShortSalePoint Failure',
  props<{ error: any }>()
);
