function AllData() {
  const ctx = React.useContext(UserContext);

  return (
    <>
      <h5>All Data in Store</h5>
      {ctx.users.map((user, index) => (
        <Card
          key={index}
          bgcolor="info"
          header={`User ${index + 1}`}
          body={`Name: ${user.name} ,
           \n
          Email: ${user.email} ,
           \n
          Password: ${user.password} , 
          \n
          Balance: ${user.balance}`}
        />
      ))}
    </>
  );
}
