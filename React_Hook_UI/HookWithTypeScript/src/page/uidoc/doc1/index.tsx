import React, { useState, useEffect } from "react";
import { commissionData } from "./doc";
import DocTemplate from '../../../components/DocTemplate';
import "./index.css";
interface Props {}

const Doc1: React.FC<Props> = (props) => {
  return (
    <DocTemplate 
       title="文档1"
       localStr="PLANDATA2"
       commissionData={commissionData}
    />
   
  );
};

export default Doc1;
