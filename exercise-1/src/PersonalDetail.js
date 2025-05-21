function PersonDetail() {
  const person = { name: "Alice", age: 25, occupation: "Engineer" };

  return (
    <div>
      <h2>Person Detail</h2>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>Occupation: {person.occupation}</p>
    </div>
  );
}

export default PersonDetail;
