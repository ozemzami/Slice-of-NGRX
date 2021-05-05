import { ConsumableService } from '@tanglass-erp/core/product';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as ConsumableActions from '../actions/consumable.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ConsumableEffects {

  loadConsumables$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ConsumableActions.loadConsumables),
      mergeMap(() =>
        this.consumableService.getAll().pipe(
          map((data) =>
            ConsumableActions.loadConsumablesSuccess({consumables: data.data.product_consumable})
          ),
          catchError((error) =>
            of(ConsumableActions.loadConsumablesFailure({ error }))
          )
        )
      )
    )
  });

  insertConsumable$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ConsumableActions.addConsumable),
      mergeMap((action) =>
        this.consumableService.insertOne(action.consumable).pipe(
          map((data) =>
            ConsumableActions.addConsumableSuccess({consumable: data.data.insert_product_consumable_one})
          ),
          catchError((error) =>
            of(ConsumableActions.addConsumableFailure({ error }))
          )
        )
      )
    )
  });


  getConsumableById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ConsumableActions.loadConsumableById),
      mergeMap((action) =>
        this.consumableService.getOneById(action.id).pipe(
          map((data) =>
            ConsumableActions.loadConsumableByIdSuccess({consumable: data.data.product_consumable_by_pk})
          ),
          catchError((error) =>
            of(ConsumableActions.loadConsumableByIdFailure({ error }))
          )
        )
      )
    )
  });

  removeConsumable$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ConsumableActions.removeConsumable),
      mergeMap((action) =>
        this.consumableService.removeOne(action.consumableId).pipe(
          map((data) =>
            ConsumableActions.removeConsumableSuccess({consumableId: data.data.delete_product_product_by_pk})
          ),
          catchError((error) =>
            of(ConsumableActions.removeConsumableFailure({ error }))
          )
        )
      )
    )
  });


  constructor(private actions$: Actions,
              private consumableService: ConsumableService) {}
}
