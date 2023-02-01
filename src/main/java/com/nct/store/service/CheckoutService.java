package com.nct.store.service;

import com.nct.store.dto.Purchase;
import com.nct.store.dto.PurchaseResponse;

public interface CheckoutService {
    PurchaseResponse placeOrder(Purchase purchase);
}
