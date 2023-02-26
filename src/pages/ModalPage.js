import React, { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Agreement</p>
    </Modal>
  );
  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus
        lacus rutrum libero faucibus, non efficitur est tristique. Praesent non
        tellus ac massa aliquam aliquam. Nullam tincidunt diam vitae mauris
        efficitur rhoncus id ut lacus. Cras urna enim, imperdiet vel fringilla
        eget, commodo vitae purus. Curabitur pharetra gravida nulla, vitae
        auctor mi tempor ac. Ut auctor placerat sapien a facilisis. Aliquam
        vulputate, neque id condimentum finibus, tortor tortor ultricies erat,
        sed iaculis nisi quam a est. Nulla euismod auctor sem, sed vulputate
        neque mattis et. Pellentesque vitae ante sit amet erat vestibulum
        interdum vitae ut nisl. Ut volutpat sollicitudin est ac sollicitudin.
        Nunc vel sapien in purus mollis molestie vel et libero. Mauris imperdiet
        nunc vel leo egestas maximus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus
        lacus rutrum libero faucibus, non efficitur est tristique. Praesent non
        tellus ac massa aliquam aliquam. Nullam tincidunt diam vitae mauris
        efficitur rhoncus id ut lacus. Cras urna enim, imperdiet vel fringilla
        eget, commodo vitae purus. Curabitur pharetra gravida nulla, vitae
        auctor mi tempor ac. Ut auctor placerat sapien a facilisis. Aliquam
        vulputate, neque id condimentum finibus, tortor tortor ultricies erat,
        sed iaculis nisi quam a est. Nulla euismod auctor sem, sed vulputate
        neque mattis et. Pellentesque vitae ante sit amet erat vestibulum
        interdum vitae ut nisl. Ut volutpat sollicitudin est ac sollicitudin.
        Nunc vel sapien in purus mollis molestie vel et libero. Mauris imperdiet
        nunc vel leo egestas maximus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus
        lacus rutrum libero faucibus, non efficitur est tristique. Praesent non
        tellus ac massa aliquam aliquam. Nullam tincidunt diam vitae mauris
        efficitur rhoncus id ut lacus. Cras urna enim, imperdiet vel fringilla
        eget, commodo vitae purus. Curabitur pharetra gravida nulla, vitae
        auctor mi tempor ac. Ut auctor placerat sapien a facilisis. Aliquam
        vulputate, neque id condimentum finibus, tortor tortor ultricies erat,
        sed iaculis nisi quam a est. Nulla euismod auctor sem, sed vulputate
        neque mattis et. Pellentesque vitae ante sit amet erat vestibulum
        interdum vitae ut nisl. Ut volutpat sollicitudin est ac sollicitudin.
        Nunc vel sapien in purus mollis molestie vel et libero. Mauris imperdiet
        nunc vel leo egestas maximus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus
        lacus rutrum libero faucibus, non efficitur est tristique. Praesent non
        tellus ac massa aliquam aliquam. Nullam tincidunt diam vitae mauris
        efficitur rhoncus id ut lacus. Cras urna enim, imperdiet vel fringilla
        eget, commodo vitae purus. Curabitur pharetra gravida nulla, vitae
        auctor mi tempor ac. Ut auctor placerat sapien a facilisis. Aliquam
        vulputate, neque id condimentum finibus, tortor tortor ultricies erat,
        sed iaculis nisi quam a est. Nulla euismod auctor sem, sed vulputate
        neque mattis et. Pellentesque vitae ante sit amet erat vestibulum
        interdum vitae ut nisl. Ut volutpat sollicitudin est ac sollicitudin.
        Nunc vel sapien in purus mollis molestie vel et libero. Mauris imperdiet
        nunc vel leo egestas maximus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus
        lacus rutrum libero faucibus, non efficitur est tristique. Praesent non
        tellus ac massa aliquam aliquam. Nullam tincidunt diam vitae mauris
        efficitur rhoncus id ut lacus. Cras urna enim, imperdiet vel fringilla
        eget, commodo vitae purus. Curabitur pharetra gravida nulla, vitae
        auctor mi tempor ac. Ut auctor placerat sapien a facilisis. Aliquam
        vulputate, neque id condimentum finibus, tortor tortor ultricies erat,
        sed iaculis nisi quam a est. Nulla euismod auctor sem, sed vulputate
        neque mattis et. Pellentesque vitae ante sit amet erat vestibulum
        interdum vitae ut nisl. Ut volutpat sollicitudin est ac sollicitudin.
        Nunc vel sapien in purus mollis molestie vel et libero. Mauris imperdiet
        nunc vel leo egestas maximus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus
        lacus rutrum libero faucibus, non efficitur est tristique. Praesent non
        tellus ac massa aliquam aliquam. Nullam tincidunt diam vitae mauris
        efficitur rhoncus id ut lacus. Cras urna enim, imperdiet vel fringilla
        eget, commodo vitae purus. Curabitur pharetra gravida nulla, vitae
        auctor mi tempor ac. Ut auctor placerat sapien a facilisis. Aliquam
        vulputate, neque id condimentum finibus, tortor tortor ultricies erat,
        sed iaculis nisi quam a est. Nulla euismod auctor sem, sed vulputate
        neque mattis et. Pellentesque vitae ante sit amet erat vestibulum
        interdum vitae ut nisl. Ut volutpat sollicitudin est ac sollicitudin.
        Nunc vel sapien in purus mollis molestie vel et libero. Mauris imperdiet
        nunc vel leo egestas maximus.
      </p>
    </div>
  );
}

export default ModalPage;
