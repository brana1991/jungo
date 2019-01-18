<?php if (have_rows('our_client_repeater')): ?>
<section class="clients">
      <ul class="clients__wrap">
    <?php while ( have_rows('our_client_repeater') ) : the_row(); ?>
        <li>
          <a href="<?php the_sub_field('our_client_url'); ?>">
            <div class="clients__single-partner" style="background-image: url('<?php the_sub_field('our_client_image'); ?>')"></div>
          </a>
      </li>
    <?php endwhile; ?>
      </ul>
</section>
<?php endif; ?>
