import React, { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Resetear el mensaje de error en cada intento de inicio de sesión
    setError(null);

    try {
      await loginUser(e);
    } catch (error) {
      setError('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
    }
  };
  
  return (
    <div className="mt-24 flex items-center justify-center dark:bg-gray-800">
      <div className="login-container bg-white p-8 shadow-md rounded-md w-96 dark:bg-gray-700 bg-gray-100 dark:text-white text-black">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white text-gray-800">Iniciar sesión</h2>

        {error && <div className="mb-4 text-red-500">{error}</div>}

        <form id="loginForm" onSubmit={handleLogin}>
        <div className="mb-4"> 
          <label htmlFor="username" className="block text-sm font-medium text-gray-600 dark:text-gray-300">
            Usuario
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Ingresa tu usuario"
            className="mt-1 p-2 w-full border rounded-md dark:bg-gray-700 dark:text-white bg-white text-black"
          />
          </div>
          <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600 dark:text-gray-300">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Ingresa tu contraseña"
            className="mt-1 p-2 w-full border rounded-md dark:bg-gray-700 dark:text-white bg-white text-black"
          />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:focus:border-gray-600 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700 bg-blue-500 text-white hover:bg-blue-600"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
