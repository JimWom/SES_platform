import React from "react";
import "./Header.css";

function Header() {
    return (
        <header className="gnav-header">
            <div className="gnav-containerBetween">
                {/* A组：Logo 和文字部分 */}
                <div className="gnav-left">
                    <div className="logo">
                        <img src="/SESBridge.png" alt="SES Bridge" />
                    </div>
                    <div className="gnav-text">SESで業界活力を</div>
                    <nav className="gnav-links">
                        <a href="#home">ホーム</a>
                        <a href="#reviews">企業クチコミ</a>
                        <a href="#salaries">給与調査</a>
                    </nav>
                </div>

                {/* B组：搜索框和按钮部分 */}
                <div className="gnav-right">
                    <input
                        type="text"
                        placeholder="職種、キーワード、会社名"
                        className="search-input"
                    />
                    <button className="search-button">求人検索</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
