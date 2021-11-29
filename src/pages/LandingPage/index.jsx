import React from 'react';
import { Carousel } from 'antd';
import ContentBlock from '../../components/ContentBlock';
import Svg7 from '../../assets/Online Groceries-pana.svg';
import Svg8 from '../../assets/Online Groceries-amico.svg';
import Svg9 from '../../assets/Discount-pana.svg';

const Infos = [
  {
    key: 'k1',
    position: 'right',
    heading: 'Unimi Food tới rồi đây!',
    caption: '',
    paragraph: 'Còn chần chờ gì mà không đặt Unimi ngay?',
    link: '/account/login',
    button: 'Cùng khám phá',
    img: Svg7,
  },
  {
    key: 'k2',
    position: 'left',
    heading: 'Giảm giá khủng',
    caption: '',
    paragraph:
      'Nhiều ưu đãi mỗi ngày đang chờ đợi bạn tại Unimi đấy!',
    link: '/',
    button: 'Đặt hàng ngay',
    img: Svg9,
  },
  {
    key: 'k3',
    position: 'right',
    heading: 'Tha hồ lựa chọn',
    caption: '',
    paragraph: 'Đa dạng món ngon trên khắp địa bàn thành phố! ',
    link: '/',
    button: 'Đặt hàng ngay',
    img: Svg8,
  },
];
const LandingPage = () => (
  <div className="landing-page-wrapper">
    <Carousel autoplay>
      {Infos.map((info) => (
        <ContentBlock content={info} key={info.key} />
      ))}
    </Carousel>
  </div>
);

export default LandingPage;
