import React, { useState, useEffect } from "react";
import "./JobsPage.css";

function JobsPage() {
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 10;
    const maxPageButtons = 5;

    useEffect(() => {
        const fetchJobs = async () => {
            const mockJobs = Array.from({ length: 50 }, (_, index) => ({
                title: `職位 ${index + 1}`,
                company: "サンプル会社",
                salary: "年収 400万円〜900万円",
                location: "東京都 港区",
                type: "正社員",
                features: ["完全週休二日制", "第二新卒歓迎", "産休・育休取得実績あり", "テスト１１１", "テスト１１１", "テスト１１１", "テスト１１１"],
            }));

            setTimeout(() => {
                setJobs(mockJobs);
                setLoading(false);
            }, 1000);
        };

        fetchJobs();
    }, []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (jobs.length > 0 && !selectedJob) {
            setSelectedJob(jobs[0]);
        }
    }, [jobs, selectedJob]);

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
        <div>
            <header className="App-header">
                <h1>ITサポート連携 | SES Bridge</h1>
            </header>

            <div className="search-bar">
                <input type="text" placeholder="職種、キーワード、会社名" />
                <button>求人検索</button>
            </div>

            <div className="content">
                <div className="job-list">
                    {loading ? (
                        <p>読み込み中...</p>
                    ) : (
                        <>
                            {currentJobs.map((job, index) => (
                                <div
                                    className={`job-card ${selectedJob === job ? "selected" : ""}`}
                                    key={index}
                                    onClick={() => setSelectedJob(job)}
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
                            <div className="pagination-container">
                                <div className="pagination">
                                    {currentPage > 1 && (
                                        <button className="pagination-btn" onClick={() => setCurrentPage(currentPage - 1)}>
                                            &lt;
                                        </button>
                                    )}
                                    {[...Array(endPage - startPage + 1)].map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentPage(startPage + i)}
                                            className={`pagination-btn ${currentPage === startPage + i ? "active" : ""}`}
                                        >
                                            {startPage + i}
                                        </button>
                                    ))}
                                    {currentPage < totalPages && (
                                        <button className="pagination-btn" onClick={() => setCurrentPage(currentPage + 1)}>
                                            &gt;
                                        </button>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                </div>
                <div className="separator"></div>
                <div className="job-details">
                    {selectedJob ? (
                        <>
                            <h2>{selectedJob.title}</h2>
                            <p><strong>会社:</strong> {selectedJob.company}</p>
                            <p><strong>年収:</strong> {selectedJob.salary}</p>
                            <p><strong>勤務地:</strong> {selectedJob.location}</p>
                            <p><strong>雇用形態:</strong> {selectedJob.type}</p>
                            <h3>特長</h3>
                            <ul>
                                {selectedJob.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </>
                    ) : (
                        <p>求人を選択してください</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default JobsPage;
