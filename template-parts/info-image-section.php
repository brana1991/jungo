<section class="info-img">
  <div class="info-img__wrapper">
    <?php
    $has_image = get_sub_field('has_image');
     if ($has_image): ?>
    <div class="info-img__image" style="background-image: url('<?php the_sub_field('info_background_image'); ?>')">
    <?php endif; ?>
    </div>
    <div class="info-img__info global-wrapp">
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
