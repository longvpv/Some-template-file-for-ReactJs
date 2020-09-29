export interface BaseModel {
  id: number;
}

export interface IPagedListModel<T> {
  data: Array<T>;
  hasNextPage: boolean;
  page: number;
  pageSize: number;
  recordsFiltered: number;
  recordsTotal: number;
  total: number;
  totalPages: number;
}

export class SearchModel {
  page: number;
  pageSize: number;


  constructor() {
    this.page = 0;
    this.pageSize = 10;
  }
}

export class PagedListModel<T> implements IPagedListModel<T>{
  data: T[];
  hasNextPage: boolean;
  page: number;
  pageSize: number;
  recordsFiltered: number;
  recordsTotal: number;
  total: number;
  totalPages: number;

  constructor() {
    this.data = [];
    this.hasNextPage = false;
    this.page = 0;
    this.pageSize = 10;
    this.recordsFiltered = 0;
    this.recordsTotal = 0;
    this.total = 0;
    this.totalPages = 0
  }
}