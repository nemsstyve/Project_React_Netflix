import React from 'react';

//déstructuration de l'objet
const ModalAuth = (props) => {

   
    return (


      <>
        {props.isActive ? (
        <>
           
            <div className="overlay" onClick={props.closeFunction}></div>
            <center><div className="modal">
                <div className="modal__header">
                <div className="close__cross" onClick={props.closeFunction}>
                    <span></span>
                    <span></span>
                </div>
                </div>
                <div className="modal__title">
                    <h1>{props.title}</h1>
                </div>

                <div className="modal__content">
                    {props.children}
                </div>

                <br/><br/>
                <hr/>
                {props.type !== "information" ? (
                <div className="modal__actions">
                    <button
                        className="btn btn__color-white"
                        onClick={props.closeFunction}
                    >
                        Annuler
                    </button>
                    <button
                        className="btn btn__color-black"
                        onClick={props.validateFunction}
                    >
                        Valider
                    </button>
                </div>
                ): (
                    ""
                   )}

            </div>
            </center>
            
                
        </>
        ) : (
            ""
           )} 
      
      </>
    );
};

export default ModalAuth;