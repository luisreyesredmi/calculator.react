import React from 'react';

const Table = () => {
    return (
        <><tr>
            <td><button id="siete" className="boton">7</button></td>
            <td><button id="ocho" className="boton">8</button></td>
            <td><button id="nueve" className="boton">9</button></td>
            <td><button id="DEL" className="botonc">DEL</button></td>
        </tr><tr>
                <td><button id="cuatro" className="boton">4</button></td>
                <td><button id="cinco" className="boton">5</button></td>
                <td><button id="seis" className="boton">6</button></td>
                <td><button id="suma" className="boton">+</button></td>
            </tr><tr>
                <td><button id="uno" className="boton">1</button></td>
                <td><button id="dos" className="boton">2</button></td>
                <td><button id="tres" className="boton">3</button></td>
                <td><button id="resta" className="boton">-</button></td>
            </tr><tr>
                <td><button id="punto" className="boton">.</button></td>
                <td><button id="cero" className="boton">0</button></td>
                <td><button id="division" className="boton">/</button></td>
                <td><button id="multiplicacion" className="boton">x</button></td>
            </tr><tr>
                <td colspan="2"><button id="reset" className="botonc" style={{width:"158px"}}>RESET</button></td>
                <td colspan="2"><button id="igual" className="botonig" style={{width: "158px"}}>=</button></td>
            </tr></>
    );
};

export default Table;