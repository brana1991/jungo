<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Jungo
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<div class="site-overlay js-overlay"></div>
	<!-- <a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'jungo' ); ?></a> -->

	<header id="masthead" class="site-header">
		<div class="site-header__logo">
			<?php
			the_custom_logo();
				?>
		</div>
		<div class="site-header__hamburger-wrapper">
			<p>MENU</p>
			<div class="site-header__hamburger-btn js-open-nav"></div>
		</div>

	</header><!-- #masthead -->
	<nav id="site-navigation" class="main-navigation">
		<div class="main-navigation__wrapper">

			<div class="main-navigation__hamburger-wrapper">
				<p>MENU</p>
				<div class="main-navigation__hamburger-btn js-close-nav"></div>
			</div>
			<?php
			wp_nav_menu( array(
				'theme_location' => 'menu-1',
				'menu_id'        => 'primary-menu',
			) );
			?>
			<div class="main-navigation__bottom-part">
				<div class="main-navigation__social-icons">
					<a target="_blank" href="https://www.facebook.com/">
						<img src="<?php echo get_template_directory_uri(); ?>/assets/img/social-facebook.svg" alt="facebook logo" />
					</a>
					<a target="_blank" href="https://www.instagram.com/">
						<img src="<?php echo get_template_directory_uri(); ?>/assets/img/social-instagram.svg" alt="instagram logo" />
					</a>
					<a target="_blank" href="https://twitter.com/">
						<img src="<?php echo get_template_directory_uri(); ?>/assets/img/social-twitter.svg" alt="twitter logo" />
					</a>
				</div>
				<div class="main-navigation__rights">
					<p>© 2018 Jungo, all rights reserved.</p>

				</div>
			</div>

		</div>

	</nav><!-- #site-navigation -->

	<div id="content" class="site-content">
