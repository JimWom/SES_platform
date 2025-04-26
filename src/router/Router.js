import React from "react";
import { Routes, Route } from "react-router-dom";
import JobsPage from "../pages/JobsPage";
import PostResumes from "../pages/PostResumes";
import PostJobs from "../pages/PostJobs";  // 主页内容
import PostJobDetail from "../pages/PostJobDetail";


function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<JobsPage />} />
            <Route path="/post-resumes" element={<PostResumes/>} />
            <Route path="/post-jobs" element={<PostJobs/>} />
            <Route path="/jobs/:id" element={<PostJobDetail />} />
        </Routes>
    );
}

export default AppRouter;
