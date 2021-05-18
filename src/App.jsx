import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { fetchCastomers } from './asyncActions/castomers';
import { addCastomerAction, removeCastomerAction } from './store/customerReduser';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const castomers = useSelector(state => state.castomers.castomers)

  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash})
  }
  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  }

  const addCastomer = (name) => {
    const castomer = {
      name, 
      id: Date.now()
    }
    dispatch(addCastomerAction(castomer))
  }

  const removeCastomer = (castomer) => {
    dispatch(removeCastomerAction(castomer.id))
  }

  return (
    <div className="App">
      
      <div className="container">
      <div className="count">Баланс: {cash}</div>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
        <button onClick={() => addCastomer(prompt())}>Добавить клиента</button>
        <button onClick={() => dispatch(fetchCastomers())}>Получить клиентов</button>
      </div>
      { castomers.length > 0 
      ?
      <div className="castomer" >
        {castomers.map(castomer => 
          <div onClick={() => removeCastomer(castomer)}>{castomer.name}</div>
        )}
      </div> 
      :
      <div style={{fontSize:"2rem", marginTop:"20px", marginLeft: "550px"}}>
        Клиенты отсутствуют!
      </div>
      }
    </div>
  );
}

export default App;
