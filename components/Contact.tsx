'use client'
import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { contactInfo, socialLinks } from '../data/nick';
import { FaInstagram } from 'react-icons/fa';
import { z } from 'zod';
import { contactSchema } from '../lib/validation/contact';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
    setSubmitError('');
  };

  const validateForm = () => {
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          newErrors[issue.path[0] as string] = issue.message;
        }
      });
      setErrors(newErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    setSubmitError('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
      
      setIsSubmitted(true);
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactDetails = [
    { icon: Mail, label: 'Email', value: contactInfo.email },
    { icon: Phone, label: 'Phone', value: contactInfo.phone },
    { icon: MapPin, label: 'Location', value: contactInfo.location },
    { icon: Clock, label: 'Hours', value: contactInfo.hours },
  ];

  const services = [
    'Personal Training',
    'Online Coaching',
    'Fitness Modeling Inquiry',
    'Nutrition Guidance',
    'Other',
  ];

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-amber-500 font-semibold tracking-wider text-sm uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Start Your Journey Today
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Ready to transform? Fill out the form below and I'll get back to you
            within 24 hours to discuss your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactDetails.map((detail, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-neutral-900/50 border border-neutral-800 rounded-2xl hover:border-amber-500/30 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center">
                    <detail.icon className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">{detail.label}</p>
                    <p className="text-white font-medium">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:text-white hover:border-transparent transition-all duration-300"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300">
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`bg-neutral-800 border-neutral-700 text-white placeholder:text-gray-500 focus:border-amber-500 focus:ring-amber-500/20 rounded-xl h-12 ${
                          errors.name ? 'border-red-500' : ''
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300">
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`bg-neutral-800 border-neutral-700 text-white placeholder:text-gray-500 focus:border-amber-500 focus:ring-amber-500/20 rounded-xl h-12 ${
                          errors.email ? 'border-red-500' : ''
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-300">
                        Phone Number <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+254 700 000 000"
                        className={`bg-neutral-800 border-neutral-700 text-white placeholder:text-gray-500 focus:border-amber-500 focus:ring-amber-500/20 rounded-xl h-12 ${
                          errors.phone ? 'border-red-500' : ''
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-gray-300">
                        Service Interest <span className="text-red-500">*</span>
                      </Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full h-12 bg-neutral-800 border text-white rounded-xl px-4 focus:border-amber-500 focus:ring-amber-500/20 focus:outline-none ${
                          errors.service ? 'border-red-500' : 'border-neutral-700'
                        }`}
                      >
                        <option value="" className="text-gray-500">
                          Select a service
                        </option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="text-red-500 text-xs mt-1">{errors.service}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">
                      Your Message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your fitness goals..."
                      rows={5}
                      className={`bg-neutral-800 border-neutral-700 text-white placeholder:text-gray-500 focus:border-amber-500 focus:ring-amber-500/20 rounded-xl resize-none ${
                        errors.message ? 'border-red-500' : ''
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  {submitError && (
                    <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <p className="text-red-400 text-sm">{submitError}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-6 rounded-full text-lg transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;