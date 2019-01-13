<section class="team global-wrapp">
  <div class="line-div">
    <div class="line-div__line"></div>
  </div>
  <div class="team__wrapper">
    <div class="team__title">
      <h2 class="section-title"><?php the_sub_field('our_team_title'); ?> </h2>
    </div>
    <?php if (have_rows('our_team_people')): ?>
    <div class="team__our-team">
      <?php while ( have_rows('our_team_people') ) : the_row(); ?>
      <div class="team__person js-person">
        <div class="team__person-img-wrapper">
          <div class="team__person-square"></div>
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <div class="team__person-back-img bg-img" style="background-image: url('<?php the_sub_field('people_second_image'); ?>')"></div>
              </div>
              <div class="flip-box-back">
                <div class="team__person-front-img bg-img" style="background-image: url('<?php the_sub_field('people_img'); ?>')"></div>

              </div>
            </div>
          </div>
        </div>

        <h4><?php the_sub_field('people_name'); ?></h4>
        <h6><?php the_sub_field('people_position'); ?></h6>
      </div>
    <?php endwhile; ?>
    </div>
  <?php endif; ?>
  </div>
</section>
