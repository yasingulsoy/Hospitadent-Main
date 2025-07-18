// Instagram API servisi
// Not: Instagram Basic Display API kullanılıyor
// https://developers.facebook.com/docs/instagram-basic-display-api

const INSTAGRAM_ACCESS_TOKEN = process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN;
const INSTAGRAM_USER_ID = process.env.REACT_APP_INSTAGRAM_USER_ID;

// Instagram gönderilerini çekme
export const fetchInstagramPosts = async (limit = 6) => {
  try {
    if (!INSTAGRAM_ACCESS_TOKEN || !INSTAGRAM_USER_ID) {
      console.warn('Instagram API credentials not found');
      return getMockInstagramPosts(limit);
    }

    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${INSTAGRAM_ACCESS_TOKEN}&limit=${limit}`
    );

    if (!response.ok) {
      throw new Error('Instagram API request failed');
    }

    const data = await response.json();
    return data.data.map(post => ({
      id: post.id,
      caption: post.caption ? post.caption.substring(0, 100) + '...' : '',
      mediaUrl: post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url,
      permalink: post.permalink,
      timestamp: post.timestamp,
      mediaType: post.media_type
    }));
  } catch (error) {
    console.error('Instagram API Error:', error);
    return getMockInstagramPosts(limit);
  }
};

// Mock Instagram verileri (API olmadığında kullanılır)
const getMockInstagramPosts = (limit) => {
  const mockPosts = [
    {
      id: '1',
      caption: 'Hospitadent\'te gülüş tasarımı ile hayatınızı değiştirin! 😊 #gülüştasarımı #hospitadent',
      mediaUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=400&fit=crop',
      permalink: 'https://instagram.com/hospitadent',
      timestamp: new Date().toISOString(),
      mediaType: 'IMAGE'
    },
    {
      id: '2',
      caption: 'Modern implant teknolojisi ile eksik dişlerinizi tamamlayın! 🦷 #implant #dişsağlığı',
      mediaUrl: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop',
      permalink: 'https://instagram.com/hospitadent',
      timestamp: new Date(Date.now() - 86400000).toISOString(),
      mediaType: 'IMAGE'
    },
    {
      id: '3',
      caption: 'Çocuk diş hekimliği uzmanlarımızla çocuklarınızın diş sağlığını koruyun! 👶 #çocukdiş #pedodonti',
      mediaUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=400&fit=crop',
      permalink: 'https://instagram.com/hospitadent',
      timestamp: new Date(Date.now() - 172800000).toISOString(),
      mediaType: 'IMAGE'
    },
    {
      id: '4',
      caption: 'Ortodonti tedavisi ile düzgün dişler, güzel gülüşler! 😁 #ortodonti #dişteli',
      mediaUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop',
      permalink: 'https://instagram.com/hospitadent',
      timestamp: new Date(Date.now() - 259200000).toISOString(),
      mediaType: 'IMAGE'
    },
    {
      id: '5',
      caption: 'Diş beyazlatma işlemi ile parlak gülümsemeler! ✨ #dişbeyazlatma #estetik',
      mediaUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=400&fit=crop',
      permalink: 'https://instagram.com/hospitadent',
      timestamp: new Date(Date.now() - 345600000).toISOString(),
      mediaType: 'IMAGE'
    },
    {
      id: '6',
      caption: 'Hospitadent ailesi olarak sizlere en iyi hizmeti sunmaya devam ediyoruz! 💙 #hospitadent #dişkliniği',
      mediaUrl: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=400&h=400&fit=crop',
      permalink: 'https://instagram.com/hospitadent',
      timestamp: new Date(Date.now() - 432000000).toISOString(),
      mediaType: 'IMAGE'
    }
  ];

  return mockPosts.slice(0, limit);
};

// Instagram gönderisini formatlama
export const formatInstagramPost = (post) => {
  return {
    ...post,
    formattedDate: new Date(post.timestamp).toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'short'
    })
  };
}; 