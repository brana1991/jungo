<section class="home g-hero">
  <div class="home__wrapper g-hero__wrapper" style="background-image: url('<?php the_sub_field('homepage_link_background'); ?>')">
    <div class="home__shape-img g-hero__shape" style="background-image: url('<?php the_sub_field('homepage_shape_bg'); ?>')">
      <?php if (have_rows('home_links')): ?>
      <div class="home__links-wrapp">
        <?php while ( have_rows('home_links') ) : the_row(); ?>
        <a href="<?php the_sub_field('link'); ?>" class="home__link">
          <?php the_sub_field('link_title'); ?>
        </a>
      <?php endwhile; ?>

      </div>
    <?php endif; ?>

    </div>
    <div class="home__line home__line--left">
      Jungo
    </div>
    <div class="home__line home__line--right">
      <?php echo date("Y"); ?>

    </div>
  </div>
  <div class="home__footer">
    <div class="home__socials">
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
    <div class="home__rights">
      © 2018 Jungo, all rights reserved.
    </div>
  </div>
  <div class="home__home-side-line">
      Home
  </div>
  <div class="home__home-side-line--year">
    echo date("Y");
  </div>

</section>
