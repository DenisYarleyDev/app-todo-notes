import HeaderBtn from "../buttons/HeaderBtn";
import {Check, Lightbulb, Plus } from "lucide-react";
import Modal from "./Modal";
export default function Header({setModal, window, toDoNotes, finishedNotes}){

   function addNote(){
    setModal()
   }

   let color = ["bg-red-400","bg-yellow-400","bg-green-400"];
   

    return(
        <div className="w-full p-3 bg-slate-100 shadow-md flex gap-x-3">
            
            <HeaderBtn window={window} button={1} color={color[0]} addNote={addNote}>
                <Plus />
            </HeaderBtn>

            <HeaderBtn toDoNotes={toDoNotes} window={window} button={2} color={color[1]}>
                <Lightbulb/>
            </HeaderBtn>

            <HeaderBtn finishedNotes={finishedNotes} window={window} button={3} color={color[2]}>
                <Check />
            </HeaderBtn>

        </div>
    )
}