resource "azurerm_dns_a_record" "next_app" {
  name                = var.dns_a_record_name
  zone_name           = data.azurerm_dns_zone.this.name
  resource_group_name = data.azurerm_dns_zone.this.resource_group_name
  ttl                 = var.dns_a_record_ttl
  records             = [data.azurerm_public_ip.application_gateway.ip_address]
}

resource "azurerm_redis_cache" "default_primary" {
  name                = var.redis_name
  location            = var.redis_resource_group_location
  resource_group_name = var.redis_resource_group_name
  capacity            = var.redis_capacity
  family              = var.redis_family
  sku_name            = var.redis_sku_name
  minimum_tls_version = var.minimum_tls_version
}
  
