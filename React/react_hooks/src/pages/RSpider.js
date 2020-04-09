import React from "react";
import RTable from "../components/RSpider/index";

export default function RSpider() {
    return (
        <div>
             <RTable
                autoplay
                initIdx={0}
                deployTime={2000} 
             >
               <div>内容一</div>
               <div>内容二</div>
               <div>内容三</div>
               <div>内容四</div>
             </RTable>
        </div>
    )
}
