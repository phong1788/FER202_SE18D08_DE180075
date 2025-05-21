import React from "react";

function AverageAgeByOccupation() {
  const people = [
    { name: "Alice", age: 17, occupation: "Student" },
    { name: "Bob", age: 25, occupation: "Engineer" },
    { name: "Charlie", age: 16, occupation: "Student" },
    { name: "David", age: 30, occupation: "Engineer" },
    { name: "Eve", age: 22, occupation: "Designer" },
  ];

  // Nhóm người theo occupation
  const groups = people.reduce((acc, person) => {
    if (!acc[person.occupation]) {
      acc[person.occupation] = [];
    }
    acc[person.occupation].push(person);
    return acc;
  }, {});

  // Tính tuổi trung bình của từng nhóm
  const averages = Object.entries(groups).map(([occupation, group]) => {
    const totalAge = group.reduce((sum, p) => sum + p.age, 0);
    const avgAge = totalAge / group.length;
    return { occupation, avgAge: avgAge.toFixed(2) }; // giữ 2 chữ số thập phân
  });

  return (
    <div>
      <h3>Average Age by Occupation</h3>
      <ul>
        {averages.map(({ occupation, avgAge }) => (
          <li key={occupation}>
            {occupation}: {avgAge} years old
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AverageAgeByOccupation;