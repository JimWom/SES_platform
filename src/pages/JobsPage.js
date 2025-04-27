// src/pages/JobsPage.js

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./JobsPage.css";

function JobsPage() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 10;
    const maxPageButtons = 5;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchJobs = async () => {
            const mockJobs = Array.from({ length: 20 }, (_, index) => ({
                id: index + 1,
                title: `職位 ${index + 1}`,
                company: "サンプル会社",
                salary: "年収 400万円〜900万円",
                location: "東京都 港区",
                type: "正社員",
                features: ["完全週休二日制", "第二新卒歓迎", "産休・育休取得実績あり"],
            }));

            setTimeout(() => {
                setJobs(mockJobs);
                setLoading(false);
            }, 500);
        };

        fetchJobs();
    }, []);

    const totalPages = Math.ceil(jobs.length / jobsPerPage);
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

    let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
    let endPage = startPage + maxPageButtons - 1;
    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxPageButtons + 1);
    }

    return (
        <div className="jobs-page">
            {loading ? (
                <p>読み込み中...</p>
            ) : (
                <>
                    <div className="job-list">
                        {currentJobs.map((job) => (
                            <div
                                className="job-card"
                                key={job.id}
                                onClick={() => navigate(`/jobs/${job.id}`)}
                                style={{ cursor: "pointer" }}
                            >
                                <h2>{job.title}</h2>
                                <p>{job.company}</p>
                                <p>{job.salary}</p>
                                <p>{job.location}</p>
                                <p>{job.type}</p>
                                <div className="features">
                                    {job.features.map((feature, idx) => (
                                        <span key={idx} className="feature">
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pagination-container">
                        <div className="pagination">
                            {currentPage > 1 && (
                                <button onClick={() => setCurrentPage(currentPage - 1)}>
                                    &lt;
                                </button>
                            )}
                            {[...Array(endPage - startPage + 1)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(startPage + i)}
                                    className={currentPage === startPage + i ? "active" : ""}
                                >
                                    {startPage + i}
                                </button>
                            ))}
                            {currentPage < totalPages && (
                                <button onClick={() => setCurrentPage(currentPage + 1)}>
                                    &gt;
                                </button>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default JobsPage;
