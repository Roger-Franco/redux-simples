import './Intervalo.css'
import React from 'react';
import { connect } from 'react-redux';

import Card from './Card'
import { alterarNumeroMinimo } from '../store/actions/numeros'

// eslint-disable-next-line import/no-anonymous-default-export
function Intervalo(props) {
  const min = props.min
  const max = props.max
  // props.alterarMinimo(10000)
  return (
    <Card title="Intervalo de Números" red>
      <div className='Intervalo'>
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={min}
            onChange={e => props.alterarMinimo(+e.target.value)} />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input type="number" value={max}
          />
        </span>
      </div>
    </Card>
  )
}

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max
  }
}

function mapDispatchToProps(dispatch) {
  return {
    alterarMinimo(novoNumero) {
      // action creator -> action
      const action = alterarNumeroMinimo(novoNumero)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo)