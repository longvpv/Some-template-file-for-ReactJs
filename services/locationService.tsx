import Axios from "axios";

import _ from 'lodash'

export const getAllLocations = async () => {
  const data = Axios.get("http://erp-api-dev.vvs.vn/core/location");
  const locations = (await data).data;
  return _.keys(locations).map(key => locations[key]);
}