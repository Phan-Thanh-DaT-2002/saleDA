import express, { Response, Request, Router } from "express";
const router = express.Router();


  router.get('/', (req: Request, res: Response) => {
  res.render('home');
});

  //Chi tiết sản phẩm
  router.get('/product', (req: Request, res: Response) => {
    res.render('product_detail');
  });
  
  
  //Tìm kiếm sản phẩm
  router.get('/search', (req: Request, res: Response) => {
    res.render('search_product');
  });

  //Giỏ hàng
  router.get('/cart', (req: Request, res: Response) => {
  res.render('cart');
});


export {router}
