import './Intervalo.css'
import React from 'react';

import Card from './Card'
import { connect } from 'react-redux';

// eslint-disable-next-line import/no-anonymous-default-export
function Intervalo(props) {
  const min = props.min
  const max = props.max
  return (
    <Card title="Intervalo de Números" red>
      <div className='Intervalo'>
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={min}
            readOnly />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input type="number" value={max}
            readOnly />
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

export default connect(mapStateToProps)(Intervalo)