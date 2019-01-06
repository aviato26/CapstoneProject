import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

let ModalExample = (props) => {
    return (
      <div className='modal'>
        <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
          <ModalHeader toggle={props.toggle}>{props.title}</ModalHeader>
          <Button color="secondary" onClick={props.close}>X</Button>
          <ModalBody>
          {
            props.details.map((c,i) => {
              return <p key={i}>{`${c[0]}: ${c[1]}`}</p>
            })
          }
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
      </div>
    )
}

export default ModalExample;
