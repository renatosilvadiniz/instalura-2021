import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const Modal = ({ isOpen, onClose, children }) => {

    const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background: rgba(0,0,0,0.3);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    overflow: scroll;
    transition: all .3s;
    ${({ isOpen }) => isOpen ?
            css`
        opacity: 1;
        pointer-events: all;`
            :
            css`
        opacity: 0;
        pointer-events: none;
      `
        }
  `;

    return (
        <ModalWrapper isOpen={isOpen} onClick={event => {
            const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');
            if (!isSafeArea) onClose()
        }}>
            <motion.div
                variants={{
                    open: {
                        transform: "translateX(0%)",
                    },
                    closed: {
                        transform: "translateX(-100%)",
                    },
                }}
                animate={isOpen ? 'open' : 'closed'}
                style={{
                    display: 'flex',
                    flex: 1,
                    transition: '.5s'
                }}
            >
                {children({ 'data-modal-safe-area': 'true' })}
            </motion.div>
        </ModalWrapper>
    )
}

export default Modal;

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};
