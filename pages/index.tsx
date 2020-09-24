import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import LayoutFunctionComponent from "../@types/layoutTypes/layoutFunctionComponent";
import MainLayout from "../layouts/mainLayout";
import { setLocations } from "../redux/location/actions";
import * as locationService from "../services/locationService";

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
    <div style={{ width: '100%', height: '100%' }} className='d-flex flex-column justify-content-center align-items-center'>
      <h1>Welcome to VVS ERP</h1>
      <h2>Will be have tutorial here later !!!</h2>
    </div>
  );
};

Index.Layout = MainLayout;
export default Index
