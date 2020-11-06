import React from 'react'
import {
  Message,
  PriceList,
  Form,
} from '../src/components/index.js'

const prices = [
  { item: 'Shampoo', price: 78 },
  { item: 'Roast beef', price: 269 },
  { item: 'Playstation 5', price: 12000 },
  { item: 'Kawamon', price: 34 },
  { item: 'Shoes', price: 1599 },
]

function App() {
  return (
    <React.Fragment>
      <header>
        <h1> Hola a todos al el app</h1>
      </header>
      <main>
        <div>
          <Message msg={ 'Hasta la vista, baby.' } />
          <Message msg={ 'Nos vemos en el infierno, Jhonny' } />
          <Message msg={ 'Papaya' } />
        </div>
        <div>
          <PriceList prices={prices} />
        </div>
        <div>
          <Form/>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
