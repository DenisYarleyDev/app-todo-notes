import { useState } from "react";
import Card from "./Card";

export default function ContainerCards({notes, isComplete, deleteNotes, window}){
    
    function emptyList(){
        if(window == 1){
        
            if(notes[0] == null){
                return <p>APERTE EM + PARA CRIAR UM NOTA</p>
            }

        }else if(window == 2){
        
            if(notes[0] == null){
                return <p>SUAS NOTAS PENDENTES SERÃO LISTADAS AQUI!</p>
            }
            
        }else if(window == 3){
        
            if(notes[0] == null){
                return <p>SUAS NOTAS FINALIZADAS SERÃO LISTADAS AQUI! </p>
            }
            
        }
    }

    //CORPO DA PÁGINA
    return(
        <div className={`text-center flex flex-row min-h-screen flex-wrap gap-3 w-full justify-center p-6`}>
            {emptyList()}
            {
                notes.map((note)=>{
                    return  <Card window={window} deleteNotes={deleteNotes} notes={notes} isComplete={isComplete} complete={note.complete} key={note.id} id={note.id} title={note.title} description={note.description} color={note.color}/>
                    
                })
            }
        </div>
    )
}