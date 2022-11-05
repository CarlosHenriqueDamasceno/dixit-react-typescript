import {Modal } from "react-bootstrap";
import Deck from "./Deck";

export type modalProps = {
    show: boolean
}

export default function SelectCardModal(props: modalProps)
{
    return(

        <Modal
            show={props.show}
            size="lg"
            backdrop="static"
            centered
            fullscreen={true}
            className="transparent-modal">
                <Modal.Body className="d-flex flex-column justify-content-center">
                    <Deck/>
                    <div className="mt-4 d-flex flex-column align-items-center">
                        <div className="text-center pt-3">
                            <button className="btn btn-lg btn-primary">Selecionar</button>
                        </div>
                    </div>
                </Modal.Body>
        </Modal>
    );
}