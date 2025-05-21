import React from "react";

function OldestAndYoungest() {
  const people = [
    { name: "Alice", age: 17, occupation: "Student" },
    { name: "Bob", age: 25, occupation: "Engineer" },
    { name: "Charlie", age: 16, occupation: "Student" },
    { name: "David", age: 30, occupation: "Engineer" },
    { name: "Eve", age: 22, occupation: "Designer" },
  ];

  // Tìm người già nhất
  const oldest = people.reduce((oldestPerson, current) =>
    current.age > oldestPerson.age ? current : oldestPerson,
  people[0]);

  // Tìm người trẻ nhất
  const youngest = people.reduce((youngestPerson, current) =>
    current.age < youngestPerson.age ? current : youngestPerson,
  people[0]);

  return (
    <div>
      <h3>Oldest and Youngest Person</h3>
      <p>
        <strong>Oldest:</strong> {oldest.name}, Age: {oldest.age}, Occupation: {oldest.occupation}
      </p>
      <p>
        <strong>Youngest:</strong> {youngest.name}, Age: {youngest.age}, Occupation: {youngest.occupation}
      </p>
    </div>
  );
}

export default OldestAndYoungest;