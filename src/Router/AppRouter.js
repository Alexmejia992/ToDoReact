import React from 'react'
import {
        Route,
        Routes
} from 'react-router-dom';

// import Tasks from '../Pages/TasksPage';
import Index from '../Components/Index';
import Tasks from '../Components/Tasks';
import { GlobalProvider } from '../Context/tasksProviders';
import CompletedTasksPage from '../Pages/CompletedTasksPage';
// import FailedTasksPage from '../Pages/CompletedTasksPage';
import FailedTasksPage from '../Pages/FailedTaksPage'
import TrashPage from '../Pages/TrashPage';

export default function AppRouter() {

    return (
        <GlobalProvider>
            <Routes>
                <Route path="/" element={<Index />}/>
                <Route path="/tasks" element={<Tasks />}/>
                <Route path="/completedtasks" element={<CompletedTasksPage />}/>
                <Route path="/failedtasks" element={<FailedTasksPage />}/>
                <Route path="/trash" element={<TrashPage />}/>
            </Routes>
        </GlobalProvider>
    )
}
