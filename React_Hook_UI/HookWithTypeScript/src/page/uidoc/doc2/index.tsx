import React, { useState, useEffect } from "react";
import { commissionData } from "./doc";
import _ from "lodash";

import "./index.css";
import { Animation, Commission } from "rockui";
interface Props {}

const UiDoc: React.FC<Props> = (props) => {
  let localdate: string = localStorage.getItem("PLANDATA2") || "";
  let localdateArr: Array<any> = (localdate && JSON.parse(localdate)) || [];
  let initDate =
    localdateArr.length !== 0 ? localdateArr : commissionData || [];
  const [planDate, setPlanDate] = useState(initDate);

  useEffect(() => {
    localStorage.setItem("PLANDATA2", JSON.stringify(planDate));
  }, [planDate]);

  return (
    <Animation>
      <div>
        <h3>文档2</h3>
        <div style={{ display: "flex" }}>
          <Commission
            dataSource={planDate}
            isHandle
            theme="info"
            onChange={(e, itemId, _newData) => {
              setPlanDate(_.cloneDeep(_newData));
            }}
            isEditable
          />
        </div>
      </div>
    </Animation>
  );
};

export default UiDoc;
