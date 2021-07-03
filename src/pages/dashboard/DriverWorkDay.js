import React, { useState } from "react";
import { faChartLine, faCashRegister, faClock } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, InputGroup } from "@themesberg/react-bootstrap";
import logs from "../../data/logs";

import { WeeklySummaryWidget } from "../../components/Widgets";
import { WorkdayLogTable } from "../../components/Tables";

import _summary from "../../data/summary";
export default () => {
  const [weeks] = useState(Object.keys(logs));
  const [summary, setSummary] = useState(_summary);

  // Set data for the table
  let _data = [];
  weeks.map((key) => (_data = [..._data, ...logs[key].days]));
  const [data, setData] = useState(_data);

  // Check is hours of work for that week is more than 80%
  const getWeekCompliance = (week) => {
    const result = {};
    const hours = 70;
    const minimum = 80;
    const percentage = Math.floor((week.hours / hours) * 100);
    result.percentage = percentage;
    if (percentage < minimum) {
      result.message = _summary.message;
    }
    return result;
  };

  // Check and modify data based on what week the user selected
  const onWeekChange = (e) => {
    const id = e.target.value;
    if (id === "") {
      setSummary(_summary);
      return setData(_data);
    }

    const week = logs[id];
    const compliance = getWeekCompliance(week);
    const period = id.replace(/-/g, " ").replace(":", " - ");
    const summary = {
      id,
      period,
      pay: week.pay,
      hours: week.hours,
    };
    setData(week.days);
    setSummary({ ...summary, ...compliance });
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <h4>Driver Work Day Log</h4>
          <p className="mb-0">Daily log for the driver "John Smith"</p>
        </div>
      </div>
      <Row className="justify-content-md-left mb-4">
        <Col xs={12} sm={6} xl={4} className="mb-1">
          <WeeklySummaryWidget
            category="Weekly Summary"
            title={`${parseFloat(summary.hours).toFixed(2)} Hours`}
            period={summary.period}
            message={summary.message}
            icon={faClock}
            iconColor="shape-secondary"
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-1">
          <WeeklySummaryWidget
            category="Weekly Gross Pay"
            title={"$" + parseFloat(summary.pay).toFixed(2)}
            period={summary.period}
            icon={faCashRegister}
            iconColor="shape-secondary"
          />
        </Col>
        <Col xs={12} sm={6} xl={4} className="mb-1">
          <WeeklySummaryWidget
            category="Weekly Hours Percentage"
            title={parseFloat(summary.percentage).toFixed(2) + "%"}
            percentage={summary.percentage}
            period={summary.period}
            icon={faChartLine}
            iconColor="shape-secondary"
          />
        </Col>
      </Row>

      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={8} md={6} lg={3} xl={4}>
            <InputGroup>
              <InputGroup.Text>Week</InputGroup.Text>

              <Form.Select onChange={onWeekChange} defaultValue="0">
                <option value={""}>All</option>
                {weeks.map((id) => (
                  <option value={id} key={id}>
                    {id}
                  </option>
                ))}
              </Form.Select>
            </InputGroup>
          </Col>
        </Row>
      </div>

      <WorkdayLogTable data={data} />
    </>
  );
};
