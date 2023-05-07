function Balance() {
  const ctx = React.useContext(UserContext);
  let currentUserIndex = null;
  
  if (ctx.currentUser) {
    currentUserIndex = ctx.users.findIndex(user => user.email === ctx.currentUser.email);
  }
  
  const balance = currentUserIndex !== null ? ctx.users[currentUserIndex].balance : null;
  const userName = currentUserIndex !== null ? ctx.users[currentUserIndex].name : null;

  return (
    <>
      {currentUserIndex !== null ? (
        <>
          <h1>Hello, {userName}!</h1>
          <h2>Your balance is: ${balance}</h2>
        </>
      ) : (
        <h1>Please log in to view your balance.</h1>
      )}
    </>
  );
}