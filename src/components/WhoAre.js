import React from "react"
import AOS from "aos"
import "aos/dist/aos.css"

AOS.init()
function WhoAre() {
  return (
    <div className="container py-5" id="whoAre" data-aos="fade-right" data-aos-duration="2000">
      <div className="row ">
        <div className="col-lg-6 col-xm-12 ">
          <img className="who-img" src="https://k.top4top.io/p_1930lh1gn1.png" alt="" />
        </div>
        <div className="col-lg-6 col-xm-12">
          <h2 className="who-h2 my-5">من نحن</h2>
          <p className="who-p">
            {" "}
            نحن فريق إبرا للتصميم و التنفيذ نسعى إلى التفرد في إخراج منتجاتنا المعمارية بشكل متكامل يرقى إلى ذائقتكم
            ويصيغ احتياجاتكم بشكل هندسي مدروس بأفضل الحلول المبتكرة والإبداعية التي تتأقلم مع الحاضر وتواكب المستقبل
            نكون فيه وإياكم شركاء في إخراج منتج متفرد من خلال فريق ذو خبرات عالية في مجالات عدة وذا أفكار يؤمل من خلالها
            تغيير الفوضى والعبث المعماري المنتشر في بيئتنا المحيطة التي أثرت سلباً على راحتنا وراحة عائلاتنا وأماكن
            عملنا والإتيان بمفاهيم مختلفة حول المشاريع التجارية والسكنية والعامة بدمج مفاهيم الجمال والبساطة والتكلفة
            المناسبة ونأمل من ذلك أن نكون سبباً بعد الله في عمارة الأرض ونهضة بلادنا.{" "}
          </p>
          <h3 className="who-h3">م. ابراهيم عبدالله الحوشاني 'معماري - مؤسس'</h3>
        </div>
      </div>
    </div>
  )
}

export default WhoAre
