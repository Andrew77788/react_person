function Person({ person }) {
  let partner = 'husband';
  if (person.sex === 'm') {
    partner = 'wife';
  }
  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age && <p className="Person__age">I am {person.age}</p>}
      {person.partnerName ? (
        <p className="Person__partner">
          {person.partnerName} is my {partner}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
}

export default Person;
