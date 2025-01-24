import { Check, CircleAlert, Section } from "lucide-react";
import DeleteCard from "../buttons/DeleteCard";

export default function Card({color,isComplete,title,description,id, complete, deleteNotes, notes, window}){
    
    
    //FUNÇÃO MARCAR TAREFA COMO CONCLUIDA
    function through(complete){
        if(complete == true){
            return "line-through";
        }
    }

    //FUNÇÃO PEGAR ID DA CARD PARA DELETAR USADA DENTRO DO BTN DELETE CARD
    function getNote(){
        return(id);
    }

    function detectWindow(){
    if(window == 1){
       return <DeleteCard getNote={getNote} notes={notes} deleteNotes={deleteNotes}/>
    }else if(window == 2){
        return <button className="absolute top-1 end-1"><CircleAlert/></button>
    }else if(window == 3){
        return <button className="absolute top-1 end-1"><Check/></button>
    }
    }

    
    
    return(
            //CORPO DA CARD, NOTA
            <div onClick={()=>{
                    if(window == 1){
                        isComplete(id)
                    }
                }} className={`${color} w-[250px] h-[250px] rounded-md shadow p-4 text-center relative text-slate-700 ${through(complete)}`}>
                    {detectWindow()}
                <p className="font-bold text-slate-800">{title}</p>
                <hr className="border-slate-800"></hr>
                <p className="text-slate-800">{description}</p>

            </div>
        
    )


    
}