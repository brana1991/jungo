<section class="service">

  <?php if (have_rows('service_repeater')): ?>
  <div class="service__wrapper">
    <?php
     while ( have_rows('service_repeater') ) : the_row(); ?>
     <div class="service__single-service">

       <div class="service__image-section-wrapper">
         <div class="service__shape-image js-tilt" style="background-image: url('<?php the_sub_field('service_shape_image'); ?>')"></div>
         <div class="service__image js-tilt" style="background-image: url('<?php the_sub_field('service_image'); ?>')"></div>
         <div class="service__left-overlay"></div>
         <div class="service__right-overlay"></div>
       </div>
       <div class="service__info global-wrapp">
        <div class="service__title section-title">
          <?php the_sub_field('service_title'); ?>
        </div>
        <div class="service__text">
          <?php the_sub_field('service_content'); ?>
        </div>
      </div>
    </div>
    <?php endwhile; ?>
  </div>
<?php endif; ?>

</section>
