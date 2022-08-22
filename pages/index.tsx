import type { NextPage } from 'next'

const Home: NextPage = () => {

  return (
    <div className="home">

        <div className="form medium">
          <h1>Mercado Libre Envio M1</h1>
          <h3>Usuarios de testing </h3>
          <div>Los siguientes son usuarios estan disponibles para publicar productos de prueba, 
            sin tener la necesidad de usar los propios
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
            <h3>Pasos para probar</h3>
            <ul>
              <li>Ingresar en la opcion MercadoLibre, aparece la autenticacion de la API de ML, usar user y password de la tabla de arriba y autorizar la app</li>
              <li>Verificar qeu tanto user como token esten con status verde</li>
              <li>Si el estado no esta en verde presionar refrescar para obtener un token valido</li>
              <li>Esta listo para operar, pruebe publicar</li>
            </ul>
          </p>
        </div>

    </div>
  )
}

export default Home
