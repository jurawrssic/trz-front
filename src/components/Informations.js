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
    healthyAverage: 1,
    averageItemsPerPerson: 0,
    averageItemsPerHealthyPerson: 0,
    averageItems: {
      "Fiji Water": 0,
      "Campbell Soup": 0,
      "First Aid Pouch": 0,
      "AK47": 0,
    },
    lostPoints: 0,
  });

  useEffect(() => {
    async function fetchData() {
      const [
        firstResponse,
        secondResponse,
        thirdResponse,
        fourthResponse,
      ] = await Promise.all([
        axios.get(
          "http://zssn-backend-example.herokuapp.com/api/report/infected.json"
        ),
        axios.get(
          "http://zssn-backend-example.herokuapp.com/api/report/non_infected.json"
        ),
        axios.get(
          "http://zssn-backend-example.herokuapp.com/api/report/people_inventory.json"
        ),
        axios.get(
          "http://zssn-backend-example.herokuapp.com/api/report/infected_points.json"
        ),
        axios.get(
          "http://zssn-backend-example.herokuapp.com/api/report/infected_points.json"
        ),
      ]);

      setInfo({
        infectedAverage: firstResponse.data.report.average_infected,
        healthyAverage: secondResponse.data.report.average_healthy,
        averageItemsPerPerson:
          thirdResponse.data.report.average_items_quantity_per_person,
        averageItemsPerHealthyPerson:
          thirdResponse.data.report.average_items_quantity_per_healthy_person,
        averageItems:
          thirdResponse.data.report.average_quantity_of_each_item_per_person,
        lostPoints: fourthResponse.data.report.total_points_lost,
      });
    }
    fetchData();
  }, []);

  return (
    <>
      <h4>Population info</h4>
      <Row className="border-top pt-4 mb-4 text-center">
        <Col xs="3">
          <img src={healthyIcon} alt="healthyIcon" />
        </Col>
        <Col xs="3" className="info-text">
          Average of healthy people: {info.healthyAverage.toFixed(2)}
        </Col>
        <Col xs="3">
          <img src={infectedIcon} alt="infectedIcon" />
        </Col>
        <Col xs="3" className="info-text">
          {" "}
          Average of infected people: {info.infectedAverage.toFixed(2)}
        </Col>
      </Row>
      <Row className="mb-4 text-center">
        <Col xs="3">
          <img src={avgItemsPerson} alt="avgItemsPerson" />
        </Col>
        <Col xs="4" className="info-text">
          Average of items per healthy person:{" "}
          {info.averageItemsPerHealthyPerson.toFixed(2)}
        </Col>
        <Col xs="4" className="info-text">
          Average of items per person (infected and healthy):{" "}
          {info.averageItemsPerPerson.toFixed(2)}
        </Col>
      </Row>
      <Row className="text-center justify-content-center mb-4">
        <Col xs="3">
          <img src={avgItemsInfected} alt="avgItemsInfected" />
        </Col>
        <Col xs="4" className="info-text">
          Lost points due to infected survivors: {info.lostPoints.toFixed(2)}
        </Col>
      </Row>
      <h4>Items Info</h4>
      <Row className="text-center border-top pt-4">
        <Col xs="3">
          <img src={waterIcon} alt="waterIcon" />
          {"\n"}
          Average of water per person: {info.averageItems['Fiji Water'].toFixed(2)}
        </Col>
        <Col xs="3">
          <img src={soupIcon} alt="soupIcon" />
          {"\n"}
          Average of food per person: {info.averageItems["Campbell Soup"].toFixed(2)}
        </Col>
        <Col xs="3">
          <img src={medsIcon} alt="medsIcon" />
          {"\n"}
          Average of meds per person: {info.averageItems["First Aid Pouch"].toFixed(2)}
        </Col>
        <Col xs="3">
          <img src={weaponIcon} alt="weaponIcon" />
          {"\n"}
          Average of weapons per person: {info.averageItems["AK47"].toFixed(2)}
        </Col>
      </Row>
    </>
  );
}

export default Informations;
