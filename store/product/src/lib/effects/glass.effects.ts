import { GlassService } from '@tanglass-erp/core/product';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as GlassActions from '../actions/glass.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class GlassEffects {

  loadAccessories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GlassActions.loadGlasses),
      mergeMap(() =>
        this.glassService.getAll().pipe(
          map((data) =>
            GlassActions.loadGlassesSuccess({glasses: data.data.product_glass})
          ),
          catchError((error) =>
            of(GlassActions.loadGlassesFailure({ error }))
          )
        )
      )
    )
  });

  insertGlass$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GlassActions.addGlass),
      mergeMap((action) =>
        this.glassService.insertOne(action.glass).pipe(
          map((data) =>
            GlassActions.addGlassSuccess({glass: data.data.insert_product_glass_one})
          ),
          catchError((error) =>
            of(GlassActions.addGlassFailure({ error }))
          )
        )
      )
    )
  });


  getGlassById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GlassActions.loadGlassById),
      mergeMap((action) =>
        this.glassService.getOneById(action.id).pipe(
          map((data) =>
            GlassActions.loadGlassByIdSuccess({glass: data.data.product_glass_by_pk})
          ),
          catchError((error) =>
            of(GlassActions.loadGlassByIdFailure({ error }))
          )
        )
      )
    )
  });

  removeGlass$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GlassActions.removeGlass),
      mergeMap((action) =>
        this.glassService.removeOne(action.glassId).pipe(
          map((data) =>
            GlassActions.removeGlassesuccess({glassId: data.data.delete_product_product_by_pk})
          ),
          catchError((error) =>
            of(GlassActions.removeGlassFailure({ error }))
          )
        )
      )
    )
  });


  loadTypes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GlassActions.loadTypes),
      mergeMap(() =>
        this.glassService.getTypes().pipe(
          map((data) =>
            GlassActions.loadTypesSuccess({types: data})
          ),
          catchError((error) =>
            of(GlassActions.loadTypesFailure({ error }))
          )
        )
      )
    )
  });

  loadColors$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GlassActions.loadColors),
      mergeMap(() =>
        this.glassService.getColors().pipe(
          map((data) =>
            GlassActions.loadColorsSuccess({colors: data})
          ),
          catchError((error) =>
            of(GlassActions.loadColorsFailure({ error }))
          )
        )
      )
    )
  });


  constructor(private actions$: Actions,
              private glassService: GlassService) {}
}
