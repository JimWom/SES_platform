import React, { useState } from "react";
import "./PostResumes.css";

function PostResumes() {
    const [files, setFiles] = useState([]);

    // 处理文件选择
    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    };

    // 删除某个文件
    const handleRemoveFile = (index) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    // 点击上传按钮
    const handleUpload = () => {
        if (files.length === 0) {
            alert("アップロードするファイルを選択してください！");
            return;
        }

        // 这里你可以接上传API，例如用FormData提交
        console.log("Uploading files:", files);
        alert("アップロード処理（ダミー）完了！");
    };

    return (
        <div className="post-jobs-page">
            <h1>ファイルをアップロード</h1>
            <p className="description">案件情報・履歴書などをアップロードできます</p>

            <div className="upload-area">
                <label className="upload-label">
                    ここにファイルをドラッグ＆ドロップするか、クリックして選択してください
                    <input type="file" multiple onChange={handleFileChange} />
                </label>
            </div>

            {files.length > 0 && (
                <div className="file-list">
                    {files.map((file, idx) => (
                        <div key={idx} className="file-item">
                            <span>{file.name} ({(file.size / 1024).toFixed(1)} KB)</span>
                            <button onClick={() => handleRemoveFile(idx)}>削除</button>
                        </div>
                    ))}
                </div>
            )}

            <button className="upload-button" onClick={handleUpload}>
                アップロードする
            </button>
        </div>
    );
}

export default PostResumes;
