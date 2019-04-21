import { Router } from "express";
import { CustomerController } from "../controller/customer.controller";
const router = Router();
const _cc = new CustomerController();

router.get('/id', _cc.getCustomer() );
 
router.post('', _cc.addCustomer()   );
 
router.patch('',  _cc.updateCustomer()  );

export const customer = router;