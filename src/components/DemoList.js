import React,{useMemo} from "react";
import "./DemoList.css";
const DemoList=(props)=>{
    const {items,sortState}=props;
    const sortedList=useMemo(()=>{
        const sorted=items.sort((a,b)=>a-b);
        return sortState==='ascending'?sorted:sorted.reverse();
    },[items,sortState]);
return(
<div className="demo">
<h2>{props.title}</h2>
<ul>
    {sortedList.map((item)=>(
        <li key={item}>{item}</li>
    ))}
</ul>
</div>
);
}
export default React.memo(DemoList);