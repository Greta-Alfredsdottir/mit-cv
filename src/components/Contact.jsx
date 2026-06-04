import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = ({ personalInfo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('sending');

    // Simulate sending message asynchronously
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      // Clear success notification after 5 seconds
      setTimeout(() => setStatus(''), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        
        <div className="section-header">
          <h2>Get in Touch</h2>
          <p>Have a question or want to work together? Drop me a line!</p>
        </div>

        <div className="contact-layout">
          
          {/* Left Column: Direct Info */}
          <div className="contact-info-list">
            
            <div className="contact-item">
              <div className="icon-box">
                <Mail />
              </div>
              <div className="detail">
                <span>Email Me</span>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-box">
                <Phone />
              </div>
              <div className="detail">
                <span>Call Me</span>
                <p>{personalInfo.phone}</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-box">
                <MapPin />
              </div>
              <div className="detail">
                <span>My Location</span>
                <p>{personalInfo.location}</p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <form className="contact-form card-glass" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="form-name">Name *</label>
                <input
                  type="text"
                  id="form-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="form-email">Email *</label>
                <input
                  type="email"
                  id="form-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="form-subject">Subject</label>
              <input
                type="text"
                id="form-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Topic of discussion"
              />
            </div>

            <div className="form-group textarea-group">
              <label htmlFor="form-message">Message *</label>
              <textarea
                id="form-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ width: '100%' }}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                'Sending message...'
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="form-status" style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                <CheckCircle size={16} /> Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="form-status" style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                <AlertCircle size={16} /> {errorMessage}
              </div>
            )}
          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;
