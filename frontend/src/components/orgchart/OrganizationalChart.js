import React, { useState, useRef, useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import { OrgChart as OrgTree } from "d3-org-chart";
import NodeContent from "./NodeContent.js";
import ExpandButton from "./ExpandButton.js";
import EmployeeDetails from "./EmployeeDetails.js";

const OrganizationalChart = props => {
  const d3Container = useRef(null);
  let chart = null;

  const [cardShow, setCardShow] = useState(false);
  const [employeeId, setEmployeeId] = useState("");

  const handleShow = () => setCardShow(true);
  const handleClose = () => setCardShow(false);

  useEffect(() => {
    const toggleDetailsCard = nodeId => {
      handleShow();
      setEmployeeId(nodeId);
    };
    if (props.data && d3Container.current) {
      if (!chart) {
        chart = new OrgTree();
      }
      chart
        .container(d3Container.current)
        .data(props.data)
        .nodeWidth(() => 300)
        .nodeHeight(() => 160)
        .compactMarginBetween(() => 80)
        .onNodeClick(d => {
          toggleDetailsCard(d);
        })
        .buttonContent(node => {
          return ReactDOMServer.renderToStaticMarkup(<ExpandButton {...node.node} />);
        })
        .nodeContent(d => {
          return ReactDOMServer.renderToStaticMarkup(<NodeContent {...d} />);
        })
        .render();
    }
  }, [props.data, d3Container.current]);

  return (
    <div ref={d3Container}>
      {cardShow && (
        <EmployeeDetails
          employees={props.data}
          employee={props.data.find(employee => employee.id === employeeId)}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export default OrganizationalChart;
