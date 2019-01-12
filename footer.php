<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all conten
 *
 * @package Jungo
 */

?>

<section  class="footer">
<div class="footer__wrapper">
	<div class="footer__adress">
		<p>ADDRESS</p>
		<p>Vlajkoviceva 6 </p>
		<p>Belgrade 11000  </p>
		<p>Serbia </p>
	</div>
	<div class="footer__email">
		<p>EMAIL</p>
		<p>info@jungodigital.com</p>
	</div>
	<div class="footer__phone">
		<p>PHONE</p>
		<p>+381-(0)11-xx-xx-xx </p>
	</div>
	<div class="footer__connect">
		<div class="footer__connect__wrapper">
		 <p>CONNECT</p>
		 <img src="<?php echo get_template_directory_uri(); ?>/assets/img/social-facebook.svg" alt="facebook logo" />
		 <img src="<?php echo get_template_directory_uri(); ?>/assets/img/social-instagram.svg" alt="instagram logo" />
		 <img src="<?php echo get_template_directory_uri(); ?>/assets/img/social-twitter.svg" alt="twitter logo" />
 		</div>
	</div>
	 <div class="footer__copyrights">
		 <div class="footer__copyrights__wrapper">
				 <p>Cookie Policy</p>
				 <p>© 2018 Jungo, all rights reserved.</p>
			</div>
	 </div>
 </div>
</section>

<?php wp_footer(); ?>

</body>
</html>
