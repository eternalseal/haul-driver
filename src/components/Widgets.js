
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons';

import { Col, Row, Card, } from '@themesberg/react-bootstrap';


export const WeeklySummaryWidget = (props) => {
  let percentageColor;
  const { icon, iconColor, category, title, period, percentage } = props;

  if (typeof percentage !== 'undefined') {
    percentageColor = percentage < 50 ? "text-danger" : percentage < 80 ? "text-warning" : "text-success";
  }
   
  return (
    <Card border="light" className="widget shadow-sm">
      <Card.Body>
        <Row className="d-block d-xl-flex align-items-center">
          <Col xl={5} className="text-xl-center d-flex align-items-center justify-content-xl-center mb-3 mb-xl-0">
            <div className={`icon icon-shape icon-md icon-${iconColor} rounded me-4 me-sm-0`}>
              <FontAwesomeIcon icon={icon} />
            </div>
          </Col>
          <Col xs={12} xl={7} className="px-xl-0">
            <div className="d-none d-sm-block">
              <h5>{category}</h5>
              <h3 className={`${percentageColor} mb-1`}>{title}</h3>
            </div>
            <small>{period}</small>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}