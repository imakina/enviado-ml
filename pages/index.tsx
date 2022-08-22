import type { NextPage } from 'next'

const Home: NextPage = () => {

  return (
    <div className="home">

        <div className="form medium">
          <h1>Mercado Libre Envio M1</h1>
          <h3>Usuarios de testing </h3>
          <div>Los siguientes son usuarios estan disponibles para publicar productos de prueba, 
            tienen caducidad de 7 dias desde el 18-08
          </div>
          <p>
            <table className='table'>
              <thead>
                <tr><th>user</th><th>password</th></tr>
              </thead>
              <tbody>
                <tr><td>TEST5KEHQSZ8</td><td>qatest8371</td></tr>
                <tr><td>TESTL9Y4QVWB</td><td>psYLrkA1gn</td></tr>
              </tbody>
            </table>
            <h3>Pasos para interactuar con la app</h3>
            <ul>
              <li>Ingresar en la opcion MercadoLibre</li>
              <li>Nos redirecciona a la autenticacion de Mercado Libre, usar user y password de la tabla de arriba y autorizar la app</li>
              <li>Verificar qeu tanto user como token esten con status verde</li>
              <li>Si el estado no esta en verde, obtener un token valido presionando refrescar</li>
              <li>Si ambos estan verde, puede consultar los servicios, publicar un articulo, revisar ordenes, etc</li>
            </ul>
          </p>
        </div>

    </div>
  )
}

export default Home
