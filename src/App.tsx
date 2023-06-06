import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <div>
      <Button colorScheme="primary" onClick={openModal}>
        Cadastrar
      </Button>
      <Modal isOpen={show} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl>
                <FormLabel>Nome</FormLabel>
                <Input type="text" />
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} colorScheme="secondary" onClick={closeModal}>
              Fechar
            </Button>
            <Button variant="ghost">Cadastrar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default App;
