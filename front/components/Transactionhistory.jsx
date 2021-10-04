import Styled from "styled-components"
import useInput from '../hooks/useInput'
import {useSelector} from 'react-redux' 
import {useState} from 'react'



const Transactionhistory = ()=>{
    const [records,setRecords] = useState();
    const data = useSelector(state=>state.tradingrecord.traderecord)
    // const test = () => {    
    //     if(data==undefined){
    //         return setRecords(data)
            
    //     }else{
    //         const list = () => {
    //             let recorditem = data.map((v)=>{
    //                 return(
    //                     <tr key={v.pk}>
    //                         <td>{v.ordertime}</td>
    //                         <td>{v.ordertype}</td>
    //                         <td>{v.price}</td>
    //                         <td>{v.qty}</td>
    //                         <td>{v.price * v.qty}</td>
    //                     </tr>
    //                 )
    //             })
    //             // console.log(recorditem,'recorditemmmmmmmmmmmmmmmmmmmmmmmmm')
    //             console.log('나오나')
    //             const list
    //         }
    //         return list
    //     }
    // }
   
    return(
        <>
            <TransactionWrap>
                <table>
                    <thead>
                        <tr>
                            <th>체결시간</th>
                            <th>구분</th>
                            <th>체결가격</th>
                            <th>체결수량</th>
                            <th>체결금액</th>
                        </tr>
                    </thead>
                    <tbody>
                        {test}
                    </tbody>
                </table>
            </TransactionWrap>
        </>
    )
}

export default Transactionhistory

const TransactionWrap = Styled.div`
    padding-top : 3%;
    box-sizing:border-box;
    &>table{
        width:50%;
        margin-top:20px;
    }

    & > table > thead > tr >  th, & > table > tbody > tr > td {
        height:25px;
        font-size:15px;
        vertical-align:center;
        background-color:hsl(205, 77%, 27%);
        color:white;
        line-height:30px;
    }
    & > table > tbody > tr >td{
        text-align:center;
    }

`