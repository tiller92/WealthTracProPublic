import {round} from '../lib/round'
import {AiOutlineReload} from 'react-icons/ai'


export default function NetWorth({stockTotalsValue,cryptoTotalValue, realestateTotalsValue,debtTotalsValue, cashTotalsValue}){
  // get the totals from all the other compenents. Want this to rerender with any change in other components

  const netWorth = (stockTotalsValue + cryptoTotalValue + realestateTotalsValue + cashTotalsValue) - (debtTotalsValue)
  
  const roundWorth = round(netWorth,2)

  const handleReload = ()=>{ window.location.reload() }
  
if(roundWorth){
  return ( 
  <>
  <div className=" border border-box p-4 text-slate-100 rounded-lg flex justify-center mx-3 my-5 ">
    <p className=''>Net Worth: ${roundWorth}</p> 
     <button onClick={handleReload} className='ml-4'>< AiOutlineReload size={20} /></button>
    </div>
  </>
  ) 
}else{
  return (
    <>
    <div className="border border-box p-4 text-slate-100   rounded-lg flex justify-center  m-5 "> 
       <button onClick={handleReload} className='ml-4'>< AiOutlineReload size={20} /></button>
      </div>
    </>
  )
}}
