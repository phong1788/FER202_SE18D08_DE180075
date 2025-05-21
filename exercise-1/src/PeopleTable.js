import React from "react";

function PeopleTable() {
  const people = [
    { id: 1, name: "Alice", age: 25, occupation: "Engineer" },
    { id: 2, name: "Bob", age: 30, occupation: "Designer" },
    { id: 3, name: "Charlie", age: 28, occupation: "Teacher" }
  ];

  return (
    <div>
      <h2>People Table</h2>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {people.map(person => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PeopleTable;