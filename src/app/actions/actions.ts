import { createAction, props } from '@ngrx/store';

export const nameEdit = createAction(
  '[Form] Name Edit',
  props<{ payload: string }>()
);

export const emailEdit = createAction(
  '[Form] Email Edit',
  props<{ payload: string }>()
);

export const mobileEdit = createAction(
  '[Form] Mobile Edit',
  props<{ payload: string }>()
);
