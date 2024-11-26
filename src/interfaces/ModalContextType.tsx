export default interface ModalContextType {
  modalComponent: JSX.Element | null
  setModalComponent: (component: JSX.Element) => void
  closeModal: () => void
}
