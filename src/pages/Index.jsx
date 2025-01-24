import ContainerCards from "../components/ContainerCards";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { useEffect, useState } from "react";

function Index(){
        //FUNÇÃO SETAR COR ALEATÓRIA NO TAILWINDCSS
        function randomColors(){
            const index = Math.round((Math.random() * 5));
            const tailColors = [
                "bg-green-400",
                "bg-red-400",
                "bg-pink-400",
                "bg-yellow-400",
                "bg-purple-400",
                "bg-blue-400"
            ]
    
            return(
                tailColors[index]
            )
    
        }
    
        //LISTA DE NOTAS VINDA DO LOCAL STORAGE
        const [notes, listNotes] = useState(JSON.parse(localStorage.getItem("Notes"))||[]);

        function setNotes(notes){
            listNotes(notes)
        }

        function deleteNotes(notes){
            listNotes(notes)
        }

        //ARMAZENAR NO LOCASTORAGE
        useEffect(()=>{
            localStorage.setItem("Notes", JSON.stringify(notes))
        },[notes])

        //FILTRAR NOTAS PENDENTES PARA A PAGE ToDo
        const [toDoNotes, setToDoNotes] = useState([])
        useEffect(()=>{
            const newToDoNotes = notes.filter((note)=>{
                if(note.complete == false){
                    return true;
                }
            })
            setToDoNotes(newToDoNotes);
        },[notes]);

        //FILTRAR NOTAS CONCLUÍDAS PARA A PAGE FINISHED
        const [finishedNotes, setFinishedNotes] = useState([])
        useEffect(()=>{
            const newFinishedNotes = notes.filter((note)=>{
                if(note.complete == true){
                    return true;
                }
            })
            setFinishedNotes(newFinishedNotes);
        },[notes]);
    
    
        //FUNÇÃO SETAR TAREFA COMO CONCLUIDA
        function isComplete(key){
         const newNotes = notes.map((note)=>{
                if(note.id == key){
                    note.complete = !note.complete
                    return note;
                }else{
                    return note;
                }
            })
    
            listNotes(newNotes);
        }
    


        //ALTERA ESTADO DO MODAL
        const [modal, relModal] = useState(false);

        //FUNÇÃO ALTERAR ESTADO DO MODAL NO ONCLICK
        function setModal(){
            relModal(!modal);
        }

    

    return(
        <div className="w-full min-h-screen bg-red-200">
            <Modal modal={modal} setModal={setModal} notes={notes} randomColors={randomColors} setNotes={setNotes}/>
            <Header toDoNotes={toDoNotes} finishedNotes={finishedNotes} window={1} setModal={setModal}/>
            <ContainerCards window={1} deleteNotes={deleteNotes} notes={notes} isComplete={isComplete}/>

        </div>
    )
}


export default Index;