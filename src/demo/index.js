import React from "react";
import Home from "./common/Home";
import MultipExample from "./Multip.example";
import SumExample from "./Sum.example";
import pack from '../../package.json';
import { getSourceUrl } from "./common/utils";

function Demo() {
  return (
    <Home title="React" version={`v${pack && pack.version ? pack.version : ''}`}>
      <div key="Sum" link={getSourceUrl('Sum.example.js')}>
        <SumExample />
      </div>
      <div key="Multip" link={getSourceUrl('Multip.example.js')}>
        <MultipExample />
      </div>
    </Home>
  )
}

export default Demo;