<section class="g-hero">
<?php if( get_field('background_image') ): ?>
  <div class="g-hero__wrapper g-hero__background" style="background-image: url('<?php the_field('background_image'); ?>')">
<?php endif; ?>
    <div class="g-hero__shape">
      <h1 class"g-hero__title"><?php the_title(); ?></h1>
    </div>
  </div>
  <div class="g-hero__side-scroll">
    <span>SCROLL</span>
  </div>
  <div class="g-hero__side-scroll-text">
    <?php the_field('side_description') ?>
  </div>

</section>
