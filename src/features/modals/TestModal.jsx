import React from 'react'
import { Modal } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {closeModal} from './modalActions';

const mapDispatch = (dispatch) => ({
    closeModal: () => {
        dispatch(closeModal());
    }
})

const TestModal = ({closeModal}) => {
    return (
        <Modal closeIcon="close" open={true} onClose={closeModal}>
            <Modal.Header>Test Modal</Modal.Header>
            <Modal.Content>
            <Modal.Description>
                <p>Test Modal... nothing to see here</p>
            </Modal.Description>
            </Modal.Content>
        </Modal>
    )
}

export default connect(null, mapDispatch)(TestModal);
