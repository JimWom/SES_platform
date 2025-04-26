// src/pages/PostJobDetail.js

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./PostJobDetail.css"; // 别忘了引用CSS

const mockJobs = [
    {
        id: 1,
        title: "大手自動車 車載開発 BSEエンジニア募集",
        salary: "60万円",
        skills: ["Linux", "C言語", "C++"],
        location: "名古屋付近 岡崎駅",
        experience: "3年以上",
        remote: false,
        interviewCount: 2,
        fullText: `大手自動車 車載ソフト開発 BSE ３名
スキル：Linux利用経験、C言語、C++経験あればよい。
車載開発経験者：優先
BSEのため、コミュニケーション力と問題解決能力が問われる。
日本語：1級
単価：６０万（目安）
出勤：名古屋付近 岡崎駅
リモート不可
PJ：長期プロジェクト
国籍不問
面接：１～２回
`
    },
    {
        id: 2,
        title: "クラウドシステム AWSエンジニア募集",
        salary: "70万円",
        skills: ["AWS", "Lambda", "EC2"],
        location: "東京都 渋谷区",
        experience: "5年以上",
        remote: true,
        interviewCount: 1,
        fullText: `AWSクラウド環境構築、Lambda設計開発案件
業務内容：AWS環境設計、EC2運用、Lambdaスクリプト開発
勤務地：渋谷
リモート勤務可能
単価：70万～
期間：即日～長期
面談：１回`
    }
];

function PostJobDetail() {
    const { id } = useParams();
    const [showFullText, setShowFullText] = useState(false);

    const job = mockJobs.find((job) => job.id === parseInt(id));

    if (!job) {
        return <div style={{ padding: "20px", textAlign: "center" }}>案件が見つかりませんでした。</div>;
    }

    const toggleFullText = () => {
        setShowFullText(!showFullText);
    };

    return (
        <div className="job-detail-page">
            <h1 className="job-title">{job.title}</h1>

            <div className="job-summary">
                <div><strong>単価：</strong>{job.salary}</div>
                <div><strong>技術：</strong>{job.skills.join(", ")}</div>
                <div><strong>勤務地：</strong>{job.location}</div>
                <div><strong>経験年数：</strong>{job.experience}</div>
                <div><strong>リモート：</strong>{job.remote ? "可" : "不可"}</div>
                <div><strong>面談回数：</strong>{job.interviewCount}回</div>
            </div>

            <button className="toggle-button" onClick={toggleFullText}>
                {showFullText ? "案件詳細を隠す" : "案件詳細を見る"}
            </button>

            {showFullText && (
                <div className="job-fulltext">
                    {job.fullText.split("\n").map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
            )}
        </div>
    );
}

export default PostJobDetail;
