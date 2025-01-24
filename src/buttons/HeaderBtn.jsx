import { useNavigate } from "react-router"



export default function HeaderBtn({color, children, addNote, button, window, toDoNotes, finishedNotes}){
    
    function activeWindow(){
        if(window == 1){
            if(button == 1){
                return <div className="bg-blue-500 w-[12px] h-[12px] rounded-full absolute -bottom-1 left-1/2 -translate-x-1/2 "></div>
            }
        }else if(window == 2){
            if(button == 2){
                return <div className="bg-blue-500 w-[12px] h-[12px] rounded-full absolute -bottom-1 left-1/2 -translate-x-1/2 "></div>
            }
        }else if(window == 3){
            if(button == 3){
                return <div className="bg-blue-500 w-[12px] h-[12px] rounded-full absolute -bottom-1 left-1/2 -translate-x-1/2 "></div>
            }
        }
    }

    const navigate = useNavigate();
    return(
        <button onClick={()=>{
            if(window == 1){
                if(button == 1){
                    addNote()
                }else if(button == 2){
                   const sendNotes = JSON.stringify(toDoNotes)
                   navigate(`/todo?data=${sendNotes}`);
                }else if(button == 3){
                    const sendNotes = JSON.stringify(finishedNotes)
                    navigate(`/finished?data=${sendNotes}`);
                }

            }else if(window == 2){

                if(button == 1){
                    navigate("/")
                }else if(button == 2){
                    navigate("/")
                }else if(button == 3){
                    navigate("/")
                }

            }else if(window == 3){

                if(button == 1){
                    navigate("/")
                }else if(button == 2){
                    navigate("/")
                }else if(button == 3){
                    navigate("/")
                }

            }
        }} className={`${color} rounded-md p-3 text-slate-100 relative`}>
            {children}
            {activeWindow()}
        </button>
    )
}