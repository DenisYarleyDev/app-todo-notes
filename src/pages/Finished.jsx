import { useLocation, useSearchParams } from "react-router";
import FinishedCards from "../components/ContainerCards";
import Header from "../components/Header";
import { useEffect, useState } from "react";

function Finished(){
        
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const getNotes = queryParams.get('data');

    
    //LISTA DE NOTAS VINDA DO LOCAL STORAGE
    const [notes, listNotes] = useState([]);
    useEffect(()=>{
        const setNotes = [];
        JSON.parse(getNotes).forEach((note)=>{
            if(note.complete == true){            
               setNotes.push({...note, complete: false})
            }
        });

        listNotes(setNotes)
    },[])
    

    return(
        <div className="w-full min-h-screen bg-green-200">
            <Header window={3} />
            <FinishedCards window={3} notes={notes}/>

        </div>
    )
}

export default Finished;