import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  money: any;
  numeric: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "customer" */
export type Customer = {
  __typename?: 'customer';
  date_of_birth: Scalars['date'];
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  orders: Array<Order>;
  /** An aggregate relationship */
  orders_aggregate: Order_Aggregate;
  sum_of_orders: Scalars['numeric'];
  vip_status: Scalars['String'];
};


/** columns and relationships of "customer" */
export type CustomerOrdersArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


/** columns and relationships of "customer" */
export type CustomerOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};

/** aggregated selection of "customer" */
export type Customer_Aggregate = {
  __typename?: 'customer_aggregate';
  aggregate?: Maybe<Customer_Aggregate_Fields>;
  nodes: Array<Customer>;
};

/** aggregate fields of "customer" */
export type Customer_Aggregate_Fields = {
  __typename?: 'customer_aggregate_fields';
  avg?: Maybe<Customer_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Customer_Max_Fields>;
  min?: Maybe<Customer_Min_Fields>;
  stddev?: Maybe<Customer_Stddev_Fields>;
  stddev_pop?: Maybe<Customer_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Customer_Stddev_Samp_Fields>;
  sum?: Maybe<Customer_Sum_Fields>;
  var_pop?: Maybe<Customer_Var_Pop_Fields>;
  var_samp?: Maybe<Customer_Var_Samp_Fields>;
  variance?: Maybe<Customer_Variance_Fields>;
};


