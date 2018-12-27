<section class="team">
  <div class="team__wrapper">
    <div class="team__title">
      <h2 class="section-title"><?php the_sub_field('our_team_title'); ?> </h2>
    </div>
    <?php if (have_rows('our_team_people')): ?>
    <div class="team__our-team">
      <?php while ( have_rows('our_team_people') ) : the_row(); ?>
      <div class="team__person">
        <div class="team__person-img" style="background-image: url('<?php the_sub_field('people_img'); ?>')"></div>
        <h4><?php the_sub_field('people_name'); ?></h4>
        <h4><?php the_sub_field('people_position'); ?></h4>
      </div>
    <?php endwhile; ?>
    </div>
  <?php endif; ?>
  </div>
</section>
