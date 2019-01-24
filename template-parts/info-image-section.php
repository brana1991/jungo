<section class="info-img">
  <div class="info-img__wrapper">
    <?php
    $has_image = get_sub_field('has_image');
     if ($has_image): ?>
      <div class="info-img__image js-tilt-image"  style="background-image: url('<?php the_sub_field('info_background_image'); ?>')">
          <div class="info-img__overlap" style="background-image: url('<?php the_sub_field('overlap_info_image'); ?>')">
          </div>
      </div>
  <?php endif; ?>
    <?php if ($has_image): ?>
    <div class="info-img__info global-wrapp">
    <?php else : ?>
      <div class="info-img__info info-img__info--no-img global-wrapp">

    <?php endif; ?>
      <div class="info-img__title section-title">
        <?php the_sub_field('info_title'); ?>
      </div>
      <div class="info-img__text">
        <?php the_sub_field('info_description'); ?>
          <a class="info-img__cta" href="<?php the_sub_field('cta_info_button') ?>"><?php the_sub_field('cta_info_button_text'); ?></a>
      </div>
    </div>
  </div>
</section>
