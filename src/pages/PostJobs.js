import React, { useState } from "react";
import "./PostJobs.css";

function PostJobs() {
    const [useAi, setUseAi] = useState(false);
    const [aiText, setAiText] = useState("");
    const [isFormDisabled, setIsFormDisabled] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        location: "",
        salary: "",
        description: "",
    });

    const [skills, setSkills] = useState([{ name: "", experience: "" }]);

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSkillChange = (index, field, value) => {
        const updatedSkills = [...skills];
        updatedSkills[index][field] = value;
        setSkills(updatedSkills);
    };

    const addSkill = () => {
        setSkills([...skills, { name: "", experience: "" }]);
    };

    const removeSkill = (index) => {
        setSkills(skills.filter((_, i) => i !== index));
    };

    const handleAiAnalyze = () => {
        if (!aiText.trim()) {
            alert("案件紹介文を入力してください");
            return;
        }
        setTimeout(() => {
            setFormData({
                title: "Java開発エンジニア募集",
                location: "東京都 港区",
                salary: "月単価70万〜90万",
                description: aiText,
            });
            setSkills([
                { name: "Java", experience: "8" },
                { name: "SpringBoot", experience: "5" },
                { name: "AWS", experience: "3" },
            ]);
            setIsFormDisabled(false);
            alert("AIが自動入力しました。内容をご確認ください。");
        }, 1000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const submissionData = {
            ...formData,
            skills,
        };
        console.log("提交内容:", submissionData);
        alert("案件を登録しました！");
    };

    return (
        <div className="post-jobs-page">
            <h1>案件情報を登録する</h1>

            <div className="ai-option">
                <label>
                    <input
                        type="checkbox"
                        checked={useAi}
                        onChange={(e) => {
                            const checked = e.target.checked;
                            setUseAi(checked);
                            setIsFormDisabled(checked);
                        }}
                    />
                    案件内容と希望を入力して、AIで整理しましょう
                </label>
            </div>

            {useAi && (
                <div className="ai-area">
          <textarea
              placeholder="案件内容と希望を入力しましょう"
              value={aiText}
              onChange={(e) => setAiText(e.target.value)}
          />
                    <button className="analyze-btn" type="button" onClick={handleAiAnalyze}>
                        AIに分析させる
                    </button>
                </div>
            )}

            <form className="post-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>案件タイトル</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleFormChange}
                        disabled={isFormDisabled}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>勤務地</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleFormChange}
                        disabled={isFormDisabled}
                    />
                </div>

                <div className="form-group">
                    <label>必要スキル・経験年数</label>
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <input
                                type="text"
                                placeholder="技術名（例：Java）"
                                value={skill.name}
                                onChange={(e) => handleSkillChange(index, "name", e.target.value)}
                                disabled={isFormDisabled}
                                required
                            />
                            <input
                                type="number"
                                placeholder="経験年数（例：3）"
                                value={skill.experience}
                                onChange={(e) => handleSkillChange(index, "experience", e.target.value)}
                                disabled={isFormDisabled}
                                required
                            />
                            {index > 0 && (
                                <button
                                    type="button"
                                    onClick={() => removeSkill(index)}
                                    className="remove-skill-button"
                                    disabled={isFormDisabled}
                                >
                                    削除
                                </button>
                            )}
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addSkill}
                        className="add-skill-button"
                        disabled={isFormDisabled}
                    >
                        ＋ スキルを追加する
                    </button>
                </div>

                <div className="form-group-inline">
                    <label className="inline-label">単価</label>
                    <input
                        type="text"
                        name="salary"
                        value={formData.salary}
                        onChange={handleFormChange}
                        disabled={isFormDisabled}
                        className="short-input"
                    />
                    <label>万円</label>
                </div>

                <div className="form-group">
                    <label>案件説明</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleFormChange}
                        disabled={isFormDisabled}
                        rows="5"
                    />
                </div>

                <button type="submit" className="submit-btn">
                    投稿する
                </button>
            </form>
        </div>
    );
}

export default PostJobs;
