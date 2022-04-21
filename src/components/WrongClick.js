import React, { useEffect, useState } from "react";

function WrongClick({resetModal}) {

  const [modalClass, setModalClass] = useState('')

  useEffect(() => {
    setModalClass('on-wrong-click')
  },[])

  return (
    <div className={`${modalClass} init-modal`} onTransitionEnd={resetModal}></div>
  )
}

export default WrongClick