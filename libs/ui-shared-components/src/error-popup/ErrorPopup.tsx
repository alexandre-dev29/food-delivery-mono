import { Col, Modal, Row, Text } from '@nextui-org/react';
import { ErrorTypeGraphQl } from 'libs/uishared-types/src/config/types';
import DefaultButton from '../default-button/DefaultButton';

interface ErrorPopupProps {
  errorType: ErrorTypeGraphQl;
  messages: string[];
  onCloseEvent: any;
  openStatus: boolean;
}

export default function ErrorPopup(props: ErrorPopupProps) {
  return (
    <div>
      <Modal closeButton aria-labelledby="modal-title" open={props.openStatus} onClose={props.onCloseEvent}>
        <Modal.Header>
          <Text id="modal-title" size={18}>
            <Text b size={18}>
              There was an error
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Col>
            {props.messages.map((currentMessage, index) => (
              <Row key={index} justify={'center'}>
                <p className={'text-center font-semibold '}> {currentMessage}</p>
              </Row>
            ))}
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <DefaultButton
            textButton={'Okay Close'}
            onClickAction={props.onCloseEvent}
            isFilled={false}
            isSmall={false}
          />
        </Modal.Footer>
      </Modal>
    </div>
  );
}
