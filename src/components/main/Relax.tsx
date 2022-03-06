<<<<<<< HEAD
const Relax : React.FC = () => (
  <div
    className="d-flex justify-content-around align-items-center mt-5
      fst-italic"
  >
    <h2>
      Sem tarefas hoje.
      <br />
      Dia de folga?
    </h2>
    <img
      style={ {
        width: '30em',
      } }
      className=" rounded-3"
      src="https://c.tenor.com/UIOAoI_h-XsAAAAd/sleep-tom-and-jerry.gif"
      alt="Relaxing with TOM"
    />
  </div>
);
=======
import React from 'react'

function Relax() {
  return (
    <div
      className="d-flex justify-content-around align-items-center mt-5
      fst-italic container"
    >
      <h2
        style={{
          width: '50%',
        }}
      >Sem tarefas hoje.<br />Dia de folga?</h2>
      <img
        style={{
          width: '50%',
        }}
        className="rounded-3 container-sm"
        src="https://c.tenor.com/UIOAoI_h-XsAAAAd/sleep-tom-and-jerry.gif"
        alt="Relaxing with TOM"
      />
    </div>
  )
}
>>>>>>> main

export default Relax;
