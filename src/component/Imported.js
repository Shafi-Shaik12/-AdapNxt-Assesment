

import React, { useState, useEffect } from 'react';
import { RiShoppingBagLine } from 'react-icons/ri';
import { MdNavigateNext, MdDelete } from "react-icons/md";
import { IoIosArrowBack, IoIosRefresh } from "react-icons/io";



const Imported = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(3);
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [todoInput, setTodoInput] = useState({
    orderNo: '',
    customerName: '',
    orderDate: '',
    city: '',
    orderValue: '',
    status: ''
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setTodoInput({ ...todoInput, [name]: value });
  };

  const handleAddTodo = () => {
    if (Object.values(todoInput).some(val => val.trim() === '')) {
      alert('Please fill out all fields.');
      return;
    }
    setTodos([...todos, { ...todoInput, id: Date.now() }]);
    setTodoInput({
      orderNo: '',
      customerName: '',
      orderDate: '',
      city: '',
      orderValue: '',
      status: ''
    });
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const nextPage = () => {
    setCurrentPage(prev => prev + 1);
  };

  const previousPage = () => {
    setCurrentPage(prev => prev - 1);
  };

 

  return (
    <div>
      
     <div className="d-flex justify-content-end align-items-center mb-3">
  <button  className='text-primary'onClick={handleRefresh}>
    <IoIosRefresh />
    <span>Refresh</span>
  </button>
</div>


      
      <div className="mb-3">
        <input
          type="text"
          name="orderNo"
          placeholder="Order No"
          value={todoInput.orderNo}
          onChange={handleChangeInput}
        />
        <input
          type="text"
          name="orderDate"
          placeholder="Order Date"
          value={todoInput.orderDate}
          onChange={handleChangeInput}
        />
          <input
          type="text"
          name="city"
          placeholder="City"
          value={todoInput.city}
          onChange={handleChangeInput}
        />
        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          value={todoInput.customerName}
          onChange={handleChangeInput}
        />
        
      
        <input
          type="text"
          name="orderValue"
          placeholder="Order Value"
          value={todoInput.orderValue}
          onChange={handleChangeInput}
        />
        <input
          type="text"
          name="status"
          placeholder="Status"
          value={todoInput.status}
          onChange={handleChangeInput}
        />
        <button onClick={handleAddTodo} className="btn btn-sm btn-primary">Add</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Select</th>
            <th>Channel</th>
            <th>Order Number</th>
            <th>Order Date</th>
            <th>City</th>
            <th>Customer Name</th>
            <th>Order Value</th>
            <th>Status</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {currentTodos.map((todo, index) => (
            <tr key={todo.id}>
              <td><input type='checkbox' /></td>
              <td><RiShoppingBagLine /></td>
              <td>{todo.orderNo}</td>
              <td>{todo.orderDate}</td>
              <td>{todo.city}</td>
              <td>{todo.customerName}</td>
              <td>{todo.orderValue}</td>
              <td className='text-success'>{todo.status}</td>
              <td>
                <button onClick={() => handleDelete(todo.id)} className="btn btn-sm btn-danger">
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-end align-items-center">
        <button className="btn btn-primary mr-1" onClick={previousPage} disabled={currentPage === 1}>
          <IoIosArrowBack />
        </button>
        <span> {currentPage}</span>
        <button className="btn btn-primary ml-1" onClick={nextPage} disabled={indexOfLastTodo >= todos.length}>
          <MdNavigateNext />
        </button>
      </div>
    </div>
  );
}

export default Imported;

