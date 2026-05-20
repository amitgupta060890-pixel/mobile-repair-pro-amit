import { Phone, Mail, Clock, Wrench, Smartphone, Battery, Shield, MapPin, CheckCircle, Star, MessageCircle, X, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [showWelcomeToast, setShowWelcomeToast] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    deviceModel: '',
    issueDescription: ''
  });
  const [formError, setFormError] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomeToast(true);
    }, 1000);

    const hideTimer = setTimeout(() => {
      setShowWelcomeToast(false);
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleServiceClick = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsDialogOpen(true);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/917020595693', '_blank');
  };

  const handleCallNow = () => {
    window.location.href = 'tel:7020595693';
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setFormError('');
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim()) {
      setFormError('Please enter your name');
      return;
    }
    if (!formData.phone.trim()) {
      setFormError('Please enter your phone number');
      return;
    }
    if (!formData.deviceModel.trim()) {
      setFormError('Please enter your device model');
      return;
    }
    if (!formData.issueDescription.trim()) {
      setFormError('Please describe the issue');
      return;
    }

    // Create WhatsApp message with form details
    const message = `*NEW INQUIRY FROM WEBSITE*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Device Model:* ${formData.deviceModel}
*Issue Description:* ${formData.issueDescription}

Please contact me with a free quote.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/917020595693?text=${encodedMessage}`;

    // Open WhatsApp in new window
    window.open(whatsappURL, '_blank');

    // Reset form
    setFormData({
      name: '',
      phone: '',
      deviceModel: '',
      issueDescription: ''
    });
    setFormError('');
  };

  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Screen Replacement",
      description: "Cracked or damaged screen? We replace screens for all major brands with high-quality parts.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: "Battery Replacement",
      description: "Fast battery replacement service. Get your device running like new again.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Hardware Repairs",
      description: "Expert repair for charging ports, buttons, cameras, and other hardware issues.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Water Damage",
      description: "Specialized water damage recovery services to save your device and data.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const features = [
    "Experienced Technicians",
    "Quick Turnaround Time",
    "Genuine Parts Used",
    "Warranty on Repairs",
    "Free Diagnosis",
    "Affordable Pricing"
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      rating: 5,
      text: "Excellent service! They fixed my iPhone screen in just 30 minutes. Very professional and affordable.",
      service: "Screen Replacement"
    },
    {
      name: "Priya Sharma",
      rating: 5,
      text: "Best mobile repair shop in town. They saved my water-damaged phone and recovered all my data!",
      service: "Water Damage Repair"
    },
    {
      name: "Amit Patel",
      rating: 5,
      text: "Great experience! Battery replacement was quick and the pricing was very reasonable. Highly recommend!",
      service: "Battery Replacement"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Chetan Gupta Mobile Shop - Repair Mobile In Pro Style
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            </nav>
            <a href="tel:7020595693" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition">
              Call Now
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                  <span className="text-sm">Trusted by 1000+ Customers</span>
                </span>
              </div>
              <h2 className="text-5xl font-bold leading-tight">
                Professional Mobile Repair Services
              </h2>
              <p className="text-xl text-blue-100">
                Fast, reliable, and affordable repairs for all smartphone brands.
                Get your device fixed by certified technicians.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition shadow-lg">
                  Get a Free Quote
                </a>
                <a href="tel:7020595693" className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition">
                  Call: 7020595693
                </a>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold">1000+</div>
                  <div className="text-blue-100">Repairs Done</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-blue-100">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">24hr</div>
                  <div className="text-blue-100">Quick Service</div>
                </div>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-pink-500 rounded-3xl transform rotate-6 opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1550041473-d296a3a8a18a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMHJlcGFpciUyMHRvb2xzfGVufDB8fHx8fDA%3D&q=80&w=1080"
                alt="Mobile repair technician"
                className="relative rounded-3xl shadow-2xl object-cover w-full h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brands We Repair Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Brands We Repair</h2>
            <p className="text-gray-600">Expert repair services for all major smartphone brands</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {['Apple', 'Samsung', 'OnePlus', 'Xiaomi', 'Oppo', 'Vivo'].map((brand, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition transform hover:scale-105 cursor-pointer"
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {brand}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">...and many more brands!</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">We fix all types of mobile phone issues</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => handleServiceClick(service.title)}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Click to Order <span className="text-xl">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1746005514011-ea00280f3b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxtb2JpbGUlMjBwaG9uZSUyMHJlcGFpciUyMHRvb2xzfGVufDB8fHx8fDA%3D&q=80&w=1080"
                alt="iPhone repair components"
                className="rounded-2xl shadow-2xl object-cover w-full h-[400px]"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Why Choose Us?</h2>
              <p className="text-xl text-gray-600">
                We are committed to providing the best mobile repair services with quality parts and expert technicians.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <Clock className="w-12 h-12 text-blue-600" />
                  <div>
                    <div className="font-bold text-gray-900">Operating Hours</div>
                    <div className="text-gray-600">Mon - Sat: 9:00 AM - 8:00 PM</div>
                    <div className="text-gray-600">Sunday: 10:00 AM - 6:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="py-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-lg font-bold mx-8">🎉 SPECIAL OFFER: Get 10% OFF on Screen Replacement this month!</span>
          <span className="text-lg font-bold mx-8">⚡ Same Day Service Available</span>
          <span className="text-lg font-bold mx-8">🔧 Free Phone Check-up with Every Repair</span>
          <span className="text-lg font-bold mx-8">✨ Genuine Parts Guaranteed</span>
          <span className="text-lg font-bold mx-8">🎉 SPECIAL OFFER: Get 10% OFF on Screen Replacement this month!</span>
          <span className="text-lg font-bold mx-8">⚡ Same Day Service Available</span>
          <span className="text-lg font-bold mx-8">🔧 Free Phone Check-up with Every Repair</span>
          <span className="text-lg font-bold mx-8">✨ Genuine Parts Guaranteed</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">About Our Shop</h2>
              <p className="text-lg text-gray-600">
                With years of experience in mobile repair services, we have become a trusted name in the industry.
                Our team of certified technicians is dedicated to providing fast, reliable, and affordable repair solutions.
              </p>
              <p className="text-lg text-gray-600">
                We use only genuine and high-quality replacement parts to ensure your device performs like new.
                Every repair comes with a warranty for your peace of mind.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">50+</div>
                  <div className="text-gray-600">Daily Repairs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">100%</div>
                  <div className="text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1611396000732-f8c9a933424f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2JpbGUlMjBwaG9uZSUyMHJlcGFpciUyMHRvb2xzfGVufDB8fHx8fDA%3D&q=80&w=1080"
                alt="Repair tools"
                className="rounded-2xl shadow-lg object-cover h-64"
              />
              <img
                src="https://images.unsplash.com/photo-1617299516258-eb06985065ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtb2JpbGUlMjBwaG9uZSUyMHJlcGFpciUyMHRvb2xzfGVufDB8fHx8fDA%3D&q=80&w=1080"
                alt="Smartphone repair"
                className="rounded-2xl shadow-lg object-cover h-64 mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-blue-100">We're here to help! Contact us for any inquiries or repair needs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <a href="tel:7020595693" className="text-lg hover:text-blue-200 transition block">7020595693</a>
              <a href="tel:8857821019" className="text-lg hover:text-blue-200 transition block">8857821019</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-lg">guptachetan599@gmail.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <a 
                href="https://www.google.com/maps/place/Chetan+Mobile+Shopee/@21.1340814,79.0666583,12z/data=!4m10!1m2!2m1!1sChetan+Mobile+Shopee!3m6!1s0x3bd4c7ea2070ca71:0x62e4225ac575f85!8m2!3d21.1340814!4d79.0666583!16s%2Fg%2F1hm3p7kl7!2m2!1d79.0666583!2d21.1340814"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-blue-200 transition"
              >
                Chetan Mobile Shopee
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-12 max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
            
            {formError && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                {formError}
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition text-gray-900"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition text-gray-900"
                    placeholder="Your phone"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Device Model *</label>
                <input
                  type="text"
                  name="deviceModel"
                  value={formData.deviceModel}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition text-gray-900"
                  placeholder="e.g., iPhone 13, Samsung Galaxy S21"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Issue Description *</label>
                <textarea
                  name="issueDescription"
                  value={formData.issueDescription}
                  onChange={handleFormChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition text-gray-900"
                  placeholder="Describe the issue with your device"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Send via WhatsApp
              </button>
            </form>
            <p className="text-center text-sm text-gray-600 mt-4">
              💬 Your message will be sent directly to our WhatsApp
            </p>
          </div>
        </div>
      </section>

      {/* Order Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-in zoom-in duration-200">
            <button
              onClick={() => setIsDialogOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Place an Order?</h3>
              <p className="text-gray-600">
                You selected: <span className="font-semibold text-blue-600">{selectedService}</span>
              </p>
              <p className="text-gray-500 mt-2">How would you like to contact us?</p>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleWhatsApp}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Contact via WhatsApp
              </button>

              <button
                onClick={handleCallNow}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now: 7020595693
              </button>

              <button
                onClick={() => setIsDialogOpen(false)}
                className="w-full bg-gray-100 text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-200 transition"
              >
                Cancel
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
              <p>We typically respond within 5 minutes!</p>
            </div>
          </div>
        </div>
      )}

      {/* Welcome Toast Notification */}
      {showWelcomeToast && (
        <div className="fixed top-20 right-4 z-50 bg-white rounded-xl shadow-2xl p-4 max-w-sm animate-in fade-in zoom-in">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="font-bold text-gray-900 mb-1">Welcome to Mobile Repair Pro!</div>
              <p className="text-sm text-gray-600">Get 10% OFF on your first repair. Click WhatsApp to book now!</p>
            </div>
            <button
              onClick={() => setShowWelcomeToast(false)}
              className="text-gray-400 hover:text-gray-600 flex-shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <button
            onClick={() => {
              handleWhatsApp();
              setShowWelcomeToast(false);
            }}
            className="mt-3 w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition"
          >
            Chat on WhatsApp
          </button>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
        <button
          onClick={handleWhatsApp}
          className="relative bg-gradient-to-br from-green-500 to-emerald-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition transform hover:scale-110 group"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 group-hover:scale-110 transition" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
            1
          </span>
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Mobile Repair Pro</span>
              </div>
              <p className="text-gray-400">Your trusted partner for all mobile repair needs.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
                <li><a href="#about" className="hover:text-blue-400 transition">About Us</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>Screen Replacement</li>
                <li>Battery Replacement</li>
                <li>Hardware Repairs</li>
                <li>Water Damage</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>7020595693</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>8857821019</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>guptachetan599@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Mobile Repair Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
