import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'

describe('unicafe reducer', () => {
  let initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }

  const verifyType = (type, valueGood, valueOk, valueBad) => {
    const action = {
      type: type
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: valueGood,
      ok: valueOk,
      bad: valueBad
    })
  }

  test('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = counterReducer(state, action)
    expect(newState).toEqual({})
  })

  test('good is incremented', () => {
    verifyType('GOOD',1, 0, 0)
  })

  test('ok is incremented', () => {
    verifyType('OK',0,1,0)
  })

  test('bad is incremented', () => {
    verifyType('BAD',0,0,1)
  })

  test('reset state', () => {
    initialState = {
      good: 3,
      ok : 2,
      bad: 3
    }

    verifyType('ZERO',0,0,0)
  })
})