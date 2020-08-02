import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";

function ReportInfectedModal({ name, id }) {
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);

  const { register, handleSubmit, errors } = useForm();

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
            <Input
              hidden
              readOnly
              type="text"
              name="reportedPersonID"
              value={id}
              innerRef={register}
            ></Input>
            <h6>Insert your ID so we can register who reported {name}:</h6>
            <Input
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
