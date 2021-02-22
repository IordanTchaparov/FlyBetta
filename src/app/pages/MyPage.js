import { Timer10Outlined } from "@material-ui/icons";
import React from "react";
import {useSubheader} from "../../_metronic/layout";
import logo from './logo.png'; 

export const MyPage = () => {
  const subheader = useSubheader();
  subheader.setTitle("FlyBetta Login Page");
  //return (<>Hello Page</>);
  return (
    <>
      <img src={logo}></img> 
      <h3> Hello </h3> 
    </>)
};
