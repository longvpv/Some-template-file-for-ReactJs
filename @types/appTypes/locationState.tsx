
export interface WardProps {
  name: string,
  type: string,
  slug: string,
  nameWithType: string,
  path: string,
  pathWithType: string,
  id: string,
  parentId: string
}

export interface DistrictProps {
  name: string,
  type: string,
  slug: string,
  nameWithType: string,
  path: string,
  pathWithType: string,
  id: string,
  parentId: string,
  ward: Array<WardProps>
}


export interface LocationsProps {
  name: string,
  slug: string,
  type: string,
  nameWithType: string,
  id: string,
  district: Array<DistrictProps>
}
export default interface LocationState {
  locations: Array<LocationsProps>
}