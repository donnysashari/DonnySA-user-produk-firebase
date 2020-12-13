/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { imageNotfound } from '../../assets';
import './style.css';

const Cards = (props) => {
  const { children, dataProduk } = props;

  const swallWrapper = withReactContent(Swal);

  const modalDetailProduk = () => {
    // alert(dataProduk.description);
    console.log(dataProduk);
    swallWrapper.fire({
      title: dataProduk.description,
      html: `
      <div style="display: flex; align-items: center;">
        <div style="padding: 0.3rem 0.5rem; color: rgb(255, 92, 132); background-color: rgb(255, 234, 239); border-radius: 8px;">
          ${dataProduk.display_promo_price_percentage}
        </div>
        <span style="margin-left: 0.5rem;text-decoration: line-through;">
          ${dataProduk.display_normal_price}
        </span>
      </div>
      <h3 style="margin-top: 0; text-align: left">${
        dataProduk.display_price
      }</h3>
      <p style="text-align: left">
        <b>Spesifikasi</b></br>
        Kategori: ${dataProduk.categories.map((item) => {
          return `${item} `;
        })}</br>
        Besaran: ${dataProduk.display_unit}</br>
        </p>
      <p style="text-align: left"><b>Deskripsi</b></br>${dataProduk.name}</p>
      `,
      showCloseButton: true,
      showConfirmButton: false,
      focusConfirm: false,
      imageUrl: `${
        dataProduk.variants[0].images[0].product_url
          ? dataProduk.variants[0].images[0].product_url
          : imageNotfound
      }`,
    });
  };

  return (
    <div className="cards" onClick={modalDetailProduk}>
      {children}
    </div>
  );
};

export default Cards;
