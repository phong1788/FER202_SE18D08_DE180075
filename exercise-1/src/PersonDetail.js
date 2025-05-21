function PersonDetail() {
  const person = {
    name: "Alice",
    age: 25,
    occupation: "Engineer"
  };

  return (
    <div>
      <h2>Person Detail</h2>
      <p>Name: {person.name}, Age: {person.age}, Occupation: {person.occupation}</p>
    </div>
  );
}

export default PersonDetail;
