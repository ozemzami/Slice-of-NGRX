import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as ShortSalePointActions from './short-salePoint.actions';
import { ShortFeatureService } from '@tanglass-erp/core/common';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ShortSalePointEffects {
  loadShortSalePoint$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ShortSalePointActions.loadShortSalePoint),
      mergeMap(() =>
        this.companieService.getAllSalePoints().pipe(
          map((data) =>
            ShortSalePointActions.loadShortSalePointSuccess({ shortSalePoint: data.data.management_salesPoint })
          ),
          catchError((error) =>
            of(ShortSalePointActions.loadShortSalePointFailure({ error }))
          )
        )
      )
    )
  });

  constructor(private actions$: Actions,
    private companieService: ShortFeatureService) { }
}
