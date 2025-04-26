import React from "react";
import { Link } from "react-router-dom";

const mockJobs = [
    { id: 1, title: "大手自動車 車載開発 BSE募集", salary: "60万円" },
    { id: 2, title: "クラウドシステム AWSエンジニア", salary: "70万円" },
];

function JobList() {
    return (
        <div style={{ maxWidth: "800px", margin: "50px auto", padding: "20px" }}>
            <h1>案件一覧</h1>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {mockJobs.map((job) => (
                    <li key={job.id} style={{ marginBottom: "20px" }}>
                        <Link to={`/jobs/${job.id}`} style={{ color: "#003a9b", fontSize: "18px", textDecoration: "none" }}>
                            {job.title} - {job.salary}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default JobList;
