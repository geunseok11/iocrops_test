import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadChart, loadChart2 } from "../reducer/chart";
import EC_slab1 from "../component/EC_slab1";
import EC_drain_PC from "../component/EC_drain_PC";
import EC_slab2 from "../component/EC_slab2";
import WC_slab1 from "../component/WC_slab1";
import WC_slab2 from "../component/WC_slab2";
import CO2air from "../component/CO2air";
import Rhair from "../component/Rhair";
import Tair from "../component/Tair";
import EnScr from "../component/EnScr";
import BlackScr from "../component/BlackScr";
import HumDef from "../component/HumDef";
import Iglob from "../component/Iglob";
import RadSum from "../component/RadSum";
import PipeGrow from "../component/PipeGrow";
import Tout from "../component/Tout";
import PipeLow from "../component/PipeLow";

const Chart = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadChart());
    // dispatch(loadChart2());
  }, []);

  return (
    <React.Fragment>
      <EC_drain_PC />
      <EC_slab1 />
      <EC_slab2 />
      <WC_slab1 />
      <WC_slab2 />
      <CO2air />
      <Rhair />
      <Tair />
      <EnScr />
      <BlackScr />
      <HumDef />
      <Iglob />
      <RadSum />
      <PipeGrow />
      <PipeLow />
      <Tout />
    </React.Fragment>
  );
};

export default Chart;
