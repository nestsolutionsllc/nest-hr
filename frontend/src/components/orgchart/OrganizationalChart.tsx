import React, { useState, useRef, useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import { OrgChart as OrgTree } from "d3-org-chart";
import NodeContent from "./NodeContent";
import EmployeeDetails from "./EmployeeDetails";
import ExpandButton from "./ExpandButton";
import { IEmployee } from "../../interfaces/IEmployee";

const OrganizationalChart = (props: { data: IEmployee[] }) => {
  const d3Container = useRef(null);
  let chart = null;

  const [cardShow, setCardShow] = useState<boolean>(false);
  const [employeeId, setEmployeeId] = useState<number>();

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
          console.log(node);
          return ReactDOMServer.renderToStaticMarkup(<ExpandButton {...node.node} />);
        })
        .nodeContent(d => {
          console.log(d);
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
