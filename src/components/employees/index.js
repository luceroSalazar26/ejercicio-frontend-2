import React, { Component}  from 'react';

// Calls the right component to show a list of employees, add, and remove elements
class Employees extends Component {
  componentWillMount() {
    this.loadData(this.props.employees)
  }

  loadData(employees){
    this.setState({
      employees: employees
    })
  }

  renderTable() {
    let employees = this.state.employees.map(function (employee) {
      return (
        <tr key={employee.id}>
          <td>{employee.id}</td>
          <td>{employee.name}</td>
          <td>{employee.company}</td>
          <td>{employee.salary}</td>
          <td>{employee.age}</td>
          <td>{employee.phone}</td>
          <td>{employee.email}</td>
        </tr>
      )
    })

    let renderTable;
    renderTable = (
      <div>
        <table>
          <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Empresa</th>
            <th>Salario</th>
            <th>Edad</th>
            <th>Teléfono</th>
            <th>Correo</th>
          </tr>
          </thead>
          <tbody>{employees}</tbody>
        </table>
      </div>
    )
    return renderTable
  }

  static renderInstructions() {
    return(
      <div >
        <h1>Lista de empleados</h1>
        <p>Ejercicio para aplicar como front-end en Resuelve.</p>
        <h2>Para JS</h2>
        <ol>
          <li>Clona el proyecto e instala las dependencias</li>
          <li>El archivo <code>src/App.js</code> crear una tabla que muestre todos las propiedades de los empleados cumpliendo las siguientes características</li>
          <ul>
            <li>El salario está en pesos mexicanos</li>
            <li>Mostrar el salario en formato de dinero, es decir 16900 se muestra como $ 16,900.00</li>
            <li>Si el salario tuviera decimales se deben mostrar limitados a 2 decimales, es decir 16900.333 se debe mostrar como $ 16,900.33</li>
          </ul>
          <li>Adicionalmente en la tabla se debe de poder</li>
          <ul>
            <li>Agregar empleados (Un botón al principio o final de la tabla)</li>
            <li>Editar empleados (Un botón al principio o final de la tabla)</li>
            <li>El nombre de la empresa no se debe poder modificar</li>
            <li>Borrar empleados (Un botón de borrar por cada empleado)</li>
            <li>Agregar un botón que muestre los salarios en USD, tipo de cambio de US $1 = MXN $21.50</li>
          </ul>
          <li>En el estado de <code>src/App.js</code> se deben de mantener</li>
          <ul>
            <li>Empleados</li>
            <li>Si se están mostrando los salarios con MXN o USD</li>
            <li>El tipo de cambio</li>
          </ul>
          <li>Poder filtrar empleados con un campo que permita buscar a los empleados por nombre y empresa</li>
          <ul>
            <li>El mismo campo debe funcionar para nombre y empresa</li>
            <li>Se deben actualizar los resultados conforme se vayan escribiendo</li>
          </ul>
          <li>Agregar un botón que imprima la lista de empleados a la consola</li>
        </ol>
        <h2>Para CSS</h2>
        <p>Ejecutar SASS con <code>sass -w css/main.scss:src/main.css</code></p>
        <p>El CSS para la tabla puedes colocarlo en el archivo <code>css/main.scss</code></p>
        <p>La tabla debe contener las siguientes características, algunas necesitarán agregar clases con CSS</p>
        <ol>
          <li>Las filas deben de alternar el color del fondo</li>
          <li>Al hacer hover en una fila debe cambiar el color del fondo</li>
          <li>Los montos deben ir alineados a la derecha</li>
          <li>Los caracteres de los montos deben estar monoespaciados</li>
          <li>Si el salario es menor a 10,000 mostrarlo en color rojo, si es mayor mostrarlo en color verde</li>
          <li>Los botones de texto (como agregar nuevo empleado o imprimir a consola) deben tener fondo transparente y tener texto y borde en color verde</li>
          <li>Al hacer hover deben de poner su color de fondo con el mismo color del borde y el texto pasa a ser color blanco, esto debe tener una transición</li>
        </ol>
      </div>
    )
  }

  render() {
    return(
      <div>
        <h1>Empleados bbs</h1>
        {this.renderTable()}
        {Employees.renderInstructions()}
      </div>
    )
  }
}

export default Employees
