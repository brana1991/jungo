<?php

$location = get_sub_field('custom_google_map');
// var_dump($location);die();
?>
<div class="map">
	<div class="map__wrapper">
		<div class="acf-map">
			<div class="marker" data-lat="<?php echo $location['lat']; ?>" data-lng="<?php echo $location['lng']; ?>"></div>
		</div>
		<div class="map__contact">
			<div class="map__info map-i">
				<div class="map-i__wrapper">

					<div class="map-i__adress">
						<p class="map-i__title">Contact Info</p>
						<p>ADDRESS</p>
						<p>Vlajkoviceva 6 </p>
						<p>Belgrade 11000  </p>
						<p>Serbia </p>
					</div>
					<div class="map-i__email">
						<p>EMAIL</p>
						<p>info@jungodigital.com</p>
					</div>
					<div class="map-i__phone">
						<p>PHONE</p>
						<p>+381-(0)11-xx-xx-xx </p>
					</div>
					<div class="map-i__connect">
						<div class="map-i__connect__wrapper">
						 <p>CONNECT</p>
						 <a href="https://www.instagram.com/jungo_digital_solutions">
						 	<img src="<?php echo get_template_directory_uri(); ?>/assets/img/social-facebook.svg" alt="facebook logo" />
						 </a>
						 <a href="https://www.facebook.com/jungodigital">
							 <img src="<?php echo get_template_directory_uri(); ?>/assets/img/social-instagram.svg" alt="instagram logo" />
						 </a>
						 <a href="https://www.linkedin.com/company/jungo-digital-solution/">
						 	 <img src="<?php echo get_template_directory_uri(); ?>/assets/img/social-linkedin.svg" alt="linkedin logo" />
					 	 </a>
				 		</div>
					</div>
				 </div>
			</div>
			<div class="map__c-form">
				<?php the_sub_field('contact_form') ?>
			</div>
		</div>
	</div>
</div>

<!--
<div id="map">
	<div class="marker" data-lat="<?php echo $location['lat']; ?>" data-lng="<?php echo $location['lng']; ?>"></div>
</div> -->
