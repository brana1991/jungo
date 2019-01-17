<?php if (have_rows('our_client_repeater')): ?>
<section class="clients">
    <div class="clients__row">
    <?php while ( have_rows('our_client_repeater') ) : the_row(); ?>
      <div class="clients__wrap">
        <a href="<?php the_sub_field('our_client_url'); ?>">
          <div class="clients__single-partner" style="background-image: url('<?php the_sub_field('our_client_image'); ?>')"></div>
        </a>
      </div>
    <?php endwhile; ?>
  </div>
</section>
<?php endif; ?>
