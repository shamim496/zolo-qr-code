<?php

/**
 * Plugin Name:       Zolo QR Code
 * Description:       A collection of responsive blocks for the WordPress block editor.
 * Requires at least: 6.0
 * Requires PHP:      7.4
 * Version:           1.0.0
 * Author:            BdThemes
 * Author URI:        https://bdthemes.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       zolo-qr-code
 */

if (!defined('ABSPATH')) exit; // Exit if accessed directly
// Check if ZoloBlocks is active, deactivate this plugin if true
if (in_array('zoloblocks/zoloblocks.php', apply_filters('active_plugins', get_option('active_plugins'))) || (is_multisite() && array_key_exists('zoloblocks/zoloblocks.php', get_site_option('active_sitewide_plugins', array())))) {
    return; // Exit the plugin if ZoloBlocks is active
}

class ZoloQrCode {
    private static $instance = null;
    public $plugin_path;
    public $plugin_url;

    private function __construct() {
        $this->define_constants();
        $this->include_files();
        $this->init_hooks();
    }

    public static function instance() {
        if (is_null(self::$instance)) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    private function define_constants() {
        define('ZOLO_QR_CODE_FILE', __FILE__);
        define('ZOLO_QR_CODE_VERSION', '1.0.0');
        define('ZOLO_QR_CODE_DIR_PATH', plugin_dir_path(__FILE__));
        define('ZOLO_QR_CODE_URL', plugin_dir_url(__FILE__));
    }

    private function init_hooks() {
        add_action('enqueue_block_assets', [$this, 'enqueue_editor_assets']);
        add_filter('block_categories_all', [$this, 'add_custom_block_category']);
        add_action('init', [$this, 'register_blocks']);
    }
    
    private function include_files() {
        $includes_dir = ZOLO_QR_CODE_DIR_PATH . 'includes/';
        $files = ['SingletonTrait.php', 'StyleGenerator.php'];

        foreach ($files as $file) {
            $path = $includes_dir . $file;
            if (file_exists($path)) {
                require_once $path;
            }
        }
    }

    public function enqueue_editor_assets() {
        if (is_admin()) {
            $asset_path = __DIR__ . '/dist/zoloLibrary.asset.php';
            $args = file_exists($asset_path) ? require $asset_path : ['dependencies' => [], 'version' => ZOLO_QR_CODE_VERSION];
            wp_enqueue_style('zolo-library-style', plugins_url('dist/zoloLibrary.css', __FILE__), [], $args['version']);
            wp_enqueue_script('zolo-library-script', plugins_url('dist/zoloLibrary.js', __FILE__), $args['dependencies'], $args['version'], true);

            wp_localize_script( 'zolo-library-script', 'zoloPlaceholder', [
                'extraImage' => trailingslashit(ZOLO_QR_CODE_URL) . './packages/library/src/images/singleblocks.png',
            ]);
        }
    }

    public function add_custom_block_category($categories) {
        return array_merge(
            [['slug' => 'zoloblocks', 'title' => 'ZoloBlocks']],
            $categories
        );
    }

    public function register_blocks() {
        $dist_dir = ZOLO_QR_CODE_DIR_PATH . 'dist/';
        foreach (scandir($dist_dir) as $name) {
            if (!str_contains($name, '.')) {
                register_block_type($dist_dir . $name);
            }
        }
    }
}

function zolo_qr_code() {
    return ZoloQrCode::instance();
}

add_action('plugins_loaded', 'zolo_qr_code');
