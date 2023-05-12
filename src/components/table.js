import React from 'react';
import { useGlobalContext } from '../globalContextProvider';

const Table = () => {
  const { getTableData, getSubmitCount, removeData, decrementSubmitCount } =
    useGlobalContext();

  const onDelete = (email) => {
    removeData(email);
    decrementSubmitCount();
  };

  return (
    <div>
      {getTableData.length > 0 ? (
        <div>
          <div style={{ color: '#000' }}>Submit count:{getSubmitCount}</div>
          <table>
            <thead>
              <th>Username</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Delete</th>
            </thead>
            <tbody>
              {getTableData?.map((d, key) => (
                <tr>
                  <td>{d.userName}</td>
                  <td>{d.email}</td>
                  <td>{d.firstName}</td>
                  <td>{d.lastName}</td>
                  <td>
                    <button onClick={() => onDelete(d.email)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Table;
