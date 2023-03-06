variable "app_gateway_frontend_ip_name" {
  type = string
}

variable "core_resource_group" {
  type = string
}

variable "dns_a_record_name" {
  type = string
}

variable "dns_a_record_ttl" {
  type    = number
  default = 300
}

variable "dns_zone" {
  type = string
}

variable "dns_zone_rg" {
  type = string
}

variable "minimum_tls_version" {
  type    = string
  default = "1.2"
}

variable "redis_capacity" {
  type    = string
  default = "1"
}

variable "redis_family" {
  type    = string
  default = "C"
}

variable "redis_name" {
  type = string
}

variable "redis_resource_group_name" {
  type = string
}


variable "redis_resource_group_location" {
  type = string
}

variable "redis_sku_name" {
  type    = string
  default = "Standard"
}
