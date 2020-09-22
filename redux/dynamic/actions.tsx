export const actionTypes = {
  SET_DYNAMIC_LOADING: 'SET_DYNAMIC_LOADING',
}

export const setDynamicLoading = (field: string, loading: boolean) => ({
  type: actionTypes.SET_DYNAMIC_LOADING,
  field,
  loading
});


