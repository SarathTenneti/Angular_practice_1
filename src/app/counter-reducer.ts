import { createReducer, on } from '@ngrx/store';
import { increment_action , decrement_action , reset_action} from './counter-actions';

let initialState =  0;

export let counterReducer = createReducer(
  initialState,
  on(increment_action, (state) => state+1 ),
  on(decrement_action, (state) => state-1 ),
  on(reset_action , (state) => 0)

);
