// libs
import React from 'react';
// style
import './style.scss';

const Footer = function () {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__main">
          <div className="footer__company">
            <h3 className="footer__section-heading">Công ty</h3>
            <ul className="footer__company-list">
              <li className="footer__company-item">Giới thiệu</li>
              <li className="footer__company-item">Trung tâm trợ giúp</li>
              <li className="footer__company-item">Quy chế</li>
              <li className="footer__company-item">Điều khoản sử dụng</li>
              <li className="footer__company-item">Bảo mật thông tin</li>
              <li className="footer__company-item">Giải quyết khiếu nại</li>
              <li className="footer__company-item">Liên hệ</li>
              <li className="footer__company-item">
                Hợp tác nhân viên giao nhận
              </li>
              <li className="footer__company-item">Đăng ký cửa hàng</li>
            </ul>
          </div>
          <div className="footer__application">
            <h3 className="footer__section-heading">Ứng dụng UnimiFood</h3>
            <ul className="footer__application-list">
              <li className="footer__application-item">Giới thiệu</li>
              <li className="footer__application-item">Trung tâm trợ giúp</li>
              <li className="footer__application-item">Quy chế</li>
            </ul>
          </div>
          <div className="footer__more">
            <h3 className="footer__more-logo">UNIMI FOOD</h3>
            <span className="footer__more-certificate">© 2021 UNIMI Food</span>
            <ul className="footer__more-social">
              <li>
                <a
                  title="Facebook"
                  target="_blank"
                  href="https://www.facebook.com/"
                  rel="noreferrer"
                >
                  <span className="social-icon facebook-icon">
                    <i className="fab fa-facebook-f" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  title="Instagram"
                  target="_blank"
                  href="https://www.instagram.com/"
                  rel="noreferrer"
                >
                  <span className="social-icon instagram-icon">
                    <i className="fab fa-instagram" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__location">
            <h3 className="footer__section-heading"> Địa chỉ công ty</h3>
            <span className="footer__location-line">
              <p> Công Ty cổ phần Unimi</p>
              <p> Lầu 8, Tòa nhà E</p>
              <p> khu phố 6, Thủ Đức, Thành phố Hồ Chí Minh</p>
              <p> Giấy CN ĐKDN số: 03564255489</p>
              <p> do Sở Kế hoạch và Đầu tư TP.HCM cấp ngày 11/6/2021,</p>
              <p> sửa đổi lần thứ 2, ngày 21/10/2021</p>
              <p> Số điện thoại: 1900 2042</p>
              <p>
                Email
                {' '}
                <a href="mailto:info@unimifood.vn"> info@unimifood.vn </a>
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
