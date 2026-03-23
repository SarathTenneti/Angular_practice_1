import {createAction , props} from '@ngrx/store';

export const increment_action = createAction('[Counter] Increment');

export const decrement_action = createAction('[Counter] Decrement');

export const reset_action = createAction('[Counter] Reset');