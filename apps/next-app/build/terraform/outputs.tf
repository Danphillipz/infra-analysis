
output "redis_connection_string" {
  sensitive = true
  value     = "rediss://:${azurerm_redis_cache.default_primary.primary_access_key}@${azurerm_redis_cache.default_primary.hostname}:${azurerm_redis_cache.default_primary.ssl_port}"
}
    
