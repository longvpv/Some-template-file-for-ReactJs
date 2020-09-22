export const actionTypes = {
  SET_LOCATIONS: 'SET_LOCATIONS'
}

export const setLocations = (locations: Array<any>) => ({
  type: actionTypes.SET_LOCATIONS,
  locations
})
