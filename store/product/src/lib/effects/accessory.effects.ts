import { AccessoryService } from '@tanglass-erp/core/product';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as AccessoriesActions from '../actions/accessory.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AccessoryEffects {

  loadAccessories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccessoriesActions.loadAccessories),
      mergeMap(() =>
        this.accessorieservice.getAll().pipe(
          map((data) =>
          AccessoriesActions.loadAccessoriesSuccess({accessories: data.data.product_accessory})
          ),
          catchError((error) =>
            of(AccessoriesActions.loadAccessoriesFailure({ error }))
          )
        )
      )
    )
  });

  insertAccessory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccessoriesActions.addAccessory),
      mergeMap((action) =>
        this.accessorieservice.insertOne(action.accessory).pipe(
          map((data) =>
          AccessoriesActions.addAccessorySuccess({accessory: data.data.insert_product_accessory_one})
          ),
          catchError((error) =>
            of(AccessoriesActions.addAccessoryFailure({ error }))
          )
        )
      )
    )
  });


  getAccessoryById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccessoriesActions.loadAccessoryById),
      mergeMap((action) =>
        this.accessorieservice.getOneById(action.id).pipe(
          map((data) =>
          AccessoriesActions.loadAccessoryByIdSuccess({accessory: data.data.product_accessory_by_pk})
          ),
          catchError((error) =>
            of(AccessoriesActions.loadAccessoryByIdFailure({ error }))
          )
        )
      )
    )
  });

  removeAccessory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccessoriesActions.removeAccessory),
      mergeMap((action) =>
        this.accessorieservice.removeOne(action.accessoryId).pipe(
          map((data) =>
          AccessoriesActions.removeAccessorySuccess({accessoryId: data.data.delete_product_product_by_pk})
          ),
          catchError((error) =>
            of(AccessoriesActions.removeAccessoryFailure({ error }))
          )
        )
      )
    )
  });


  constructor(private actions$: Actions,
              private accessorieservice: AccessoryService) {}
}
