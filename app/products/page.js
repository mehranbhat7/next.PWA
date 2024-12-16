import Link from 'next/link';
import React from 'react';

const Products = () => {
  return (
    <>
      <Link href="/products/shoes">
        {' '}
        <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"></img>
      </Link>
      <Link href="/">HOME</Link>
    </>
  );
};

export default Products;
