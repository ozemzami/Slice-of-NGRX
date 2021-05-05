import { createAction, props } from '@ngrx/store';
import { TransferOrder, DetailedTransferOrder, InsertedTransferOrder, OrderDetails } from '@tanglass-erp/core/inventory';

export const loadTransferOrders = createAction('[TransferOrders] Load TransferOrders');

export const loadTransferOrdersSuccess = createAction(
  '[TransferOrders] Load TransferOrders Success',
  props<{ transferOrders: TransferOrder[] }>()
);

export const loadTransferOrdersFailure = createAction(
  '[TransferOrders] Load TransferOrders Failure',
  props<{ error: any }>()
);


// *** Load By Id ***
export const loadTransferOrderById = createAction(
  '[TransferOrders] Load TransferOrder By Id',
  props<{ id: any }>());

export const loadTransferOrderByIdSuccess = createAction(
  '[TransferOrders] Load TransferOrder By Id Success',
  props<{ transferOrder: DetailedTransferOrder }>()
);

export const loadTransferOrderByIdFailure = createAction(
  '[TransferOrders] Load TransferOrder By Id Failure',
  props<{ error: any}>()
);


// *** Add ***
export const addTransferOrder = createAction(
  '[TransferOrders] Add TransferOrder',
  props<{ TransferOrder: InsertedTransferOrder }>()
);

export const addTransferOrderSuccess = createAction(
  '[TransferOrders] Add TransferOrder Success',
  props<{ TransferOrder: TransferOrder }>()
);

export const addTransferOrderFailure = createAction(
  '[TransferOrders] Add TransferOrder Failure',
  props<{ error: any}>()
);


// *** load details ***
export const loadOrdersDetails = createAction(
  '[TransferOrders] load TransferOrder details'
);

export const loadOrdersDetailsSuccess = createAction(
  '[TransferOrders] load TransferOrder details Success',
  props<{ transferOrders: OrderDetails[] }>()
);

export const loadOrdersDetailsFailure = createAction(
  '[TransferOrders] load TransferOrder details Failure',
  props<{ error: any}>()
);
