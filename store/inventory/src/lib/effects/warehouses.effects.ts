import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as WarehousesActions from '../actions/warehouses.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { WarehouseService } from '@tanglass-erp/core/inventory';
import { of } from 'rxjs';

@Injectable()
export class WarehousesEffects {

  loadWarehouses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WarehousesActions.loadWarehouses),
      mergeMap(() => this.warehouseService.getAll()
        .pipe(
          map((data) =>
            WarehousesActions.loadWarehousesSuccess({warehouses: data.data.stock_warehouse})),
          catchError((error) =>
            of(WarehousesActions.loadWarehousesFailure({error})))
          ))
    )
  );

  loadWarehouseById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WarehousesActions.loadWarehouseById),
      mergeMap((action) => this.warehouseService.getOneById(action.id)
        .pipe(
          map((data) =>
            WarehousesActions.loadWarehouseByIdSuccess({warehouse: data.data.stock_warehouse_by_pk})),
          catchError((error) =>
            of(WarehousesActions.loadWarehouseByIdFailure({error})))
          ))
    )
  );

  InsertOne$ = createEffect(() =>
  this.actions$.pipe(
    ofType(WarehousesActions.addWarehouse),
    mergeMap((action) => this.warehouseService.insertOne(action.warehouse)
      .pipe(
        map((data) =>
          WarehousesActions.addWarehouseSuccess({warehouse: data.data.insert_stock_warehouse_one})),
        catchError((error) =>
          of(WarehousesActions.addWarehouseFailure({error})))
        ))
  )
  );

  constructor(private actions$: Actions,
              private warehouseService: WarehouseService) {}
}
