import React, { useState } from "react"
import emailjs from "emailjs-com"
import { useForm } from "react-hook-form"

function Contact() {
  const [successMessage, setSuccessMessage] = useState("")
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const serviceId = "service_id"
  const templateId = "template_id"
  const userId = "user_NmgCDJwQibOHhigeVs2Bh"

  const onSubmit = (data, r) => {
    sendEmail(
      serviceId,
      templateId,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
      },
      userId
    )
    r.target.reset()
  }
  const sendEmail = (serviceId, templateId, variables, userId) => {
    emailjs
      .send(serviceId, templateId, variables, userId)
      .then(() => {
        setSuccessMessage("تم ارسال الطلب وسيتم التواصل في اقرب وقت")
      })
      .catch(err => console.error(`sothing wrong!! ${err}`))
  }

  return (
    <div className="contacts" id="contact">
      <div className="text-center">
        <h1>تواصل معنا</h1>
        <p>يرجى تعبئة البيانات وتوضيح الخدمة المطلوبة وسنقوم بالتواصل معك في اقرب وقت٫</p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container  form-sub">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row justify-content-center">
            <div className="col-md-6 mx-5 col-xs-12 ">
              <input
                type="text"
                className="form-control"
                placeholder="الاسم"
                name="name"
                {...register("name", {
                  required: "يرجى إدخال الاسم",
                })}
              />
              <span className="error-message">{errors.name && errors.name.message}</span>
              <input
                type="text"
                className="form-control"
                placeholder="الجوال"
                name="phone"
                {...register("phone", {
                  required: "يرجى إدخال رقم الجوال",
                })}
              />
              <span className="error-message">{errors.phone && errors.phone.message}</span>
              <input
                type="email"
                className="form-control"
                placeholder="الإيميل"
                name="email"
                {...register("email", {
                  required: "يرجى إدخال الإيميل ",
                })}
              />
              <span className="error-message">{errors.email && errors.email.message}</span>
              <input
                type="text"
                className="form-control"
                placeholder="الخدمة المطلوبة"
                name="subject"
                {...register("subject", {
                  required: "يرجى كتابة الخدمة المطلوبة  ",
                })}
              />
              <span className="error-message">{errors.subject && errors.subject.message}</span>
              <br></br>
              <button className="btn-main-offer contact-btn" type="submit">
                ارسال
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
