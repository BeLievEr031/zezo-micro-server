class ServiceDto {
  email;
  password;
  productId;
  order_id;
  domain;
  fish;
  payment_Id;
  payment_cycle;
  payment_status;
  active_at;
  system_status;
  status;
  trash;
  createdBy;
  constructor({
    email,
    password,
    productId,
    order_id,
    domain,
    fish,
    payment_Id,
    payment_cycle,
    payment_status,
    active_at,
    system_status,
    status,
    trash,
    createdBy,
  }) {
    this.email = email;
    this.password = password;
    this.productId = productId;
    this.order_id = order_id;
    this.domain = domain;
    this.fish = fish;
    this.payment_Id = payment_Id;
    this.payment_cycle = payment_cycle;
    this.payment_status = payment_status;
    this.active_at = active_at;
    this.system_status = system_status;
    this.status = status;
    this.trash = trash;
    this.createdBy = createdBy;
  }
}

module.exports = ServiceDto;
