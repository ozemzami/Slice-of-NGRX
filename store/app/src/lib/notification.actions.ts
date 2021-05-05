import { createAction, props } from '@ngrx/store';
import { Notification } from './notification.model';


export const loadNotifications = createAction(
  '[Notification Component] Load Notifications'
);
export const loadNotificationsSuccess = createAction(
  '[Alert effect] Load Notifications Succces',
  props<{notifications : Notification[]}>()
);
export const loadNotificationsFailure = createAction(
  '[Alert effect] Load Notifications Failure',
  props<{error: any}>()
);


export const AddNotification = createAction(
  '[Notification Component] Add Notification',
  props<{notification : Notification}>()
);
export const AddNotificationSuccess = createAction(
  '[Alert Component] Add Notification success',
  props<{notification : Notification}>()
);
export const AddNotificationFailure = createAction(
  '[Alert Component] Add Notification Failure',
  props<{error: any}>()
);
