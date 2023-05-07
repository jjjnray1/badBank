const ctx = React.useContext(UserContext);
function Deposit(){
  
  return (
    <label className="label huge">
      Deposit:
      <input type="number" ></input> 
      <input type="submit" onSubmit=""></input>
    </label>
  )
}
