import React ,{useEffect, useState} from 'react'
import './App.css'

function App() {

  const [pass , setpass] = useState('');
  const [len , setLen] = useState(8);
  const [character , setcharacter] = useState(false);
  const [number , setNumber] = useState(false);
  const [symbol , setSymbol] = useState(false);
   const large ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const small="abcdefghijklmnopqrstuvwxyz";
   const num="123456789"
   const  sym="!@#$%^&*()_+"

   

   const gen = () =>{
      let emptystring="";
      emptystring+=small;
      if(character){
        emptystring+=large;
      }
      if(number){
        emptystring+=num;
      }
      if(symbol){
        emptystring+=sym;
      }
      let newPass="";
      for( let i=0;i<=len;i++){
        newPass+=emptystring.charAt(Math.floor(Math.random()*emptystring.length)); 
      }
      setpass(newPass);
    }
    useEffect(()=>{
     gen();
    },[character,number, symbol, len]);
  return (
    <>
      <div className='container'>
        <form className='form' onSubmit={(e)=> e.preventDefault()}>
      <div className='box'>PASSWORD GENERATOR
        <div className='input'>
          <input type="text" placeholder='password' value={pass} readOnly/>
          <button className='click' onClick={gen}>Copy</button>
        </div>
        <div className='box1'>
          
          <label htmlFor="points">Length of range [{len}]:</label>
          <input type="range" id="points"  value={len} name="points" min="8" max="20" onChange={(e) => {setLen(e.target.value)}}></input>
        </div>
        <div className='check'>
        <input type="checkbox" id="Numbers" name="Numbers" value="Numbers"  onChange={(e) => {setNumber(e.target.checked)}}/>
         <label htmlFor="Numbers"> Numbers</label>
         <input type="checkbox" id="Character" name="Character" value="Character"  onChange={(e) => {setcharacter(e.target.checked)}}/>
         <label htmlFor="Character"> Character</label>
         <input type="checkbox" id="Symbol" name="Symbol" value="Symbol"  onChange={(e) => {setSymbol(e.target.checked)}}/>
         <label htmlFor="Symbol"> Symbol</label>
        </div>
      </div>
      </form>
      </div>
    </>
  )
}

export default App
