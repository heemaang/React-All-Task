// Table.js
import React from 'react';
import './Table.css';

function Table() {
  const data = [
    {
      id: 1,
      name: 'Word-Counter',
      gitRepo: 'https://github.com/heemaang/Word-Counter-React-1',
      deploymentLink: 'https://heemaang.github.io/Word-Counter-React-1/',
      completed: 'Yes',
    },
    {
      id: 2,
      name: 'Calculator',
      gitRepo: 'https://github.com/heemaang/Calculator-React-2',
      deploymentLink: 'https://heemaang.github.io/Calculator-React-2/',
      completed: 'Yes',
    },
    {
        id: 3,
        name: 'Color-Picker',
        gitRepo: 'https://github.com/heemaang/Color-Picker-React-3',
        deploymentLink: 'https://heemaang.github.io/Color-Picker-React-3/',
        completed: 'Yes',
      },
      {
        id: 4,
        name: 'Dummy-Data',
        gitRepo: 'https://github.com/heemaang/Dummy-Data-React_4',
        deploymentLink: 'https://heemaang.github.io/Dummy-Data-React_4/',
        completed: 'Yes',
      },
      {
        id: 5,
        name: 'Age-Calculator',
        gitRepo: 'https://github.com/heemaang/Age-Calculator-React-5',
        deploymentLink: 'https://heemaang.github.io/Age-Calculator-React-5/',
        completed: 'Yes',
      },
      {
        id: 6,
        name: 'Protfolio',
        gitRepo: 'https://github.com/heemaang/Word-Counter-React-1',
        deploymentLink: 'https://heemaang.github.io/Word-Counter-React-1/',
        completed: 'Yes',
      },
  ];

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Git Repository</th>
            <th>Deployment Link</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <a href={item.gitRepo} target="_blank" rel="noopener noreferrer">
                  Git Repo
                </a>
              </td>
              <td>
                <a href={item.deploymentLink} target="_blank" rel="noopener noreferrer">
                  Deployment
                </a>
              </td>
              <td>{item.completed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