/** aggregate fields of "customer" */
export type Customer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Customer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Customer_Avg_Fields = {
  __typename?: 'customer_avg_fields';
  id?: Maybe<Scalars['Float']>;
  sum_of_orders?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "customer". All fields are combined with a logical 'AND'. */
export type Customer_Bool_Exp = {
  _and?: InputMaybe<Array<Customer_Bool_Exp>>;
  _not?: InputMaybe<Customer_Bool_Exp>;
  _or?: InputMaybe<Array<Customer_Bool_Exp>>;
  date_of_birth?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  orders?: InputMaybe<Order_Bool_Exp>;
  sum_of_orders?: InputMaybe<Numeric_Comparison_Exp>;
  vip_status?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "customer" */
export enum Customer_Constraint {
  /** unique or primary key constraint */
  CustomerPkey = 'customer_pkey'
}

/** input type for incrementing numeric columns in table "customer" */
export type Customer_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  sum_of_orders?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "customer" */
export type Customer_Insert_Input = {
  date_of_birth?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  orders?: InputMaybe<Order_Arr_Rel_Insert_Input>;
  sum_of_orders?: InputMaybe<Scalars['numeric']>;
  vip_status?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Customer_Max_Fields = {
  __typename?: 'customer_max_fields';
  date_of_birth?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  sum_of_orders?: Maybe<Scalars['numeric']>;
  vip_status?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Customer_Min_Fields = {
  __typename?: 'customer_min_fields';
  date_of_birth?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  sum_of_orders?: Maybe<Scalars['numeric']>;
  vip_status?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "customer" */
export type Customer_Mutation_Response = {
  __typename?: 'customer_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Customer>;
};

/** input type for inserting object relation for remote table "customer" */
export type Customer_Obj_Rel_Insert_Input = {
  data: Customer_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Customer_On_Conflict>;
};

/** on conflict condition type for table "customer" */
export type Customer_On_Conflict = {
  constraint: Customer_Constraint;
  update_columns?: Array<Customer_Update_Column>;
  where?: InputMaybe<Customer_Bool_Exp>;
};

/** Ordering options when selecting data from "customer". */
export type Customer_Order_By = {
  date_of_birth?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Order_Aggregate_Order_By>;
  sum_of_orders?: InputMaybe<Order_By>;
  vip_status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: customer */
export type Customer_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "customer" */
export enum Customer_Select_Column {
  /** column name */
  DateOfBirth = 'date_of_birth',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  SumOfOrders = 'sum_of_orders',
  /** column name */
  VipStatus = 'vip_status'
}

/** input type for updating data in table "customer" */
export type Customer_Set_Input = {
  date_of_birth?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  sum_of_orders?: InputMaybe<Scalars['numeric']>;
  vip_status?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Customer_Stddev_Fields = {
  __typename?: 'customer_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  sum_of_orders?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Customer_Stddev_Pop_Fields = {
  __typename?: 'customer_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  sum_of_orders?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Customer_Stddev_Samp_Fields = {
  __typename?: 'customer_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  sum_of_orders?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Customer_Sum_Fields = {
  __typename?: 'customer_sum_fields';
  id?: Maybe<Scalars['Int']>;
  sum_of_orders?: Maybe<Scalars['numeric']>;
};

/** update columns of table "customer" */
export enum Customer_Update_Column {
  /** column name */
  DateOfBirth = 'date_of_birth',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  SumOfOrders = 'sum_of_orders',
  /** column name */
  VipStatus = 'vip_status'
}

/** aggregate var_pop on columns */
export type Customer_Var_Pop_Fields = {
  __typename?: 'customer_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  sum_of_orders?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Customer_Var_Samp_Fields = {
  __typename?: 'customer_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  sum_of_orders?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Customer_Variance_Fields = {
  __typename?: 'customer_variance_fields';
  id?: Maybe<Scalars['Float']>;
  sum_of_orders?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** Boolean expression to compare columns of type "money". All fields are combined with logical 'AND'. */
export type Money_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['money']>;
  _gt?: InputMaybe<Scalars['money']>;
  _gte?: InputMaybe<Scalars['money']>;
  _in?: InputMaybe<Array<Scalars['money']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['money']>;
  _lte?: InputMaybe<Scalars['money']>;
  _neq?: InputMaybe<Scalars['money']>;
  _nin?: InputMaybe<Array<Scalars['money']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "customer" */
  delete_customer?: Maybe<Customer_Mutation_Response>;
  /** delete single row from the table: "customer" */
  delete_customer_by_pk?: Maybe<Customer>;
  /** delete data from the table: "order" */
  delete_order?: Maybe<Order_Mutation_Response>;
  /** delete single row from the table: "order" */
  delete_order_by_pk?: Maybe<Order>;
  /** delete data from the table: "product" */
  delete_product?: Maybe<Product_Mutation_Response>;
  /** delete single row from the table: "product" */
  delete_product_by_pk?: Maybe<Product>;
  /** delete data from the table: "product_order" */
  delete_product_order?: Maybe<Product_Order_Mutation_Response>;
  /** delete single row from the table: "product_order" */
  delete_product_order_by_pk?: Maybe<Product_Order>;
  /** insert data into the table: "customer" */
  insert_customer?: Maybe<Customer_Mutation_Response>;
  /** insert a single row into the table: "customer" */
  insert_customer_one?: Maybe<Customer>;
  /** insert data into the table: "order" */
  insert_order?: Maybe<Order_Mutation_Response>;
  /** insert a single row into the table: "order" */
  insert_order_one?: Maybe<Order>;
  /** insert data into the table: "product" */
  insert_product?: Maybe<Product_Mutation_Response>;
  /** insert a single row into the table: "product" */
  insert_product_one?: Maybe<Product>;
  /** insert data into the table: "product_order" */
  insert_product_order?: Maybe<Product_Order_Mutation_Response>;
  /** insert a single row into the table: "product_order" */
  insert_product_order_one?: Maybe<Product_Order>;
  /** update data of the table: "customer" */
  update_customer?: Maybe<Customer_Mutation_Response>;
  /** update single row of the table: "customer" */
  update_customer_by_pk?: Maybe<Customer>;
  /** update data of the table: "order" */
  update_order?: Maybe<Order_Mutation_Response>;
  /** update single row of the table: "order" */
  update_order_by_pk?: Maybe<Order>;
  /** update data of the table: "product" */
  update_product?: Maybe<Product_Mutation_Response>;
  /** update single row of the table: "product" */
  update_product_by_pk?: Maybe<Product>;
  /** update data of the table: "product_order" */
  update_product_order?: Maybe<Product_Order_Mutation_Response>;
  /** update single row of the table: "product_order" */
  update_product_order_by_pk?: Maybe<Product_Order>;
};


/** mutation root */
export type Mutation_RootDelete_CustomerArgs = {
  where: Customer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Customer_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_OrderArgs = {
  where: Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ProductArgs = {
  where: Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Product_OrderArgs = {
  where: Product_Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Order_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_CustomerArgs = {
  objects: Array<Customer_Insert_Input>;
  on_conflict?: InputMaybe<Customer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Customer_OneArgs = {
  object: Customer_Insert_Input;
  on_conflict?: InputMaybe<Customer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrderArgs = {
  objects: Array<Order_Insert_Input>;
  on_conflict?: InputMaybe<Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_OneArgs = {
  object: Order_Insert_Input;
  on_conflict?: InputMaybe<Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProductArgs = {
  objects: Array<Product_Insert_Input>;
  on_conflict?: InputMaybe<Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_OneArgs = {
  object: Product_Insert_Input;
  on_conflict?: InputMaybe<Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_OrderArgs = {
  objects: Array<Product_Order_Insert_Input>;
  on_conflict?: InputMaybe<Product_Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Order_OneArgs = {
  object: Product_Order_Insert_Input;
  on_conflict?: InputMaybe<Product_Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CustomerArgs = {
  _inc?: InputMaybe<Customer_Inc_Input>;
  _set?: InputMaybe<Customer_Set_Input>;
  where: Customer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Customer_By_PkArgs = {
  _inc?: InputMaybe<Customer_Inc_Input>;
  _set?: InputMaybe<Customer_Set_Input>;
  pk_columns: Customer_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OrderArgs = {
  _inc?: InputMaybe<Order_Inc_Input>;
  _set?: InputMaybe<Order_Set_Input>;
  where: Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_By_PkArgs = {
  _inc?: InputMaybe<Order_Inc_Input>;
  _set?: InputMaybe<Order_Set_Input>;
  pk_columns: Order_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProductArgs = {
  _inc?: InputMaybe<Product_Inc_Input>;
  _set?: InputMaybe<Product_Set_Input>;
  where: Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_By_PkArgs = {
  _inc?: InputMaybe<Product_Inc_Input>;
  _set?: InputMaybe<Product_Set_Input>;
  pk_columns: Product_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_OrderArgs = {
  _inc?: InputMaybe<Product_Order_Inc_Input>;
  _set?: InputMaybe<Product_Order_Set_Input>;
  where: Product_Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Order_By_PkArgs = {
  _inc?: InputMaybe<Product_Order_Inc_Input>;
  _set?: InputMaybe<Product_Order_Set_Input>;
  pk_columns: Product_Order_Pk_Columns_Input;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** columns and relationships of "order" */
export type Order = {
  __typename?: 'order';
  /** An object relationship */
  customer: Customer;
  customer_id: Scalars['Int'];
  date_of_order: Scalars['date'];
  id: Scalars['Int'];
  number_of_products: Scalars['Int'];
  /** An array relationship */
  products_order: Array<Product_Order>;
  /** An aggregate relationship */
  products_order_aggregate: Product_Order_Aggregate;
  sum: Scalars['money'];
};


/** columns and relationships of "order" */
export type OrderProducts_OrderArgs = {
  distinct_on?: InputMaybe<Array<Product_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Order_Order_By>>;
  where?: InputMaybe<Product_Order_Bool_Exp>;
};


/** columns and relationships of "order" */
export type OrderProducts_Order_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Order_Order_By>>;
  where?: InputMaybe<Product_Order_Bool_Exp>;
};

/** aggregated selection of "order" */
export type Order_Aggregate = {
  __typename?: 'order_aggregate';
  aggregate?: Maybe<Order_Aggregate_Fields>;
  nodes: Array<Order>;
};

/** aggregate fields of "order" */
export type Order_Aggregate_Fields = {
  __typename?: 'order_aggregate_fields';
  avg?: Maybe<Order_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Order_Max_Fields>;
  min?: Maybe<Order_Min_Fields>;
  stddev?: Maybe<Order_Stddev_Fields>;
  stddev_pop?: Maybe<Order_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Order_Stddev_Samp_Fields>;
  sum?: Maybe<Order_Sum_Fields>;
  var_pop?: Maybe<Order_Var_Pop_Fields>;
  var_samp?: Maybe<Order_Var_Samp_Fields>;
  variance?: Maybe<Order_Variance_Fields>;
};


/** aggregate fields of "order" */
export type Order_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "order" */
export type Order_Aggregate_Order_By = {
  avg?: InputMaybe<Order_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Order_Max_Order_By>;
  min?: InputMaybe<Order_Min_Order_By>;
  stddev?: InputMaybe<Order_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Order_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Order_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Order_Sum_Order_By>;
  var_pop?: InputMaybe<Order_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Order_Var_Samp_Order_By>;
  variance?: InputMaybe<Order_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "order" */
export type Order_Arr_Rel_Insert_Input = {
  data: Array<Order_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Order_On_Conflict>;
};

/** aggregate avg on columns */
export type Order_Avg_Fields = {
  __typename?: 'order_avg_fields';
  customer_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  number_of_products?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "order" */
export type Order_Avg_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  number_of_products?: InputMaybe<Order_By>;
  sum?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "order". All fields are combined with a logical 'AND'. */
export type Order_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Bool_Exp>>;
  _not?: InputMaybe<Order_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Bool_Exp>>;
  customer?: InputMaybe<Customer_Bool_Exp>;
  customer_id?: InputMaybe<Int_Comparison_Exp>;
  date_of_order?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  number_of_products?: InputMaybe<Int_Comparison_Exp>;
  products_order?: InputMaybe<Product_Order_Bool_Exp>;
  sum?: InputMaybe<Money_Comparison_Exp>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** unique or primary key constraints on table "order" */
export enum Order_Constraint {
  /** unique or primary key constraint */
  OrderPkey = 'order_pkey'
}

/** input type for incrementing numeric columns in table "order" */
export type Order_Inc_Input = {
  customer_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  number_of_products?: InputMaybe<Scalars['Int']>;
  sum?: InputMaybe<Scalars['money']>;
};

/** input type for inserting data into table "order" */
export type Order_Insert_Input = {
  customer?: InputMaybe<Customer_Obj_Rel_Insert_Input>;
  customer_id?: InputMaybe<Scalars['Int']>;
  date_of_order?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['Int']>;
  number_of_products?: InputMaybe<Scalars['Int']>;
  products_order?: InputMaybe<Product_Order_Arr_Rel_Insert_Input>;
  sum?: InputMaybe<Scalars['money']>;
};

/** aggregate max on columns */
export type Order_Max_Fields = {
  __typename?: 'order_max_fields';
  customer_id?: Maybe<Scalars['Int']>;
  date_of_order?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  number_of_products?: Maybe<Scalars['Int']>;
  sum?: Maybe<Scalars['money']>;
};

/** order by max() on columns of table "order" */
export type Order_Max_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  date_of_order?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  number_of_products?: InputMaybe<Order_By>;
  sum?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Min_Fields = {
  __typename?: 'order_min_fields';
  customer_id?: Maybe<Scalars['Int']>;
  date_of_order?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  number_of_products?: Maybe<Scalars['Int']>;
  sum?: Maybe<Scalars['money']>;
};

/** order by min() on columns of table "order" */
export type Order_Min_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  date_of_order?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  number_of_products?: InputMaybe<Order_By>;
  sum?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "order" */
export type Order_Mutation_Response = {
  __typename?: 'order_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Order>;
};

/** input type for inserting object relation for remote table "order" */
export type Order_Obj_Rel_Insert_Input = {
  data: Order_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Order_On_Conflict>;
};

/** on conflict condition type for table "order" */
export type Order_On_Conflict = {
  constraint: Order_Constraint;
  update_columns?: Array<Order_Update_Column>;
  where?: InputMaybe<Order_Bool_Exp>;
};

/** Ordering options when selecting data from "order". */
export type Order_Order_By = {
  customer?: InputMaybe<Customer_Order_By>;
  customer_id?: InputMaybe<Order_By>;
  date_of_order?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  number_of_products?: InputMaybe<Order_By>;
  products_order_aggregate?: InputMaybe<Product_Order_Aggregate_Order_By>;
  sum?: InputMaybe<Order_By>;
};

/** primary key columns input for table: order */
export type Order_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "order" */
export enum Order_Select_Column {
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  DateOfOrder = 'date_of_order',
  /** column name */
  Id = 'id',
  /** column name */
  NumberOfProducts = 'number_of_products',
  /** column name */
  Sum = 'sum'
}

/** input type for updating data in table "order" */
export type Order_Set_Input = {
  customer_id?: InputMaybe<Scalars['Int']>;
  date_of_order?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['Int']>;
  number_of_products?: InputMaybe<Scalars['Int']>;
  sum?: InputMaybe<Scalars['money']>;
};

/** aggregate stddev on columns */
export type Order_Stddev_Fields = {
  __typename?: 'order_stddev_fields';
  customer_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  number_of_products?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "order" */
export type Order_Stddev_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  number_of_products?: InputMaybe<Order_By>;
  sum?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Order_Stddev_Pop_Fields = {
  __typename?: 'order_stddev_pop_fields';
  customer_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  number_of_products?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "order" */
export type Order_Stddev_Pop_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  number_of_products?: InputMaybe<Order_By>;
  sum?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Order_Stddev_Samp_Fields = {
  __typename?: 'order_stddev_samp_fields';
  customer_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  number_of_products?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "order" */
export type Order_Stddev_Samp_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  number_of_products?: InputMaybe<Order_By>;
  sum?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Order_Sum_Fields = {
  __typename?: 'order_sum_fields';
  customer_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  number_of_products?: Maybe<Scalars['Int']>;
  sum?: Maybe<Scalars['money']>;
};

/** order by sum() on columns of table "order" */
export type Order_Sum_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  number_of_products?: InputMaybe<Order_By>;
  sum?: InputMaybe<Order_By>;
};

/** update columns of table "order" */
export enum Order_Update_Column {
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  DateOfOrder = 'date_of_order',
  /** column name */
  Id = 'id',
  /** column name */
  NumberOfProducts = 'number_of_products',
  /** column name */
  Sum = 'sum'
}

/** aggregate var_pop on columns */
export type Order_Var_Pop_Fields = {
  __typename?: 'order_var_pop_fields';
  customer_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  number_of_products?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "order" */
export type Order_Var_Pop_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  number_of_products?: InputMaybe<Order_By>;
  sum?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Order_Var_Samp_Fields = {
  __typename?: 'order_var_samp_fields';
  customer_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  number_of_products?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "order" */
export type Order_Var_Samp_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  number_of_products?: InputMaybe<Order_By>;
  sum?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Order_Variance_Fields = {
  __typename?: 'order_variance_fields';
  customer_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  number_of_products?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "order" */
export type Order_Variance_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  number_of_products?: InputMaybe<Order_By>;
  sum?: InputMaybe<Order_By>;
};

/** columns and relationships of "product" */
export type Product = {
  __typename?: 'product';
  id: Scalars['Int'];
  price: Scalars['money'];
  product_name: Scalars['String'];
  /** An array relationship */
  product_orders: Array<Product_Order>;
  /** An aggregate relationship */
  product_orders_aggregate: Product_Order_Aggregate;
};


/** columns and relationships of "product" */
export type ProductProduct_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Product_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Order_Order_By>>;
  where?: InputMaybe<Product_Order_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductProduct_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Order_Order_By>>;
  where?: InputMaybe<Product_Order_Bool_Exp>;
};

/** aggregated selection of "product" */
export type Product_Aggregate = {
  __typename?: 'product_aggregate';
  aggregate?: Maybe<Product_Aggregate_Fields>;
  nodes: Array<Product>;
};

/** aggregate fields of "product" */
export type Product_Aggregate_Fields = {
  __typename?: 'product_aggregate_fields';
  avg?: Maybe<Product_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Product_Max_Fields>;
  min?: Maybe<Product_Min_Fields>;
  stddev?: Maybe<Product_Stddev_Fields>;
  stddev_pop?: Maybe<Product_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Product_Stddev_Samp_Fields>;
  sum?: Maybe<Product_Sum_Fields>;
  var_pop?: Maybe<Product_Var_Pop_Fields>;
  var_samp?: Maybe<Product_Var_Samp_Fields>;
  variance?: Maybe<Product_Variance_Fields>;
};


/** aggregate fields of "product" */
export type Product_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Product_Avg_Fields = {
  __typename?: 'product_avg_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "product". All fields are combined with a logical 'AND'. */
export type Product_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Bool_Exp>>;
  _not?: InputMaybe<Product_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  price?: InputMaybe<Money_Comparison_Exp>;
  product_name?: InputMaybe<String_Comparison_Exp>;
  product_orders?: InputMaybe<Product_Order_Bool_Exp>;
};

/** unique or primary key constraints on table "product" */
export enum Product_Constraint {
  /** unique or primary key constraint */
  ProductPkey = 'product_pkey'
}

/** input type for incrementing numeric columns in table "product" */
export type Product_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['money']>;
};

/** input type for inserting data into table "product" */
export type Product_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['money']>;
  product_name?: InputMaybe<Scalars['String']>;
  product_orders?: InputMaybe<Product_Order_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Product_Max_Fields = {
  __typename?: 'product_max_fields';
  id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['money']>;
  product_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Product_Min_Fields = {
  __typename?: 'product_min_fields';
  id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['money']>;
  product_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "product" */
export type Product_Mutation_Response = {
  __typename?: 'product_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Product>;
};

/** input type for inserting object relation for remote table "product" */
export type Product_Obj_Rel_Insert_Input = {
  data: Product_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Product_On_Conflict>;
};

/** on conflict condition type for table "product" */
export type Product_On_Conflict = {
  constraint: Product_Constraint;
  update_columns?: Array<Product_Update_Column>;
  where?: InputMaybe<Product_Bool_Exp>;
};

/** columns and relationships of "product_order" */
export type Product_Order = {
  __typename?: 'product_order';
  id: Scalars['Int'];
  /** An object relationship */
  order: Order;
  order_id: Scalars['Int'];
  /** An object relationship */
  product: Product;
  product_id: Scalars['Int'];
};

/** aggregated selection of "product_order" */
export type Product_Order_Aggregate = {
  __typename?: 'product_order_aggregate';
  aggregate?: Maybe<Product_Order_Aggregate_Fields>;
  nodes: Array<Product_Order>;
};

/** aggregate fields of "product_order" */
export type Product_Order_Aggregate_Fields = {
  __typename?: 'product_order_aggregate_fields';
  avg?: Maybe<Product_Order_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Product_Order_Max_Fields>;
  min?: Maybe<Product_Order_Min_Fields>;
  stddev?: Maybe<Product_Order_Stddev_Fields>;
  stddev_pop?: Maybe<Product_Order_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Product_Order_Stddev_Samp_Fields>;
  sum?: Maybe<Product_Order_Sum_Fields>;
  var_pop?: Maybe<Product_Order_Var_Pop_Fields>;
  var_samp?: Maybe<Product_Order_Var_Samp_Fields>;
  variance?: Maybe<Product_Order_Variance_Fields>;
};


/** aggregate fields of "product_order" */
export type Product_Order_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Order_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "product_order" */
export type Product_Order_Aggregate_Order_By = {
  avg?: InputMaybe<Product_Order_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Product_Order_Max_Order_By>;
  min?: InputMaybe<Product_Order_Min_Order_By>;
  stddev?: InputMaybe<Product_Order_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Product_Order_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Product_Order_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Product_Order_Sum_Order_By>;
  var_pop?: InputMaybe<Product_Order_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Product_Order_Var_Samp_Order_By>;
  variance?: InputMaybe<Product_Order_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "product_order" */
export type Product_Order_Arr_Rel_Insert_Input = {
  data: Array<Product_Order_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Product_Order_On_Conflict>;
};

/** aggregate avg on columns */
export type Product_Order_Avg_Fields = {
  __typename?: 'product_order_avg_fields';
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "product_order" */
export type Product_Order_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "product_order". All fields are combined with a logical 'AND'. */
export type Product_Order_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Order_Bool_Exp>>;
  _not?: InputMaybe<Product_Order_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Order_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  order?: InputMaybe<Order_Bool_Exp>;
  order_id?: InputMaybe<Int_Comparison_Exp>;
  product?: InputMaybe<Product_Bool_Exp>;
  product_id?: InputMaybe<Int_Comparison_Exp>;
};

/** Ordering options when selecting data from "product". */
export type Product_Order_By = {
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product_name?: InputMaybe<Order_By>;
  product_orders_aggregate?: InputMaybe<Product_Order_Aggregate_Order_By>;
};

/** unique or primary key constraints on table "product_order" */
export enum Product_Order_Constraint {
  /** unique or primary key constraint */
  ProductOrderPkey = 'product_order_pkey'
}

/** input type for incrementing numeric columns in table "product_order" */
export type Product_Order_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  order_id?: InputMaybe<Scalars['Int']>;
  product_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "product_order" */
export type Product_Order_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Order_Obj_Rel_Insert_Input>;
  order_id?: InputMaybe<Scalars['Int']>;
  product?: InputMaybe<Product_Obj_Rel_Insert_Input>;
  product_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Product_Order_Max_Fields = {
  __typename?: 'product_order_max_fields';
  id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  product_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "product_order" */
export type Product_Order_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Order_Min_Fields = {
  __typename?: 'product_order_min_fields';
  id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  product_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "product_order" */
export type Product_Order_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "product_order" */
export type Product_Order_Mutation_Response = {
  __typename?: 'product_order_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Order>;
};

/** on conflict condition type for table "product_order" */
export type Product_Order_On_Conflict = {
  constraint: Product_Order_Constraint;
  update_columns?: Array<Product_Order_Update_Column>;
  where?: InputMaybe<Product_Order_Bool_Exp>;
};

/** Ordering options when selecting data from "product_order". */
export type Product_Order_Order_By = {
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_Order_By>;
  order_id?: InputMaybe<Order_By>;
  product?: InputMaybe<Product_Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: product_order */
export type Product_Order_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "product_order" */
export enum Product_Order_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  ProductId = 'product_id'
}

/** input type for updating data in table "product_order" */
export type Product_Order_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  order_id?: InputMaybe<Scalars['Int']>;
  product_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Product_Order_Stddev_Fields = {
  __typename?: 'product_order_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "product_order" */
export type Product_Order_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Product_Order_Stddev_Pop_Fields = {
  __typename?: 'product_order_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "product_order" */
export type Product_Order_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Product_Order_Stddev_Samp_Fields = {
  __typename?: 'product_order_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "product_order" */
export type Product_Order_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Product_Order_Sum_Fields = {
  __typename?: 'product_order_sum_fields';
  id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  product_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "product_order" */
export type Product_Order_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** update columns of table "product_order" */
export enum Product_Order_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  ProductId = 'product_id'
}

/** aggregate var_pop on columns */
export type Product_Order_Var_Pop_Fields = {
  __typename?: 'product_order_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "product_order" */
export type Product_Order_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Product_Order_Var_Samp_Fields = {
  __typename?: 'product_order_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "product_order" */
export type Product_Order_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Product_Order_Variance_Fields = {
  __typename?: 'product_order_variance_fields';
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "product_order" */
export type Product_Order_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: product */
export type Product_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "product" */
export enum Product_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Price = 'price',
  /** column name */
  ProductName = 'product_name'
}

/** input type for updating data in table "product" */
export type Product_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['money']>;
  product_name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Product_Stddev_Fields = {
  __typename?: 'product_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Product_Stddev_Pop_Fields = {
  __typename?: 'product_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Product_Stddev_Samp_Fields = {
  __typename?: 'product_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Product_Sum_Fields = {
  __typename?: 'product_sum_fields';
  id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['money']>;
};

/** update columns of table "product" */
export enum Product_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Price = 'price',
  /** column name */
  ProductName = 'product_name'
}

/** aggregate var_pop on columns */
export type Product_Var_Pop_Fields = {
  __typename?: 'product_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Product_Var_Samp_Fields = {
  __typename?: 'product_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Product_Variance_Fields = {
  __typename?: 'product_variance_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "customer" */
  customer: Array<Customer>;
  /** fetch aggregated fields from the table: "customer" */
  customer_aggregate: Customer_Aggregate;
  /** fetch data from the table: "customer" using primary key columns */
  customer_by_pk?: Maybe<Customer>;
  /** fetch data from the table: "order" */
  order: Array<Order>;
  /** fetch aggregated fields from the table: "order" */
  order_aggregate: Order_Aggregate;
  /** fetch data from the table: "order" using primary key columns */
  order_by_pk?: Maybe<Order>;
  /** fetch data from the table: "product" */
  product: Array<Product>;
  /** fetch aggregated fields from the table: "product" */
  product_aggregate: Product_Aggregate;
  /** fetch data from the table: "product" using primary key columns */
  product_by_pk?: Maybe<Product>;
  /** fetch data from the table: "product_order" */
  product_order: Array<Product_Order>;
  /** fetch aggregated fields from the table: "product_order" */
  product_order_aggregate: Product_Order_Aggregate;
  /** fetch data from the table: "product_order" using primary key columns */
  product_order_by_pk?: Maybe<Product_Order>;
};


export type Query_RootCustomerArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Order_By>>;
  where?: InputMaybe<Customer_Bool_Exp>;
};


export type Query_RootCustomer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Order_By>>;
  where?: InputMaybe<Customer_Bool_Exp>;
};


export type Query_RootCustomer_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootOrderArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


export type Query_RootOrder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


export type Query_RootOrder_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootProductArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


export type Query_RootProduct_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


export type Query_RootProduct_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootProduct_OrderArgs = {
  distinct_on?: InputMaybe<Array<Product_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Order_Order_By>>;
  where?: InputMaybe<Product_Order_Bool_Exp>;
};


export type Query_RootProduct_Order_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Order_Order_By>>;
  where?: InputMaybe<Product_Order_Bool_Exp>;
};


export type Query_RootProduct_Order_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "customer" */
  customer: Array<Customer>;
  /** fetch aggregated fields from the table: "customer" */
  customer_aggregate: Customer_Aggregate;
  /** fetch data from the table: "customer" using primary key columns */
  customer_by_pk?: Maybe<Customer>;
  /** fetch data from the table: "order" */
  order: Array<Order>;
  /** fetch aggregated fields from the table: "order" */
  order_aggregate: Order_Aggregate;
  /** fetch data from the table: "order" using primary key columns */
  order_by_pk?: Maybe<Order>;
  /** fetch data from the table: "product" */
  product: Array<Product>;
  /** fetch aggregated fields from the table: "product" */
  product_aggregate: Product_Aggregate;
  /** fetch data from the table: "product" using primary key columns */
  product_by_pk?: Maybe<Product>;
  /** fetch data from the table: "product_order" */
  product_order: Array<Product_Order>;
  /** fetch aggregated fields from the table: "product_order" */
  product_order_aggregate: Product_Order_Aggregate;
  /** fetch data from the table: "product_order" using primary key columns */
  product_order_by_pk?: Maybe<Product_Order>;
};


export type Subscription_RootCustomerArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Order_By>>;
  where?: InputMaybe<Customer_Bool_Exp>;
};


export type Subscription_RootCustomer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Order_By>>;
  where?: InputMaybe<Customer_Bool_Exp>;
};


export type Subscription_RootCustomer_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootOrderArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


export type Subscription_RootOrder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Order_By>>;
  where?: InputMaybe<Order_Bool_Exp>;
};


export type Subscription_RootOrder_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootProductArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


export type Subscription_RootProduct_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


export type Subscription_RootProduct_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootProduct_OrderArgs = {
  distinct_on?: InputMaybe<Array<Product_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Order_Order_By>>;
  where?: InputMaybe<Product_Order_Bool_Exp>;
};


export type Subscription_RootProduct_Order_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Order_Order_By>>;
  where?: InputMaybe<Product_Order_Bool_Exp>;
};


export type Subscription_RootProduct_Order_By_PkArgs = {
  id: Scalars['Int'];
};

export type GetCustomerQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetCustomerQuery = { __typename?: 'query_root', customer_by_pk?: { __typename?: 'customer', id: number, name: string, date_of_birth: any, vip_status: string } | null | undefined };

export type GetCustomersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomersQuery = { __typename?: 'query_root', customer: Array<{ __typename: 'customer', id: number, name: string, date_of_birth: any, sum_of_orders: any, vip_status: string }> };

export type CustomerDetailsFragment = { __typename: 'customer', id: number, name: string, date_of_birth: any, sum_of_orders: any, vip_status: string };

export type GetOrdersQueryVariables = Exact<{
  customerid: Scalars['Int'];
}>;


export type GetOrdersQuery = { __typename?: 'query_root', order: Array<{ __typename?: 'order', customer_id: number, date_of_order: any, id: number, number_of_products: number, sum: any }> };

export const CustomerDetailsFragmentDoc = gql`
    fragment CustomerDetails on customer {
  id
  name
  date_of_birth
  sum_of_orders
  vip_status
  __typename
}
    `;
export const GetCustomerDocument = gql`
    query GetCustomer($id: Int!) {
  customer_by_pk(id: $id) {
    id
    name
    date_of_birth
    vip_status
  }
}
    `;

/**
 * __useGetCustomerQuery__
 *
 * To run a query within a React component, call `useGetCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCustomerQuery(baseOptions: Apollo.QueryHookOptions<GetCustomerQuery, GetCustomerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCustomerQuery, GetCustomerQueryVariables>(GetCustomerDocument, options);
      }
export function useGetCustomerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCustomerQuery, GetCustomerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCustomerQuery, GetCustomerQueryVariables>(GetCustomerDocument, options);
        }
export type GetCustomerQueryHookResult = ReturnType<typeof useGetCustomerQuery>;
export type GetCustomerLazyQueryHookResult = ReturnType<typeof useGetCustomerLazyQuery>;
export type GetCustomerQueryResult = Apollo.QueryResult<GetCustomerQuery, GetCustomerQueryVariables>;
export const GetCustomersDocument = gql`
    query GetCustomers {
  customer {
    ...CustomerDetails
  }
}
    ${CustomerDetailsFragmentDoc}`;

/**
 * __useGetCustomersQuery__
 *
 * To run a query within a React component, call `useGetCustomersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCustomersQuery(baseOptions?: Apollo.QueryHookOptions<GetCustomersQuery, GetCustomersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCustomersQuery, GetCustomersQueryVariables>(GetCustomersDocument, options);
      }
export function useGetCustomersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCustomersQuery, GetCustomersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCustomersQuery, GetCustomersQueryVariables>(GetCustomersDocument, options);
        }
export type GetCustomersQueryHookResult = ReturnType<typeof useGetCustomersQuery>;
export type GetCustomersLazyQueryHookResult = ReturnType<typeof useGetCustomersLazyQuery>;
export type GetCustomersQueryResult = Apollo.QueryResult<GetCustomersQuery, GetCustomersQueryVariables>;
export const GetOrdersDocument = gql`
    query GetOrders($customerid: Int!) {
  order(where: {customer_id: {_eq: $customerid}}) {
    customer_id
    date_of_order
    id
    number_of_products
    sum
  }
}
    `;

/**
 * __useGetOrdersQuery__
 *
 * To run a query within a React component, call `useGetOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrdersQuery({
 *   variables: {
 *      customerid: // value for 'customerid'
 *   },
 * });
 */
export function useGetOrdersQuery(baseOptions: Apollo.QueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, options);
      }
export function useGetOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, options);
        }
export type GetOrdersQueryHookResult = ReturnType<typeof useGetOrdersQuery>;
export type GetOrdersLazyQueryHookResult = ReturnType<typeof useGetOrdersLazyQuery>;
export type GetOrdersQueryResult = Apollo.QueryResult<GetOrdersQuery, GetOrdersQueryVariables>;