import React from "react";
import { Nav, Card, Table, Pagination } from "@themesberg/react-bootstrap";

export const WorkdayLogTable = (props) => {
  const { data } = props;
  const TableRow = (props) => {
    const { index, startTime, endTime, formattedHours, pay } = props;
    const statusVariant = "primary";

    return (
      <tr>
        <td>{index + 1}</td>
        <td>
          <span className="fw-normal">{startTime}</span>
        </td>

        <td>
          <span className="fw-normal">{endTime}</span>
        </td>

        <td>
          <span className={`fw-normal text-${statusVariant}`}>
            {formattedHours}
          </span>
        </td>
        <td>
          <span className={`fw-normal text-${statusVariant}`}>
            ${parseFloat(pay).toFixed(2)}
          </span>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th className="border-bottom">#</th>
              <th className="border-bottom">Start Time</th>
              <th className="border-bottom">End Time</th>

              <th className="border-bottom">Hours Worked</th>
              <th className="border-bottom">Gross Pay</th>
            </tr>
          </thead>
          <tbody>
            {data.map((l, i) => (
              <TableRow key={`logs-${i}`} {...l} index={i} />
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};
