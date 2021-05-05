import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as AccessoryWarehouseActions from '../actions/wareHouseAccessory.actions';
import { AccessoryWarehouse ,SubstanceStocksDetails} from '@tanglass-erp/core/inventory';

export const ACCESSORY_WAREHOUSE_FEATURE_KEY = 'accessory_warehouse';


export interface State extends EntityState<AccessoryWarehouse> {
  selectedAccessoryWarehouse: SubstanceStocksDetails,
  loaded: boolean; // has the TransferOrder list been loaded
  error?: string | null; // last known error (if any)
}

export interface TransferOrderPartialState {
  readonly [ACCESSORY_WAREHOUSE_FEATURE_KEY]: State;
}

export const accessoryWarehouseAdapter: EntityAdapter<AccessoryWarehouse> = createEntityAdapter<
AccessoryWarehouse
>();

export const initialState: State = accessoryWarehouseAdapter.getInitialState({
  // set initial required properties
  selectedAccessoryWarehouse: null,
  loaded: false,
  error: null,
});

const AccessoryWarehouseReducer = createReducer<State>(
  initialState,
  on( AccessoryWarehouseActions.loadWareHouseAccessoriesSuccess,
      (state, action)  => accessoryWarehouseAdapter.setAll(action.wareHouseAccessories,
        {
         ...state,
         loaded: true
        })
  ),
  on( AccessoryWarehouseActions.loadWareHouseAccessorieByIdSuccess,
    (state, action)  => (
      {
       ...state,
       selectedAccessoryWarehouse: action.accessoryWarehouse,
      })
),
  on(AccessoryWarehouseActions.loadWareHouseAccessoriesFailure,
     AccessoryWarehouseActions.loadWareHouseAccessorieByIdFailure,
     (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return AccessoryWarehouseReducer(state, action);
}
