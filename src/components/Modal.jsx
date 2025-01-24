import { useState } from "react";

export default function Modal({modal, setModal, notes, randomColors, setNotes}){

    //FUNÇÃO SETAR DISPLAY MODAL
    function display(){
       if(modal == true){
         return "flex";
        }else{
            return "hidden";
        }
    }

    //ESTADO TITULO E DESCRIÇÃO DAS NOTAS
    const [title, newTitle] = useState("");
    const [description, newDescription] = useState("");
    

    return(
        <div onClick={setModal} className={`text-slate-950 z-10 ${display()} bg-slate-900 fixed w-screen min-h-screen flex bg-opacity-80 items-center justify-center`}>

            <div onClick={(e)=>{
                e.stopPropagation();
            }} className=" shadow-md rounded-md w-[80%] bg-slate-100 flex justify-center flex-col gap-y-6 opacity-100 p-3">

                <input value={title} onChange={(event)=>{
                    const setTitle = event.target.value
                    newTitle(setTitle);
                }} className="shadow p-2 rounded-md" type="text" placeholder="Title" />

                <input value={description} onChange={(event)=>{
                    const setDescription = event.target.value
                    newDescription(setDescription);
                }} className="shadow p-2 rounded-md" type="text" placeholder="Description" />

                <button onClick={()=>{
                    if(title && description){

                        // ADICIONANDO NOVA NOTA A LISTA DE NOTAS NO INDEX.JSX
                        const note = {
                            id: notes.length + 1,
                            title: title,
                            description: description,
                            complete: false,
                            color: randomColors()
                        }

                        setNotes([...notes, note]);
                        setModal();
                        newDescription("");
                        newTitle("");
                    }else{
                        setModal();
                    }
                }} className="shadow p-2 rounded-md bg-green-400 font-bold text-slate-50">Add note</button>

            </div>
        </div>
    )
}