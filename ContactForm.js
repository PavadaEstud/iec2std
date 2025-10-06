 const { useState } = React;

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the data to a server here.
    console.log('Form submitted:', formData);
    setStatus('Thank you for your message! We will get back to you shortly.');
    // Clear form after submission
    setFormData({ fullName: '', email: '', phone: '', interest: '', message: '' });
  };

  if (status) {
    return <p className="success-message">{status}</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input 
          type="text" 
          name="fullName" 
          placeholder="Full Name" 
          value={formData.fullName} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div className="form-group">
        <input 
          type="email" 
          name="email" 
          placeholder="Email Address" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div className="form-group">
        <input 
          type="tel" 
          name="phone" 
          placeholder="Phone (Optional)"
          value={formData.phone} 
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <select name="interest" value={formData.interest} onChange={handleChange} required>
          <option value="" disabled>Qual seu interesse?</option>
          <option value="job">Oportunidade de Estágio/Trabalho</option>
          <option value="collaboration">Colaboração em Projetos</option>
          <option value="mentoring">Dúvidas ou Mentoria</option>
          <option value="other">Outro Assunto</option>
        </select>
      </div>
      <div className="form-group full-width">
        <textarea 
          name="message" 
          placeholder="Message..." 
          rows="4"
          value={formData.message} 
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form-group full-width">
        <button type="submit" className="cta-button">Send Message</button>
      </div>
    </form>
  );
}

const domContainer = document.querySelector('#react-form-container');
const root = ReactDOM.createRoot(domContainer);
root.render(<ContactForm />);