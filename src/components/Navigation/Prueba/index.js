import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Prueba = () => {
    const { token, setToken } = useContext(AuthContext);
    return (
    <h2> El contenido del token es: { token } </h2>
    <input type="text" onChange={ (e) => setToken(e.target.value)} />
    );
}

export default Prueba;
