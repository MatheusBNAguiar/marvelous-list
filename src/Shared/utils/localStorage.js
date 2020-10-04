function localStorage () {
  const { localStorage: storage } = window.top

  const getData = token => {
    try {
      return JSON.parse(storage.getItem(token))
    } catch (_) {
      return undefined
    }
  }

  const setData = (token, value) => {
    try {
      storage.setItem(token, JSON.stringify(value))
    } catch (_) {
      storage.setItem(token, value)
    }
  }

  return { get: getData, set: setData, remove: storage.removeItem }
}

export const localStorageAdapter = localStorage()
