import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { ShortFeatureService } from '@tanglass-erp/core/common';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as fromShortProvider from './short-provider.reducer';
import * as ShortProviderActions from './short-provider.actions';

@Injectable()
export class ShortProviderEffects {
  loadShortProvider$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ShortProviderActions.loadShortProvider),
      mergeMap((action) =>
        this.shortFeatureService.getShortProviders().pipe(
          map((data) =>
          ShortProviderActions.loadShortProviderSuccess({shortProvider:data.data.contact_provider })
          ),
          catchError((error) =>
            of(ShortProviderActions.loadShortProviderFailure({ error }))
          )
        )
      )
    )
  });

  constructor(private actions$: Actions,
    private shortFeatureService: ShortFeatureService) {}
}
