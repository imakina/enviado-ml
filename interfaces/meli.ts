export interface jwt {
    access_token: string
    expires_in: number
    scope: string
    token_type: string
    user_id: number
}

export interface Profile {
    address:                  Address;
    alternative_phone:        Phone;
    bill_data:                BillData;
    buyer_reputation:         BuyerReputation;
    company:                  Company;
    context:                  Context;
    country_id:               string;
    credit:                   Credit;
    email:                    string;
    first_name:               string;
    gender:                   string;
    id:                       number;
    identification:           Identification;
    last_name:                string;
    logo:                     null;
    nickname:                 string;
    permalink:                string;
    phone:                    Phone;
    points:                   number;
    registration_date:        Date;
    registration_identifiers: any[];
    secure_email:             string;
    seller_experience:        string;
    seller_reputation:        SellerReputation;
    site_id:                  string;
    status:                   Status;
    tags:                     string[];
    user_type:                string;
   }
   
   export interface Address {
    address:  string;
    city:     string;
    state:    string;
    zip_code: string;
   }
   
   export interface Phone {
    area_code: string;
    extension: string;
    number:    string;
    verified?: boolean;
   }
   
   export interface BillData {
    accept_credit_note: null;
   }
   
   export interface BuyerReputation {
    canceled_transactions: number;
    tags:                  any[];
    transactions:          BuyerReputationTransactions;
   }
   
   export interface BuyerReputationTransactions {
    canceled:      Canceled;
    completed:     null;
    not_yet_rated: NotYetRated;
    period:        string;
    total:         null;
    unrated:       Canceled;
   }
   
   export interface Canceled {
    paid:  null;
    total: null;
   }
   
   export interface NotYetRated {
    paid:  null;
    total: null;
    units: null;
   }
   
   export interface Company {
    brand_name:      null;
    city_tax_id:     string;
    corporate_name:  string;
    cust_type_id:    string;
    identification:  string;
    soft_descriptor: null;
    state_tax_id:    string;
   }
   
   export interface Context {
    ip_address: string;
   }
   
   export interface Credit {
    consumed:        number;
    credit_level_id: string;
    rank:            string;
   }
   
   export interface Identification {
    number: string;
    type:   string;
   }
   
   export interface SellerReputation {
    level_id:            null;
    metrics:             Metrics;
    power_seller_status: null;
    transactions:        SellerReputationTransactions;
   }
   
   export interface Metrics {
    cancellations:         Cancellations;
    claims:                Cancellations;
    delayed_handling_time: Cancellations;
    sales:                 Sales;
   }
   
   export interface Cancellations {
    period: string;
    rate:   number;
    value:  number;
   }
   
   export interface Sales {
    completed: number;
    period:    string;
   }
   
   export interface SellerReputationTransactions {
    canceled:  number;
    completed: number;
    period:    string;
    ratings:   Ratings;
    total:     number;
   }
   
   export interface Ratings {
    negative: number;
    neutral:  number;
    positive: number;
   }
   
   export interface Status {
    billing:                  Billing;
    buy:                      Buy;
    confirmed_email:          boolean;
    immediate_payment:        boolean;
    list:                     Buy;
    mercadoenvios:            string;
    mercadopago_account_type: string;
    mercadopago_tc_accepted:  boolean;
    required_action:          null;
    sell:                     Buy;
    shopping_cart:            ShoppingCart;
    site_status:              string;
    user_type:                null;
   }
   
   export interface Billing {
    allow: boolean;
    codes: any[];
   }
   
   export interface Buy {
    allow:             boolean;
    codes:             any[];
    immediate_payment: ImmediatePayment;
   }
   
   export interface ImmediatePayment {
    reasons:  any[];
    required: boolean;
   }
   
   export interface ShoppingCart {
    buy:  string;
    sell: string;
   }

   /* seller items */

   export interface Orders {
    available_orders: AvailableOrder[];
    orders:           Order[];
    paging:           Paging;
    query:            null;
    results:          string[];
    seller_id:        string;
   }
   
   export interface AvailableOrder {
    id:   IDClass | string;
    name: string;
   }
   
   export interface IDClass {
    field:   string;
    id:      string;
    missing: string;
    order:   string;
   }
   
   export interface Order {
    id:   string;
    name: string;
   }
   
   export interface Paging {
    limit:  number;
    offset: number;
    total:  number;
   }
   
// publish

