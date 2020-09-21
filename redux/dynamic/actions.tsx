export const actionTypes = {
  SET_DYNAMIC_LOADING: 'SET_DYNAMIC_LOADING',
  SET_LOCATIONS: 'SET_LOCATIONS'
}

export const setDynamicLoading = (field: string, loading: boolean) => ({
  type: actionTypes.SET_DYNAMIC_LOADING,
  field,
  loading
});

export const setLocations = (locations: Array<any>) => ({
  type: actionTypes.SET_LOCATIONS,
  locations
})

