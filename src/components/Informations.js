import React, { useState, useEffect } from "react";
import axios from "axios";

import { Row, Col } from "reactstrap";

import healthyIcon from "./../assets/healthy-avg.png";
import infectedIcon from "./../assets/infected-avg.png";
import avgItemsPerson from "./../assets/avg-itens-healthy.png";
import avgItemsInfected from "./../assets/avg-itens-infected.png";
import waterIcon from "./../assets/water.png";
import soupIcon from "./../assets/food.png";
import medsIcon from "./../assets/aid.png";
import weaponIcon from "./../assets/gun.png";

function Informations() {
  const [info, setInfo] = useState({
    infectedAverage: 0,
    healthyAverage: 0,
    averageItemsPerPerson: 0,
    averageItemsPerHealthyPerson: 0,
    averageItems: 0,
    lostPoints: 0,
  });

  useEffect(() => {
    const url1 =
      "http://zssn-backend-example.herokuapp.com/api/report/infected.json";
    axios.get(url1).then((response) =>
      setInfo({
        ...info,
        infectedAverage: response.data.report.average_infected,
      })
    );

    const url2 =
      "http://zssn-backend-example.herokuapp.com/api/report/non_infected.json";
    axios.get(url2).then((response) =>
      setInfo({
        ...info,
        healthyAverage: response.data.report.average_healthy,
      })
    );

    const url3 =
      "http://zssn-backend-example.herokuapp.com/api/report/people_inventory.json";
    axios.get(url3).then((response) =>
      setInfo({
        ...info,
        averageItemsPerPerson:
          response.data.report.average_items_quantity_per_person,
        averageItemsPerHealthyPerson:
          response.data.report.average_items_quantity_per_healthy_person,
        averageItems:
          response.data.report.average_quantity_of_each_item_per_person,
      })
    );

    const url4 =
      "http://zssn-backend-example.herokuapp.com/api/report/infected_points.json";
    axios.get(url4).then((response) =>
      setInfo({
        ...info,
        lostPoints: response.data.report.total_points_lost,
      })
    );
  }, []);

  return (
    <>
      <h4>Population info</h4>
      <Row className="border-top pt-4 mb-4 text-center">
        <Col xs="3">
          <img src={healthyIcon} alt="healthyIcon" />
        </Col>
        <Col xs="3" className="info-text">
          Average of healthy people: {info.healthyAverage}
        </Col>
        <Col xs="3">
          <img src={infectedIcon} alt="infectedIcon" />
        </Col>
        <Col xs="3" className="info-text">
          {" "}
          Average of infected people: {info.infectedAverage}
        </Col>
      </Row>
      <Row className="mb-4 text-center">
        <Col xs="3">
          <img src={avgItemsPerson} alt="avgItemsPerson" />
        </Col>
        <Col xs="3" className="info-text">
          Average of items per healthy person: {info.averageItemsPerHealthyPerson}
        </Col>
        <Col xs="3">
          <img src={avgItemsInfected} alt="avgItemsInfected" />
        </Col>
        <Col xs="3" className="info-text">
          Average of items per person (infected and healthy):
          {info.averageItemsPerPerson}
        </Col>
      </Row>
      <h4>Items Info</h4>
      <Row className="text-center border-top pt-4">
        <Col xs="3">
          <img src={waterIcon} alt="waterIcon" />
          {"\n"}
          Average of water per person: {info.averageItems["Fiji Water"]}
        </Col>
        <Col xs="3">
          <img src={soupIcon} alt="soupIcon" />
          {"\n"}
          Average of food per person: {info.averageItems["Campbell Soup"]}
        </Col>
        <Col xs="3">
          <img src={medsIcon} alt="medsIcon" />
          {"\n"}
          Average of meds per person: {info.averageItems["First Aid Pouch"]}
        </Col>
        <Col xs="3">
          <img src={weaponIcon} alt="weaponIcon" />
          {"\n"}
          Average of weapons per person: {info.averageItems["AK47"]}
        </Col>
      </Row>
    </>
  );
}

export default Informations;
