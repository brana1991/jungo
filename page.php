<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Jungo
 */

get_header();
?>
<div id="primary" class="content-area">
  <main id="main" class="site-main">
<?php
if( have_rows('content_component') ):
     // loop through the rows of data
    while ( have_rows('content_component') ) : the_row();
    ?>
    <!-- Info with client section -->
    <?php  if( get_row_layout() == 'clients_section' ): ?>
      <div class="clients-section">
        <?php include get_template_directory() . '/template-parts/clients-component.php'; ?>
      </div>
    <?php endif; ?>
			<!-- General hero section -->
		<?php  if( get_row_layout() == 'general_hero' ): ?>
			<div class="hero">
			  <?php include get_template_directory() . '/template-parts/general-hero.php'; ?>
			</div>
	  <?php endif; ?>

		<!-- Info with image section -->
		<?php  if( get_row_layout() == 'info_with_image' ): ?>
			<div class="info-image">
			  <?php include get_template_directory() . '/template-parts/info-image-section.php'; ?>
			</div>
		<?php endif; ?>

		<!-- Info with image section -->
		<?php  if( get_row_layout() == 'our_team' ): ?>
			<div class="our-team">
			  <?php include get_template_directory() . '/template-parts/our-team.php'; ?>
			</div>
		<?php endif; ?>
    <!-- Service section -->
    <?php  if( get_row_layout() == 'service' ): ?>
      <div class="service-section">
        <?php include get_template_directory() . '/template-parts/service-section.php'; ?>
      </div>
    <?php endif; ?>
    <?php  if( get_row_layout() == 'portfolio' ): ?>
      <div class="portfolio-section">
        <?php include get_template_directory() . '/template-parts/portfolio.php'; ?>
      </div>
    <?php endif; ?>



    <?php
    endwhile;
    endif;
    ?>
</main><!-- #main -->
</div><!-- #primary -->

<?php
get_sidebar();
get_footer();
