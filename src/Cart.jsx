import React from 'react'

export default function Cart() {
    return (
        <div>
            <div class="row justify-content-center m-0">
                <div class="col-md-8 mt-5 mb-5">
                    <div class="card">
                        <div class="card-header bg-dark p-3 d-flex justify-content-between">
                            <h5 class="text-white m-0">Cart Calculation (3)</h5>
                            <button class="btn btn-danger btn-sm">
                                <i class="fa fa-trash-alt mr-2"></i>
                                <span>Empty Cart</span>
                            </button>
                        </div>
                        <div class="card-body p-0">
                            <table class="table cart-table mb-0">
                                <thead>
                                    <tr>
                                        <th>Sr</th>
                                        <th>Product</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th class="text-right">Total Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <button class="prdct-delete">
                                              1
                                            </button>
                                        </td>
                                        <td>
                                            <div class="product-img">
                                                <img src="https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png" width={140} className='img-fluid' alt=""/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="product-name">
                                                <p>Coke - Diet, 355 Ml</p>
                                            </div>
                                        </td>
                                        <td>$120</td>
                                        <td>
                                            <div class="prdct-qty-container d-flex">
                                                <button class="prdct-qty-btn" type="button">
                                                    -
                                                </button>
                                                <input type="text" name="qty" class="qty-input-box text-center" value="1" disabled />
                                                <button class="prdct-qty-btn" type="button">
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td class="text-right">$120</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>&nbsp;</th>
                                        <th colspan="3">&nbsp;</th>
                                        <th>
                                            Items in Cart<span class="ml-2 mr-2">:</span>
                                            <span class="text-danger">3</span>
                                        </th>
                                        <th class="text-right">
                                            Total Price<span class="ml-2 mr-2">:</span>
                                            <span class="text-danger">$450</span>
                                        </th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
