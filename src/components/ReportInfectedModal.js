import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import "./../App.css";

function ReportInfectedModal({ name, id }) {
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ infected: data.reportedPersonID }),
    };
    fetch(
      "http://zssn-backend-example.herokuapp.com/api/people/" +
        data.reportedBy +
        "/report_infection.json",
      requestOptions
    )
      .then((response) => console.log(response))
      .then((data) => console.log(data));
  };

  return (
    <>
      <Button
        outline
        color="danger"
        title="Report as infected"
        onClick={toggle}
      >
        REPORT
      </Button>

      <Modal animation="false" isOpen={show} toggle={toggle}>
        <ModalHeader className="let-there-be-dark" toggle={toggle}>
          Report Person as Infected
        </ModalHeader>
        <form id="form1" onSubmit={handleSubmit(onSubmit)}>
          <ModalBody className="let-there-be-dark">
            <input
              hidden
              readOnly
              type="text"
              name="reportedPersonID"
              value={id}
              ref={register}
            ></input>
            <h6>Insert your ID so we can register who reported {name}:</h6>
            <input
              name="reportedBy"
              className="darker-input"
              ref={register}
            ></input>
            {errors.exmapleRequired && <span>This field is required</span>}
          </ModalBody>
          <ModalFooter className="let-there-be-dark">
            <Button outline type="submit" form="form1" color="danger">
              Report!
            </Button>
            <Button outline color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </>
  );
}

export default ReportInfectedModal;