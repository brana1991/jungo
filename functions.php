<?php
/**
 * Jungo functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Jungo
 */

if ( ! function_exists( 'jungo_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function jungo_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Jungo, use a find and replace
		 * to change 'jungo' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'jungo', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'menu-1' => esc_html__( 'Primary', 'jungo' ),
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'jungo_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );
	}
endif;
add_action( 'after_setup_theme', 'jungo_setup' );


/**
 * Alow SVG
 *
 */
function cc_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');
/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function jungo_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'jungo_content_width', 640 );
}
add_action( 'after_setup_theme', 'jungo_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function jungo_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'jungo' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'jungo' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'jungo_widgets_init' );

/**
* Register custom post types for Jungo theme
*
* @since 1.0.0
* @access public
*/
function register_projects_custom_post_types() {

### Projects Custom Post Type ###

  $labels = array(
    'name'               => 'Projects',
    'singular_name'      => 'Project',
    'menu_name'          => 'Projects',
    'name_admin_bar'     => 'Project',
    'add_new'            => 'Add New',
    'add_new_item'       => 'Add New Project',
    'new_item'           => 'New Project',
    'edit_item'          => 'Edit Project',
    'view_item'          => 'View Project',
    'all_items'          => 'All Projects',
    'search_items'       => 'Search Projects',
    'parent_item_colon'  => 'Parent Projects:',
    'not_found'          => 'No Projects found.',
    'not_found_in_trash' => 'No Projects found in Trash.',
  );

  $args = array(
    'labels'             => $labels,
    'public'             => true,
		'show_in_rest'			 => true,
    'capability_type'    => 'post',
    'has_archive'        => true,
    // 'hierarchical'       => false,
    'menu_icon'          => 'dashicons-format-video',
    'supports'           => array( 'title','comments' ),
    'taxonomies'         => array( 'category', 'post_tag' )
  );

  register_post_type( 'Projects', $args );
}
add_action( 'init', 'register_projects_custom_post_types' );
/**
 * Enqueue scripts and styles.
 */
function jungo_scripts() {
	wp_enqueue_style( 'jungo-style', get_stylesheet_uri() );
	wp_enqueue_style( 'google_web_fonts', 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700' );
	wp_enqueue_style( 'google_mono_font', 'https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,700' );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'jungo_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}
