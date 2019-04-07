import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import SectionHeader from '<molecules>/SectionHeader/SectionHeader'

const modalRoot = document.getElementById('modal-root')
class Modal extends React.Component {
  render () {
    const { children, username, title, handleClose, open } = this.props
    return ReactDOM.createPortal(
      <Modal.Container open={open} onClick={handleClose}>
        <Modal.Body>
          {children}
          <hr />
          <SectionHeader header={username} title={title} />
        </Modal.Body>
      </Modal.Container>, modalRoot)
  }
}

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node,
  open: PropTypes,
  username: PropTypes.string,
  title: PropTypes.string
}

Modal.Container = styled.div`
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  justify-content: center;
  align-items: center;
  opacity: ${props => (props.open ? 1 : 0)};
  background-color: rgba(0,0,0,0.3);
  `

Modal.Body = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  min-height: 300px;
  margin: 1rem;
  position: relative;
  min-width: 300px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  justify-self: center;
`
export default Modal
