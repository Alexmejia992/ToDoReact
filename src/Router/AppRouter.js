import React from 'react'
import {
        Route,
        Routes
} from 'react-router-dom';

// import Tasks from '../Pages/TasksPage';
import Index from '../Components/Index';
import Tasks from '../Components/Tasks';
import CompletedTasksPage from '../Pages/CompletedTasksPage';
// import FailedTasksPage from '../Pages/CompletedTasksPage';
import FailedTasksPage from '../Pages/FailedTaksPage'
import TrashPage from '../Pages/TrashPage';

export default function AppRouter() {
    // state = {
    //     tasks : [
    //         description = {

    //         }
    //     ],
        
    //     //   const [task, setTask] = useState("");
    //     //   const [description, setDescription] = useState("");
    // }
    

    //   let navigate = useNavigate();
    
    //   const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setTasks([...tasks, { task, description, id: shortid.generate() }]);
    //     setTask("");
    //     setDescription(""); 
        
    //     navigate('tasks')
    //   };
    
    //   const removeTask = (id) => {
    //     const modifiedTasks = tasks.filter((item) => item.id !== id);
    //     setTasks(modifiedTasks);
    //   };
    return (
            <Routes>
                <Route path="/" element={<Index />}/>
                <Route path="/tasks" element={<Tasks />}/>
                <Route path="/completedtasks" element={<CompletedTasksPage />}/>
                <Route path="/failedtasks" element={<FailedTasksPage />}/>
                <Route path="/trash" element={<TrashPage />}/>
            </Routes>
    )
}
