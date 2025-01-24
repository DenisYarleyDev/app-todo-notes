import { useLocation, useSearchParams } from "react-router";
import ToDoCards from "../components/ContainerCards";
import Header from "../components/Header";
import { useEffect, useState } from "react";

function Todo(){
        
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const getNotes = queryParams.get('data');
    
    //LISTA DE NOTAS VINDA DO LOCAL STORAGE
    const [notes, listNotes] = useState(JSON.parse(getNotes)||[]);

    

    return(
        <div className="w-full min-h-screen bg-yellow-200">
            <Header window={2} />
            <ToDoCards window={2} notes={notes}/>

        </div>
    )
}

export default Todo;