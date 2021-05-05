import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromWarehouseSubstance from './warehouse-glass.reducer';
import * as WarehouseGlassActions from './warehouse-glass.actions';
import * as ShortWarehouseActions from './short-warehouse.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ShortFeatureService } from '@tanglass-erp/core/common';
import { of } from 'rxjs';
@Injectable()
export class WarehouseSubstanceEffects {
  loadWarehouseGlasses$ =createEffect(() => {
    return this.actions$.pipe(
      ofType(WarehouseGlassActions.loadWarehouseGlasses),
      mergeMap((action) =>
        this.warehouseSubstanceService.getGlassesSubstances(action.id).pipe(
          map((data) =>
          WarehouseGlassActions.loadWarehouseGlassesSuccess({ warehouseGlass: data })
          ),
          catchError((error) =>
            of(WarehouseGlassActions.loadWarehouseGlassesFailure({ error }))
          )
        )
      )
    )
  });



  constructor(private actions$: Actions,
    private warehouseSubstanceService: ShortFeatureService) {}
}
