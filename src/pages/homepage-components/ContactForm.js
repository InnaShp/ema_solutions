import React, { useState } from "react";
import "./style/ContactForm.css";


const ContactForm = () => {

  const [formStatus, setFormStatus] = useState(false);


  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus(true);
    setTimeout(() => {
      setFormStatus(false);
    }, 3000);
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
    clearForm()
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

  function clearForm() {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setQuestion('');
    setText('');
  }
 
  return (
    <div className="ContactForm">
      <form className="form" onSubmit={onSubmit}>
        
          <div className="element-container mb-3">
            <div className="element pe-2">
              <label className="form-label" htmlFor="firstName">Ім'я</label>
              <input className="form__input" type="text" required onChange = {(e) => handleInputChange(e)} value={firstName} id="firstName" />        
            </div>
            <div className="element ps-2">
              <label className="form-label" htmlFor="lastName">Прізвище</label>
              <input  type="text" id="lastName" className="form__input" required onChange = {(e) => handleInputChange(e)} value={lastName} /> 
            </div>
          </div>
          <div className="element-container mb-3">
            <div className="element pe-2">
              <label className="form-label" htmlFor="email">Ел. пошта</label>
              <input  type="email" id="email" className="form__input" required onChange = {(e) => handleInputChange(e)} value={email} />
            </div>
            <div className="element ps-2">
              <label className="form-label" htmlFor="phone">Телефон</label>
              <input  type="tel" id="phone" className="form__input" onChange = {(e) => handleInputChange(e)} value={phone} />
            </div>
          </div>
          <div className="data-field">
            <label className="form-label" htmlFor="address">Адреса</label>
            <input  type="text" id="address" className="form__input" onChange = {(e) => handleInputChange(e)} value={address} />
          </div>
          <div className="data-field">
            <label className="form-label" htmlFor="question">Що вас цікавить?</label>
            <input  type="text" id="question" className="form__input" onChange = {(e) => handleInputChange(e)} value={question} />
          </div>
          <div className="data-field mb-3">
            <label className="form-label" htmlFor="text">Текст повідомлення...</label>
            <textarea id="text" rows={4} className="form__input" onChange = {(e) => handleInputChange(e)} value={text}></textarea>
          </div>
          <div className="data-field">
            <input type="submit" className="button" />
          </div>
      </form>
        {formStatus && <div className="status-container">
          <div className="info">Інформація надіслана</div>
        </div>}
        
    </div>
  );
}

export default ContactForm;