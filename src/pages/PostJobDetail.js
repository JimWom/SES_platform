// src/pages/PostJobDetail.js

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./PostJobDetail.css";

function PostJobDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    // 临时模拟的职位详细数据（你可以将来替换成真实API数据）
    const jobDetail = {
        title: `職位 ${id}`,
        company: "サンプル会社",
        salary: "年収 400万円〜900万円",
        location: "東京都 港区",
        experience: "3年以上",
        remote: "可",
        interview: "1回",
        description: `こちらは職位${id}の詳細情報です。AWSクラウド環境構築、Lambda設計開発案件などなど...`,
    };

    return (
        <div className="post-job-detail-page">
            {/* 返回按钮 */}
            <button className="back-button" onClick={() => navigate(-1)}>
                ← 案件一覧に戻る
            </button>

            {/* 职位详细信息 */}
            <div className="job-detail-card">
                <h1>{jobDetail.title}</h1>
                <p><strong>会社名：</strong>{jobDetail.company}</p>
                <p><strong>年収：</strong>{jobDetail.salary}</p>
                <p><strong>勤務地：</strong>{jobDetail.location}</p>
                <p><strong>経験年数：</strong>{jobDetail.experience}</p>
                <p><strong>リモート：</strong>{jobDetail.remote}</p>
                <p><strong>面談回数：</strong>{jobDetail.interview}</p>

                <h2>案件詳細</h2>
                <p className="description">{jobDetail.description}</p>
            </div>
        </div>
    );
}

export default PostJobDetail;
