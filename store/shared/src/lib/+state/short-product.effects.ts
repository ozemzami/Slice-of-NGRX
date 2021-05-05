import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromShortProduct from './short-product.reducer';
import { ShortFeatureService } from '@tanglass-erp/core/common';
import * as ShortProductActions from './short-product.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ShortProductEffects {
  loadShortProduct$ = createEffect(() =>{
    return this.actions$.pipe(
      ofType(ShortProductActions.loadShortProduct),
      mergeMap(() =>
        this.companieService.getShortSubstance().pipe(
          map((data) =>
             ShortProductActions.loadShortProductSuccess({ shortProduct: data })
          ),
          catchError((error) =>
            of(ShortProductActions.loadShortProductFailure({ error }))
          )
        )
      )
    )
  });

  constructor(private actions$: Actions,
              private companieService: ShortFeatureService) {}
}
