import { createAction, props } from '@ngrx/store';
import { ShortFeauture } from '@tanglass-erp/core/common';



/****************************************************************** */
/*****LOAD SHORT COMPANIES ** */
/****************************************************************** */

export const loadShortCompany = createAction(
  '[ShortCompany] Load ShortCompany'
);

export const loadShortCompanySuccess = createAction(
  '[ShortCompany] Load ShortCompany Success',
  props<{ shortCompany: ShortFeauture[] }>()
);

export const loadShortCompanyFailure = createAction(
  '[ShortCompany] Load ShortCompany Failure',
  props<{ error: any }>()
);
