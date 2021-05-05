import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as fromShortWarehouse from './short-warehouse.reducer';
import * as ShortWarehouseActions from './short-warehouse.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ShortFeatureService } from '@tanglass-erp/core/common';
import { of } from 'rxjs';

@Injectable()
export class ShortWarehouseEffects {
  loadShortWarehouse$= createEffect(() => {
    return this.actions$.pipe(
      ofType(ShortWarehouseActions.loadShortWarehouse),
      mergeMap(() =>
        this.warehouseService.getAllWarehouses().pipe(
          map((data) =>
          ShortWarehouseActions.loadShortWarehouseSuccess({ shortWarehouse: data.data.stock_warehouse })
          ),
          catchError((error) =>
            of(ShortWarehouseActions.loadShortWarehouseFailure({ error }))
          )
        )
      )
    )
  });

  constructor(private actions$: Actions,
    private warehouseService: ShortFeatureService) {}
}
