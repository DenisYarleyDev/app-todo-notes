import { SquareX, X } from "lucide-react";


export default function DeleteCard({notes,deleteNotes,getNote}){
    return(
        <div className="absolute top-1 end-1">
            <button className="text-slate-700" onClick={(e)=>{
                e.stopPropagation()
                const newNotes = notes.filter((note)=>{
                    if(getNote() != note.id){
                        return true;
                    }
                })

                deleteNotes(newNotes)
            }}>
                <X />
            </button>
        </div>
    )
}