import React, { useState, useEffect, useRef } from "react";
import "./Header.css";

function Header() {
    const [activeIndex, setActiveIndex] = useState(0);
    const navRef = useRef(null);
    const underlineRef = useRef(null);

    useEffect(() => {
        if (navRef.current && underlineRef.current) {
            const activeItem = navRef.current.children[activeIndex];
            if (activeItem) {
                underlineRef.current.style.width = `${activeItem.offsetWidth}px`;
                underlineRef.current.style.transform = `translateX(${activeItem.offsetLeft}px)`;
            }
        }
    }, [activeIndex]);

    return (
        <header className="gnav-header">
            <div className="gnav-containerBetween">
                {/* 左侧 Logo 和 标题 */}
                <div className="gnav-left">
                    <div className="logo">
                        <img src="/SESBridge.png" alt="SES Bridge" />
                    </div>
                    <div className="gnav-text">SESで業界活力を</div>

                    {/* 导航栏 */}
                    <nav className="gnav-links" ref={navRef}>
                        {["案件を探す", "企業を探す", "人材を探す"].map((text, index) => (
                            <a
                                key={index}
                                href={`#${index}`}
                                className={activeIndex === index ? "active" : ""}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActiveIndex(index);
                                }}
                            >
                                {text}
                            </a>
                        ))}
                        <div className="underline" ref={underlineRef}></div>
                    </nav>
                </div>

                {/* 右侧：文本式 “ログイン” */}
                <div className="gnav-right">
                    <div className="text-gray">応募と掲載は</div>
                    {/*<a href="#login" className="login-text">ログイン</a>*/}
                    <button className="login-button">ログイン</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
