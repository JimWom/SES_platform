// src/App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";

function App() {
    const [jobs, setJobs] = useState([]); // 存储职位数据
    const [selectedJob, setSelectedJob] = useState(null); // 存储选中的职位
    const [loading, setLoading] = useState(true); // 控制加载状态

    useEffect(() => {
        // 模拟 API 请求
        const fetchJobs = async () => {
            const mockJobs = [
                {
                    title: "富士フィルムのオープンポジション",
                    company: "富士フィルム株式会社",
                    salary: "年収 400万円〜900万円",
                    location: "東京都 港区",
                    type: "正社員",
                    features: ["完全週休二日制", "第二新卒歓迎", "産休・育休取得実績あり"],
                },
                {
                    title: "オープンポジション",
                    company: "ユニ・チャーム株式会社",
                    salary: "年収 450万円〜650万円",
                    location: "東京都 港区",
                    type: "正社員",
                    features: ["フレックスタイム制あり", "寮・社宅あり"],
                },
                {
                    title: "富士フィルムのオープンポジション",
                    company: "富士フィルム株式会社",
                    salary: "年収 400万円〜900万円",
                    location: "東京都 港区",
                    type: "正社員",
                    features: ["完全週休二日制", "第二新卒歓迎", "産休・育休取得実績あり"],
                },                {
                    title: "富士フィルムのオープンポジション",
                    company: "富士フィルム株式会社",
                    salary: "年収 400万円〜900万円",
                    location: "東京都 港区",
                    type: "正社員",
                    features: ["完全週休二日制", "第二新卒歓迎", "産休・育休取得実績あり"],
                },                {
                    title: "富士フィルムのオープンポジション",
                    company: "富士フィルム株式会社",
                    salary: "年収 400万円〜900万円",
                    location: "東京都 港区",
                    type: "正社員",
                    features: ["完全週休二日制", "第二新卒歓迎", "産休・育休取得実績あり"],
                },                {
                    title: "富士フィルムのオープンポジション",
                    company: "富士フィルム株式会社",
                    salary: "年収 400万円〜900万円",
                    location: "東京都 港区",
                    type: "正社員",
                    features: ["完全週休二日制", "第二新卒歓迎", "産休・育休取得実績あり"],
                },                {
                    title: "富士フィルムのオープンポジション",
                    company: "富士フィルム株式会社",
                    salary: "年収 400万円〜900万円",
                    location: "東京都 港区",
                    type: "正社員",
                    features: ["完全週休二日制", "第二新卒歓迎", "産休・育休取得実績あり"],
                },                {
                    title: "富士フィルムのオープンポジション",
                    company: "富士フィルム株式会社",
                    salary: "年収 400万円〜900万円",
                    location: "東京都 港区",
                    type: "正社員",
                    features: ["完全週休二日制", "第二新卒歓迎", "産休・育休取得実績あり"],
                },                {
                    title: "富士フィルムのオープンポジション",
                    company: "富士フィルム株式会社",
                    salary: "年収 400万円〜900万円",
                    location: "東京都 港区",
                    type: "正社員",
                    features: ["完全週休二日制", "第二新卒歓迎", "産休・育休取得実績あり"],
                },                {
                    title: "富士フィルムのオープンポジション",
                    company: "富士フィルム株式会社",
                    salary: "年収 400万円〜900万円",
                    location: "東京都 港区",
                    type: "正社員",
                    features: ["完全週休二日制", "第二新卒歓迎", "産休・育休取得実績あり"],
                },                {
                    title: "富士フィルムのオープンポジション",
                    company: "富士フィルム株式会社",
                    salary: "年収 400万円〜900万円",
                    location: "東京都 港区",
                    type: "正社員",
                    features: ["完全週休二日制", "第二新卒歓迎", "産休・育休取得実績あり"],
                },                {
                    title: "富士フィルムのオープンポジション",
                    company: "富士フィルム株式会社",
                    salary: "年収 400万円〜900万円",
                    location: "東京都 港区",
                    type: "正社員",
                    features: ["完全週休二日制", "第二新卒歓迎", "産休・育休取得実績あり"],
                },
            ];

            setTimeout(() => {
                setJobs(mockJobs); // 更新职位数据
                setLoading(false); // 关闭加载状态
            }, 1000);
        };

        fetchJobs();
    }, []);

    return (
        <div className="App">
            <Header />

            {/* Header */}
            <header className="App-header">
                <h1>ITサポート連携 | SES Bridge</h1>
            </header>

            {/* Search Bar */}
            <div className="search-bar">
                <input type="text" placeholder="職種、キーワード、会社名" />
                <button>求人検索</button>
            </div>

            {/* 主体内容：左侧职位列表 + 右侧职位详情 */}
            <div className="content">
                {/* 左侧职位列表 */}
                <div className="job-list">
                    {loading ? (
                        <p>読み込み中...</p>
                    ) : (
                        jobs.map((job, index) => (
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
                        ))
                    )}
                </div>

                {/* 右侧职位详情 */}
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

export default App;
