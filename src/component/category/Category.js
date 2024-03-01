import React, { useState } from 'react';
import { Layout, Button, Card } from 'antd';
import { MobileOutlined, AudioOutlined, ThunderboltOutlined } from '@ant-design/icons';



import Charger from '../user/Charger';
import Mobile from '../user/Mobile';
import Earphone from '../user/Earphone';

const { Header, Content } = Layout;

const CategoryLayout = () => {
  const [selectedCategory, setSelectedCategory] = useState('mobile'); // Set initial category to 'mobile'

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: 'transparent', padding: '0' }}>
        <div className="logo" />
        {/* Add your header content here */}
      </Header>
      <Content style={{ padding: '' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <Button
            type={selectedCategory === 'mobile' ? 'primary' : 'default'}
            icon={<MobileOutlined />}
            onClick={() => handleCategoryClick('mobile')}
            style={{
              marginRight: '20px',
              backgroundColor: selectedCategory === 'mobile' ? '#06b6d4' : undefined,
              borderColor: '#06b6d4',
            }}
          >
            Mobile
          </Button>
          <Button
            type={selectedCategory === 'earphone' ? 'primary' : 'default'}
            icon={<AudioOutlined />}
            onClick={() => handleCategoryClick('earphone')}
            style={{
              marginRight: '20px',
              backgroundColor: selectedCategory === 'earphone' ? '#06b6d4' : undefined,
              borderColor: '#06b6d4',
            }}
          >
            Headphone
          </Button>
          <Button
            type={selectedCategory === 'charger' ? 'primary' : 'default'}
            icon={<ThunderboltOutlined />}
            onClick={() => handleCategoryClick('charger')}
            style={{
              backgroundColor: selectedCategory === 'charger' ? '#06b6d4' : undefined,
              borderColor: '#06b6d4',
            }}
          >
            Charger
          </Button>

          {/* Render corresponding components based on the selected category */}
          {selectedCategory === 'mobile' && <Card><Mobile /></Card>}
          {selectedCategory === 'earphone' && <Card><Earphone /></Card>}
          {selectedCategory === 'charger' && <Card><Charger /></Card>}
          {/* Add more conditions for other categories as needed */}
        </div>
      </Content>
    </Layout>
  );
};

export default CategoryLayout;
