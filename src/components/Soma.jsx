import React from 'react';

import Card from './Card'

export default props => {
  return (
    <Card title="Soma dos Números" blue>
      <div className='Intervalo'>
        <span>
          <span>Resultado:</span>
          <strong>{20}</strong>
        </span>
      </div>
    </Card>
  )
}
