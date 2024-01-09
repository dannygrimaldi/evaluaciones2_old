import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, } from "@nextui-org/react";
import AuthContext  from '../context/AuthContext';


export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { user, logoutUser } = useContext(AuthContext);


  const handleLogout = () => {
    setShowConfirmation(true);
  };

  const confirmLogout = () => {
    // Aquí puedes agregar la lógica para cerrar la sesión
    // ...

    // Cerrar el modal de confirmación
    setShowConfirmation(false);
    // Cerrar el modal principal
    onClose();
  };

  const cancelLogout = () => {
    // Cancelar el cierre de sesión
    setShowConfirmation(false);
  };

  return (
    <>
      <Button onPress={handleLogout}>Cerrar sesión</Button>

      <Modal isOpen={showConfirmation} onOpenChange={() => setShowConfirmation(!showConfirmation)}>
        <ModalContent>
          <ModalHeader>Confirmar cierre de sesión</ModalHeader>
          <ModalBody>
            <p>¿Estás seguro de que deseas cerrar sesión?</p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={cancelLogout}>
              Cancelar
            </Button>
            <Button color="primary" onPress={logoutUser} >
              Confirmar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
