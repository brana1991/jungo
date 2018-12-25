<?php get_header();

if( have_rows('content_component') ):
     // loop through the rows of data
    while ( have_rows('content_component') ) : the_row();
    ?>

<div class="about-us">
  <?php include get_template_directory() . '/template-parts/general-hero.php'; ?>
</div>
<div class="info-image">
  <?php include get_template_directory() . '/template-parts/info-image-section.php'; ?>

</div>

<?php
endwhile;
endif;
 get_footer(); ?>
