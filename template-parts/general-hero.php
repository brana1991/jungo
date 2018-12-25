<?php if( get_row_layout() == 'general_hero' ): ?>
<section class="g-hero">
<?php //if( _sub_field('background_image') ): ?>
  <div class="g-hero__wrapper g-hero__background" style="background-image: url('<?php the_sub_field('background_image'); ?>')">
<?php //endif; ?>
    <div class="g-hero__shape">
      <h1 class"g-hero__title"><?php the_title(); ?></h1>
    </div>
  </div>
  <div class="g-hero__side-scroll">
    <span>SCROLL</span>
  </div>
  <div class="g-hero__side-scroll-text">
    <?php the_sub_field('side_description') ?>
  </div>

</section>
<?php endif; ?>
