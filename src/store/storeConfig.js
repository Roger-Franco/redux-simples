import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
  numeros: function (state, action) {
    console.log('Reducer numero...');
    console.log(state, ' ', action);

    switch (action.type) {
      case 'NUM_MIN_ALTERADO':
        return {
          ...state,
          min: action.payload
        }
      default:
        return {
          min: 7,
          max: 31
        }
    }
  },
  nomes: function (state, action) {
    console.log('Reducer nomes...');
    console.log(state, ' ', action);
    return [
      'Carlos',
      'Bia',
      'Ana'
    ]
  }
})

function storeConfig() {
  return createStore(reducers)
}

export default storeConfig
