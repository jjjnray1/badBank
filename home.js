function Home(){
  const ctx = React.useContext(UserContext);
  return (
    <Card
      txtcolor="black"
      header="BadBank Home Page"
      title="Welcome to Jeremiah's Bank"
      
      text="You can move around using the navigation bar."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
