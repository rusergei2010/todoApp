const ADD_TODO = 'ADD_TODO';
const TOOGLE_TODO = 'TOOGLE_TODO';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export ADD_TODO;
export SHOW_FILTER;
export SET_VISIBILITY_FILTER;

export VisibilityFilters;

function addTodo(text) {
  return {type: ADD_TODO, text}
}

function toogleTodo(index) {
  return {type: TOOGLE_TODO, index}
}

function setVisibilityFilter(filter) {
  return {type: SET_VISIBILITY_FILTER, filter}
}

export addTodo;
export toogleTodo;
export setVisibilityFilter;