export interface Publish {
 accepts_mercadopago:              boolean;
 attributes:                       Attribute[];
 automatic_relist:                 boolean;
 available_quantity:               number;
 base_price:                       number;
 buying_mode:                      string;
 catalog_listing:                  boolean;
 catalog_product_id:               null;
 category_id:                      string;
 channels:                         string[];
 condition:                        string;
 coverage_areas:                   any[];
 currency_id:                      string;
 date_created:                     Date;
 deal_ids:                         any[];
 descriptions:                     any[];
 differential_pricing:             null;
 domain_id:                        string;
 end_time:                         Date;
 expiration_time:                  Date;
 geolocation:                      Geolocation;
 health:                           null;
 id:                               string;
 initial_quantity:                 number;
 international_delivery_mode:      string;
 inventory_id:                     null;
 item_relations:                   any[];
 last_updated:                     Date;
 listing_source:                   string;
 listing_type_id:                  string;
 location:                         Location;
 non_mercado_pago_payment_methods: any[];
 official_store_id:                null;
 original_price:                   null;
 parent_item_id:                   null;
 permalink:                        string;
 pictures:                         Picture[];
 price:                            number;
 sale_terms:                       SaleTerm[];
 secure_thumbnail:                 string;
 seller_address:                   SellerAddress;
 seller_contact:                   null;
 seller_custom_field:              null;
 seller_id:                        number;
 shipping:                         Shipping;
 site_id:                          string;
 sold_quantity:                    number;
 start_time:                       Date;
 status:                           string;
 stop_time:                        Date;
 sub_status:                       any[];
 subtitle:                         null;
 tags:                             string[];
 thumbnail:                        string;
 thumbnail_id:                     string;
 title:                            string;
 variations:                       any[];
 video_id:                         null;
 warnings:                         any[];
 warranty:                         string;
}

export interface Attribute {
 attribute_group_id:   string;
 attribute_group_name: string;
 id:                   string;
 name:                 string;
 value_id:             null | string;
 value_name:           string;
 value_struct:         null;
 values:               Value[];
}

export interface Value {
 id:     null | string;
 name:   string;
 struct: Struct | null;
}

export interface Struct {
 number: number;
 unit:   string;
}

export interface Geolocation {
 latitude:  string;
 longitude: string;
}

export interface Location {
}

export interface Picture {
 id:         string;
 max_size:   string;
 quality:    string;
 secure_url: string;
 size:       string;
 url:        string;
}

export interface SaleTerm {
 id:           string;
 name:         string;
 value_id:     null | string;
 value_name:   string;
 value_struct: Struct | null;
 values:       Value[];
}

export interface SellerAddress {
 id: number;
}

export interface Shipping {
 dimensions:    null;
 free_shipping: boolean;
 local_pick_up: boolean;
 logistic_type: string;
 methods:       any[];
 mode:          string;
 store_pick_up: boolean;
 tags:          any[];
}

// {
//     "title":"Item de test - No Ofertar",
//     "category_id":"MLA3530",
//     "price":202,
//     "currency_id":"ARS",
//     "available_quantity":10,
//     "buying_mode":"buy_it_now",
//     "condition":"new",
//     "listing_type_id":"gold_special",
//     "sale_terms":[
//        {
//           "id":"WARRANTY_TYPE",
//           "value_name":"Garantía del vendedor"
//        },
//        {
//           "id":"WARRANTY_TIME",
//           "value_name":"90 días"
//        }
//     ],
//     "pictures":[
//        {
//           "source":"http://mla-s2-p.mlstatic.com/968521-MLA20805195516_072016-O.jpg"
//        }
//     ],
//     "attributes":[
//        {
//           "id":"BRAND",
//           "value_name":"Marca del producto"
//        },
//        {
//           "id":"EAN",
//           "value_name":"7898095297749"
//        }
//     ]
//   }
export interface requestItemBase {
    title: string,
    category_id:string,
    price:number,
    currency_id:string,
    available_quantity:number,
    buying_mode:string,
    condition:string,
    sale_terms:any[],
    pictures:any[],
    attributes:any[],
    shipping: Dimensions
}

export interface requestItemPOST extends requestItemBase {
    listing_type_id:string,
}

export interface requestItemPUT extends requestItemBase {
    // description: string
}

export interface Dimensions 
{
    local_pick_up:boolean,
    mode: string,
    dimensions: string
}
