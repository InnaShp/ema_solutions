import React, { useState } from "react";
import "./style/ContactForm.css";

const ContactForm = () => {

  const [formStatus, setFormStatus] = useState(null)
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus("Інформація надіслана")
    const { firstName,lastName, email, phone, address, question, text } = e.target.elements
    let conFom = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phone: phone.value,
      address: address.value,
      question: question.value,
      text: text.value
    }
    console.log(conFom)
  }

  let [firstName, setFirstName] = useState(null);
  let [lastName, setLastName] = useState(null);
  let [email, setEmail] = useState(null);
  let [phone, setPhone] = useState(null);
  let [address, setAddress] = useState(null);
  let [question, setQuestion] = useState(null);
  let [text, setText] = useState(null);

  const handleInputChange = () => {
    setFirstName(firstName);
    setLastName(lastName);
    setEmail(email);
    setPhone(phone);
    setAddress(address);
    setQuestion(question);
    setText(text);
  }


 
  return (
    <div className="ContactForm">
      <form className="form" onSubmit={onSubmit}>
        <div className="row">
          <div className="row mb-3">
            <div className="col-6">
              <label className="form-label" htmlFor="firstName">Ім'я</label>
              <input className="form__input" type="text" required onChange = {(e) => handleInputChange(e)} id="firstName" />        
            </div>
            <div className="col-6">
              <label className="form-label" htmlFor="lastName">Прізвище</label>
              <input  type="text" id="lastName" className="form__input" required onChange = {(e) => handleInputChange(e)} /> 
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-6">
              <label className="form-label" htmlFor="email">Ел. пошта</label>
              <input  type="email" id="email" className="form__input" required onChange = {(e) => handleInputChange(e)} />
            </div>
            <div className="col-6">
              <label className="form-label" htmlFor="phone">Телефон</label>
              <input  type="tel" id="phone" className="form__input" onChange = {(e) => handleInputChange(e)} />
            </div>
          </div>
          <div className="data-field">
            <label className="form-label" htmlFor="address">Адреса</label>
            <input  type="text" id="address" className="form__input" onChange = {(e) => handleInputChange(e)} />
          </div>
          <div className="data-field">
            <label className="form-label" htmlFor="question">Що вас цікавить?</label>
            <input  type="text" id="question" className="form__input" onChange = {(e) => handleInputChange(e)} />
          </div>
          <div className="data-field mb-3">
            <label className="form-label" htmlFor="text">Текст повідомлення...</label>
            <textarea id="text" rows={4} className="form__input" onChange = {(e) => handleInputChange(e)}></textarea>
          </div>
          <div className="data-field">
            <input type="submit" className="button" />
          </div>
        </div>
      </form>
      <div className="info">{formStatus}</div>
    </div>
  );
}

export default ContactForm;