<section class="portfolio">
  <?php if (have_rows('portfolio_repeater')): ?>

  <div class="portfolio__wrapper multiple-items">
    <?php while ( have_rows('portfolio_repeater') ) : the_row(); ?>

    <a class="portfolio__single" href="<?php the_sub_field('portfolio_url'); ?>"  style="background-image: url('<?php the_sub_field('portfolio_image'); ?>')">
      <div class="portfolio__single-overlay">

      </div>
      <div class="portfolio__title">
        <?php the_sub_field('portfolio_title'); ?>
      </div>
    </a>
  <?php endwhile; ?>

  </div>
<?php endif; ?>

</section>
