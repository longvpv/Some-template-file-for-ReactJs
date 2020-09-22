import React, { useEffect, Dispatch } from "react";
import MainLayout from "../layouts/mainLayout";
import LayoutFunctionComponent from "../@types/layoutTypes/layoutFunctionComponent";
import * as locationService from "../services/locationService";
import { useDispatch } from "react-redux";
import { setLocations } from "../redux/location/actions";
import httpClient from "../services/httpService";
import { setPrinter } from "../redux/systemsManagement/company/actions";
import { PrinterProps } from "../@types/company/createCompany";

const Index: LayoutFunctionComponent = () => {
  const dispatch = useDispatch()
  const prepareLocations = async () => {
    const locations = await locationService.getAllLocations();
    dispatch(setLocations(locations));
  }

  useEffect(() => {
    prepareLocations();
  }, [])
  return (
    <div>

    </div>
  );
};

Index.Layout = MainLayout;
export default Index
