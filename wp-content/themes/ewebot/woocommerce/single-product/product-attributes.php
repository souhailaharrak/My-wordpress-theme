<?php
/**
 * Product attributes
 *
 * Used by list_attributes() in the products class.
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/product-attributes.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.6.0
 */

defined( 'ABSPATH' ) || exit;

if ( ! $product_attributes ) {
	return;
}
?>
<?php if (gt3_option('modern_shop') == '1' || true === gt3_option('modern_shop')) {	?>
	<div class="gt3_modern-product-attributes">
		<?php foreach ( $product_attributes as $product_attribute_key => $product_attribute ) : ?>
		<h6 class="woocommerce-product-attributes-item woocommerce-product-attributes-item--<?php echo esc_attr( $product_attribute_key ); ?>"><?php echo wp_kses_post( $product_attribute['label'] ); ?></h6><p><?php echo wp_kses_post( $product_attribute['value'] ); ?></p>
		<?php endforeach; ?>
	</div>
<?php } else { ?>
<table class="woocommerce-product-attributes shop_attributes">
	<?php foreach ( $product_attributes as $product_attribute_key => $product_attribute ) : ?>
		<tr class="woocommerce-product-attributes-item woocommerce-product-attributes-item--<?php echo esc_attr( $product_attribute_key ); ?>">
			<th class="woocommerce-product-attributes-item__label"><?php echo wp_kses_post( $product_attribute['label'] ); ?></th>
			<td class="woocommerce-product-attributes-item__value"><?php echo wp_kses_post( $product_attribute['value'] ); ?></td>
		</tr>
	<?php endforeach; ?>
</table>
<?php }

