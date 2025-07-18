import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaUsers, FaFileAlt, FaChartBar, FaCog, FaSignOutAlt, FaEye, FaEdit, FaTrash, FaPlus, FaSearch, FaFilter, FaShieldAlt } from 'react-icons/fa';
import logo from '../assets/logo.webp';

const SESSION_TIMEOUT_MINUTES = 30; // 30 dakika sonra otomatik çıkış

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sessionWarning, setSessionWarning] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false); // Demo amaçlı
  
  // Güvenlik sorusu için state'ler
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);

  // Mock data
  const [users] = useState([
    { id: 1, name: 'Ahmet Yılmaz', email: 'ahmet@hospitadent.com', role: 'Admin', status: 'active', lastLogin: '2024-01-15' },
    { id: 2, name: 'Ayşe Demir', email: 'ayse@hospitadent.com', role: 'Editor', status: 'active', lastLogin: '2024-01-14' },
    { id: 3, name: 'Mehmet Kaya', email: 'mehmet@hospitadent.com', role: 'Viewer', status: 'inactive', lastLogin: '2024-01-10' },
    { id: 4, name: 'Fatma Özkan', email: 'fatma@hospitadent.com', role: 'Editor', status: 'active', lastLogin: '2024-01-13' },
  ]);

  const [content] = useState([
    { id: 1, title: 'Hakkımızda Sayfası', type: 'page', status: 'published', lastModified: '2024-01-15', author: 'Ahmet Yılmaz' },
    { id: 2, title: 'İdari Kadro', type: 'page', status: 'draft', lastModified: '2024-01-14', author: 'Ayşe Demir' },
    { id: 3, title: 'Blog Yazısı: Diş Sağlığı', type: 'blog', status: 'published', lastModified: '2024-01-13', author: 'Mehmet Kaya' },
    { id: 4, title: 'Hizmetler Sayfası', type: 'page', status: 'published', lastModified: '2024-01-12', author: 'Fatma Özkan' },
  ]);

  const [analytics] = useState({
    totalUsers: 1250,
    totalPages: 45,
    totalBlogs: 23,
    monthlyVisitors: 15420,
    pageViews: 45680,
    bounceRate: 32.5,
    avgSessionDuration: '2:45'
  });

  // Oturum süresi kontrolü
  useEffect(() => {
    if (!isAuthenticated) return;
    const timeout = setTimeout(() => {
      setSessionWarning(true);
      setTimeout(() => {
        setIsAuthenticated(false);
        localStorage.removeItem('adminToken');
        setSessionWarning(false);
      }, 10000); // 10 sn sonra otomatik çıkış
    }, SESSION_TIMEOUT_MINUTES * 60 * 1000 - 10000); // 10 sn önce uyarı
    return () => clearTimeout(timeout);
  }, [isAuthenticated]);

  useEffect(() => {
    // Check if user is already logged in
    const adminToken = localStorage.getItem('adminToken');
    if (adminToken) {
      setIsAuthenticated(true);
    }
  }, []);

  // Güvenlik sorusu için rastgele sayılar oluştur
  const generateSecurityQuestion = () => {
    const number1 = Math.floor(Math.random() * 50) + 1;
    const number2 = Math.floor(Math.random() * 50) + 1;
    setNum1(number1);
    setNum2(number2);
    setCorrectAnswer(number1 + number2);
  };

  useEffect(() => {
    generateSecurityQuestion();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple authentication (in real app, this would be API call)
    if (username === 'admin' && password === 'admin123' && parseInt(securityAnswer) === correctAnswer) {
      setIsAuthenticated(true);
      localStorage.setItem('adminToken', 'mock-token');
    } else {
      alert('Hatalı kullanıcı adı, şifre veya güvenlik sorusu!');
      generateSecurityQuestion(); // Yeni soru oluştur
      setSecurityAnswer(''); // Cevabı temizle
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminToken');
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter(user => 
    filterStatus === 'all' || user.status === filterStatus
  );

  const filteredContent = content.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter(item =>
    filterStatus === 'all' || item.status === filterStatus
  );

  if (!isAuthenticated) {
    return (
      <>
        <Helmet>
          <title>Admin Girişi - Hospitadent</title>
          <meta name="description" content="Hospitadent Admin Panel Girişi" />
        </Helmet>
        
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
            <div className="text-center mb-8">
              <img src={logo} alt="Hospitadent Admin" className="h-12 mx-auto mb-2" />
              <h1 className="text-3xl font-bold text-[#004876] mb-2">Admin Panel</h1>
              <p className="text-gray-600">Hospitadent Yönetim Paneli</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kullanıcı Adı
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Kullanıcı adınızı girin"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Şifre
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Şifrenizi girin"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Güvenlik Sorusu: {num1} + {num2} = ?
                </label>
                <input
                  type="number"
                  value={securityAnswer}
                  onChange={(e) => setSecurityAnswer(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Toplamı girin"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#004876] text-white py-4 px-6 rounded-lg border-4 border-[#004876] shadow-xl hover:bg-[#003d5f] hover:border-[#003d5f] transition-all duration-200 font-bold text-xl mt-6 mb-4"
                style={{backgroundColor: '#004876', color: '#ffffff', borderColor: '#004876'}}
              >
                GİRİŞ YAP
              </button>
            </form>
            
            <div className="mt-6 text-center text-sm text-gray-500">
              <p>Demo Giriş Bilgileri:</p>
              <p>Kullanıcı: admin</p>
              <p>Şifre: admin123</p>
              <p>Güvenlik: Yukarıdaki sayıların toplamını girin</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Admin Panel - Hospitadent</title>
        <meta name="description" content="Hospitadent Admin Panel" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Hospitadent Admin" className="h-10 w-auto" />
                <h1 className="text-2xl font-bold text-gray-900">Hospitadent Admin</h1>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">Hoş geldiniz, Admin</span>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-3 bg-[#004876] text-white px-8 py-4 rounded-lg border-4 border-[#004876] shadow-xl hover:bg-[#003d5f] hover:border-[#003d5f] transition-all duration-200 font-bold text-lg"
                  style={{backgroundColor: '#004876', color: '#ffffff', borderColor: '#004876'}}
                >
                  <FaSignOutAlt className="text-xl" />
                  <span>ÇIKIŞ YAP</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Oturum süresi/güvenlik uyarısı */}
        {sessionWarning && (
          <div className="fixed top-0 left-0 w-full z-50 bg-red-500 text-white text-center py-3 font-semibold shadow-lg animate-pulse">
            Oturumunuz sona ermek üzere! 10 saniye içinde otomatik çıkış yapılacak.
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* 2FA Uyarısı */}
          {!twoFactorEnabled && (
            <div className="mb-6 flex items-center gap-3 bg-blue-50 border-l-4 border-blue-500 p-4 rounded shadow">
              <FaShieldAlt className="text-blue-600 text-2xl" />
              <span className="text-blue-800 font-medium">
                Güvenliğiniz için iki faktörlü kimlik doğrulamayı (2FA) etkinleştirmenizi öneririz.
              </span>
              <button
                onClick={() => setTwoFactorEnabled(true)}
                className="ml-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
              >
                2FA'yı Etkinleştir
              </button>
            </div>
          )}

          {/* Navigation Tabs */}
          <div className="bg-white rounded-lg shadow-sm mb-8">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'dashboard'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <FaChartBar className="inline mr-2" />
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('users')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'users'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <FaUsers className="inline mr-2" />
                Kullanıcılar
              </button>
              <button
                onClick={() => setActiveTab('content')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'content'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <FaFileAlt className="inline mr-2" />
                İçerik Yönetimi
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'settings'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <FaCog className="inline mr-2" />
                Ayarlar
              </button>
            </nav>
          </div>

          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                      <FaUsers className="w-6 h-6" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Toplam Kullanıcı</p>
                      <p className="text-2xl font-semibold text-gray-900">{analytics.totalUsers.toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-green-100 text-green-600">
                      <FaFileAlt className="w-6 h-6" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Toplam Sayfa</p>
                      <p className="text-2xl font-semibold text-gray-900">{analytics.totalPages}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                      <FaChartBar className="w-6 h-6" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Aylık Ziyaretçi</p>
                      <p className="text-2xl font-semibold text-gray-900">{analytics.monthlyVisitors.toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-orange-100 text-orange-600">
                      <FaChartBar className="w-6 h-6" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Sayfa Görüntüleme</p>
                      <p className="text-2xl font-semibold text-gray-900">{analytics.pageViews.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Ziyaretçi İstatistikleri</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Bounce Rate</span>
                      <span className="text-sm font-medium text-gray-900">{analytics.bounceRate}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Ortalama Oturum Süresi</span>
                      <span className="text-sm font-medium text-gray-900">{analytics.avgSessionDuration}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Son Aktiviteler</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">Yeni blog yazısı eklendi</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">Kullanıcı kaydı yapıldı</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">Sayfa güncellendi</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Users Tab */}
          {activeTab === 'users' && (
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h2 className="text-lg font-medium text-gray-900 mb-4 sm:mb-0">Kullanıcı Yönetimi</h2>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                    <FaPlus className="mr-2" />
                    Yeni Kullanıcı
                  </button>
                </div>
              </div>

              <div className="p-6">
                {/* Search and Filter */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0">
                  <div className="relative">
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Kullanıcı ara..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaFilter className="text-gray-400" />
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="all">Tüm Durumlar</option>
                      <option value="active">Aktif</option>
                      <option value="inactive">Pasif</option>
                    </select>
                  </div>
                </div>

                {/* Users Table */}
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                          Kullanıcı
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                          Rol
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                          Durum
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                          Son Giriş
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                          İşlemler
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredUsers.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{user.name}</div>
                              <div className="text-sm text-gray-500">{user.email}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              user.role === 'Admin' ? 'bg-red-100 text-red-800' :
                              user.role === 'Editor' ? 'bg-blue-100 text-blue-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {user.role}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}>
                              {user.status === 'active' ? 'Aktif' : 'Pasif'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {user.lastLogin}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-900">
                                <FaEye />
                              </button>
                              <button className="text-green-600 hover:text-green-900">
                                <FaEdit />
                              </button>
                              <button className="text-red-600 hover:text-red-900">
                                <FaTrash />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Content Tab */}
          {activeTab === 'content' && (
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h2 className="text-lg font-medium text-gray-900 mb-4 sm:mb-0">İçerik Yönetimi</h2>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                    <FaPlus className="mr-2" />
                    Yeni İçerik
                  </button>
                </div>
              </div>

              <div className="p-6">
                {/* Search and Filter */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0">
                  <div className="relative">
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="İçerik ara..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaFilter className="text-gray-400" />
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="all">Tüm Durumlar</option>
                      <option value="published">Yayınlanmış</option>
                      <option value="draft">Taslak</option>
                    </select>
                  </div>
                </div>

                {/* Content Table */}
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                          Başlık
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                          Tür
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                          Durum
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                          Yazar
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                          Son Güncelleme
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                          İşlemler
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredContent.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{item.title}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              item.type === 'page' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                            }`}>
                              {item.type === 'page' ? 'Sayfa' : 'Blog'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              item.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {item.status === 'published' ? 'Yayınlanmış' : 'Taslak'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.author}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.lastModified}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-900">
                                <FaEye />
                              </button>
                              <button className="text-green-600 hover:text-green-900">
                                <FaEdit />
                              </button>
                              <button className="text-red-600 hover:text-red-900">
                                <FaTrash />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Sistem Ayarları</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-md font-medium text-gray-900 mb-4">Genel Ayarlar</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Site Başlığı
                      </label>
                      <input
                        type="text"
                        defaultValue="Hospitadent"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Site Açıklaması
                      </label>
                      <input
                        type="text"
                        defaultValue="Hospitadent Diş Kliniği"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-md font-medium text-gray-900 mb-4">E-posta Ayarları</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        SMTP Sunucu
                      </label>
                      <input
                        type="text"
                        defaultValue="smtp.hospitadent.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-posta Adresi
                      </label>
                      <input
                        type="email"
                        defaultValue="info@hospitadent.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-md font-medium text-gray-900 mb-4">Güvenlik Ayarları</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="twoFactor"
                        defaultChecked={twoFactorEnabled}
                        onChange={(e) => setTwoFactorEnabled(e.target.checked)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="twoFactor" className="ml-2 block text-sm text-gray-900">
                        <FaShieldAlt className="inline mr-1 text-yellow-600" /> İki Faktörlü Kimlik Doğrulama
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="sessionTimeout"
                        defaultChecked={false} // Demo amaçlı
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="sessionTimeout" className="ml-2 block text-sm text-gray-900">
                        Oturum Zaman Aşımı
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Ayarları Kaydet
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Admin; 