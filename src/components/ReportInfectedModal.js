import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from "reactstrap";

function ReportInfectedModal({ name, location, setAlert }) {
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    const id = data.reportedPersonID.substring(53);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ infected: id }),
    };

    fetch(
      "http://zssn-backend-example.herokuapp.com/api/people/" +
      data.reportedBy +
      "/report_infection.json",
      requestOptions
    )
      .then(response => onReportSent(response.status, response.statusText), toggle())
      .catch(error => alert(error))
  };

  const onReportSent = (status, text) => {
    var message = status + " - " + text;
    setAlert(message);
  }

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
            <Input
              hidden
              type="text"
              id="reportedPersonID"
              name="reportedPersonID"
              defaultValue={location}
              innerRef={register}
            ></Input>
            <h6>Insert your ID so we can register who reported {name}:</h6>
            <Input
              id="reportedBy"
              name="reportedBy"
              className="darker-input"
              innerRef={register}
            ></Input>
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
