import React, { useEffect, Dispatch } from "react";
import MainLayout from "../layouts/mainLayout";
import LayoutFunctionComponent from "../@types/layoutTypes/layoutFunctionComponent";
import * as locationService from "../services/locationService";
import { useDispatch } from "react-redux";
import { setLocations } from "../redux/dynamic/actions";

const Index: LayoutFunctionComponent = () => {
  const dispatch = useDispatch()
  const prepareLocations = async () => {
    const locations = await locationService.getAllLocations();

    dispatch(setLocations(locations));
    console.log(locations);
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
