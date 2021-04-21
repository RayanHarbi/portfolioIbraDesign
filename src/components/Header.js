import React from "react"
import Typed from "react-typed"

function Header() {
  return (
    <div className="header-waraper" id="home">
      <div className="main-info">
        <h1>ابرا للهندسة المعمارية </h1>
        <Typed
          className="typed-text"
          strings={["الهندسة المعمارية", "التصميم الحديث", "تحقيق الاحتياجات الأساسية و الجمالية حسب الميزانية"]}
          typeSpeed={30}
          backSpeed={40}
          loop
        />
      </div>
    </div>
  )
}

export default Header
