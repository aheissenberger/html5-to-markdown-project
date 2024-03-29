import { html2markdown } from '../../src'

xdescribe('fullpage', () => {
    it('error01', () => {
        const html = `<!doctype html>
        <html lang="en" id="top-of-site" class="js">
        
        <head>
        
          <meta charset="utf-8">
        
          <meta name="viewport" content="width=device-width">
        
          
          <title>How to Create Block Theme Patterns in WordPress 6.0 | CSS-Tricks - CSS-Tricks</title>
        
        
          <link rel="icon" href="/favicon.ico" sizes="any">
          <link rel="icon" href="/favicon.svg" type="image/svg+xml">
          <link rel="apple-touch-icon" href="/apple-touch-icon.png">
          <link rel="manifest" href="/manifest.webmanifest">
          <meta name="theme-color" content="#ff7a18">
        
          <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="CSS-Tricks Search">
        
          <link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="https://css-tricks.com/feed/">
        
          <link rel="preconnect" href="https://s3.buysellads.com">
          <link rel="dns-prefetch" href="https://s3.buysellads.com">
          <link rel="preconnect" href="https://srv.buysellads.com">
          <link rel="dns-prefetch" href="https://srv.buysellads.com">
          <link rel="preconnect" href="https://res.cloudinary.com">
          <link rel="dns-prefetch" href="https://res.cloudinary.com">
          <link rel="preconnect" href="https://static.codepen.io">
          <link rel="dns-prefetch" href="https://static.codepen.io">
        
          
          
        <!-- Search Engine Optimization by Rank Math PRO - https://s.rankmath.com/home -->
        <meta name="description" content="Block patterns, also frequently referred to as sections, were introduced in WordPress 5.5 to allow users to build and share predefined block layouts in the"/>
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
        <link rel="canonical" href="https://css-tricks.com/how-to-create-block-theme-patterns-in-wordpress-6-0/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="How to Create Block Theme Patterns in WordPress 6.0 | CSS-Tricks" />
        <meta property="og:description" content="Block patterns, also frequently referred to as sections, were introduced in WordPress 5.5 to allow users to build and share predefined block layouts in the" />
        <meta property="og:url" content="https://css-tricks.com/how-to-create-block-theme-patterns-in-wordpress-6-0/" />
        <meta property="og:site_name" content="CSS-Tricks" />
        <meta property="article:publisher" content="https://www.facebook.com/CSSTricks" />
        <meta property="article:tag" content="WordPress" />
        <meta property="article:section" content="Article" />
        <meta property="og:updated_time" content="2022-06-01T08:30:17-07:00" />
        <meta property="og:image" content="https://css-tricks.com/wp-json/social-image-generator/v1/image/365841" />
        <meta property="og:image:secure_url" content="https://css-tricks.com/wp-json/social-image-generator/v1/image/365841" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Patterns in WordPress" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="article:published_time" content="2022-06-01T08:30:15-07:00" />
        <meta property="article:modified_time" content="2022-06-01T08:30:17-07:00" />
        <meta property="og:video" content="https://www.youtube.com/embed/abaaVKl-beM" />
        <meta property="video:duration" content="1344" />
        <meta property="ya:ovs:upload_date" content="2022-04-26" />
        <meta property="ya:ovs:allow_embed" content="true" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Create Block Theme Patterns in WordPress 6.0 | CSS-Tricks" />
        <meta name="twitter:description" content="Block patterns, also frequently referred to as sections, were introduced in WordPress 5.5 to allow users to build and share predefined block layouts in the" />
        <meta name="twitter:site" content="@CSS" />
        <meta name="twitter:creator" content="@CSS" />
        <meta name="twitter:image" content="https://css-tricks.com/wp-json/social-image-generator/v1/image/365841" />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="Ganesh Dahal" />
        <meta name="twitter:label2" content="Time to read" />
        <meta name="twitter:data2" content="20 minutes" />
        <script type="application/ld+json" class="rank-math-schema-pro">{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://css-tricks.com/#organization","name":"CSS-Tricks","logo":{"@type":"ImageObject","@id":"https://css-tricks.com/#logo","url":"https://css-tricks.com/wp-content/uploads/2019/06/akqRGyta_400x400.jpg","caption":"CSS-Tricks","inLanguage":"en-US"}},{"@type":"WebSite","@id":"https://css-tricks.com/#website","url":"https://css-tricks.com","name":"CSS-Tricks","publisher":{"@id":"https://css-tricks.com/#organization"},"inLanguage":"en-US"},{"@type":"ImageObject","@id":"https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-patterns-featured-image.jpg?fit=1200%2C600&amp;ssl=1","url":"https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-patterns-featured-image.jpg?fit=1200%2C600&amp;ssl=1","width":"1200","height":"600","inLanguage":"en-US"},{"@type":"Person","@id":"https://css-tricks.com/author/ganeshdahal/","name":"Ganesh Dahal","url":"https://css-tricks.com/author/ganeshdahal/","image":{"@type":"ImageObject","@id":"https://secure.gravatar.com/avatar/472b7eac08807818dc549715adcbbdd2?s=96&amp;d=retro&amp;r=pg","url":"https://secure.gravatar.com/avatar/472b7eac08807818dc549715adcbbdd2?s=96&amp;d=retro&amp;r=pg","caption":"Ganesh Dahal","inLanguage":"en-US"},"sameAs":["https://tinjurewp.com/"],"worksFor":{"@id":"https://css-tricks.com/#organization"}},{"@type":"WebPage","@id":"https://css-tricks.com/how-to-create-block-theme-patterns-in-wordpress-6-0/#webpage","url":"https://css-tricks.com/how-to-create-block-theme-patterns-in-wordpress-6-0/","name":"How to Create Block Theme Patterns in WordPress 6.0 | CSS-Tricks","datePublished":"2022-06-01T08:30:15-07:00","dateModified":"2022-06-01T08:30:17-07:00","author":{"@id":"https://css-tricks.com/author/ganeshdahal/"},"isPartOf":{"@id":"https://css-tricks.com/#website"},"primaryImageOfPage":{"@id":"https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-patterns-featured-image.jpg?fit=1200%2C600&amp;ssl=1"},"inLanguage":"en-US"},{"headline":"How to Create Block Theme Patterns in WordPress 6.0 | CSS-Tricks","description":"Block patterns, also frequently referred to as sections, were introduced in WordPress 5.5 to allow users to build and share predefined block layouts in the","datePublished":"2022-06-01T08:30:15-07:00","dateModified":"2022-06-01T08:30:17-07:00","image":{"@id":"https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-patterns-featured-image.jpg?fit=1200%2C600&amp;ssl=1"},"author":{"@id":"https://css-tricks.com/author/ganeshdahal/"},"@type":"BlogPosting","name":"How to Create Block Theme Patterns in WordPress 6.0 | CSS-Tricks","@id":"https://css-tricks.com/how-to-create-block-theme-patterns-in-wordpress-6-0/#schema-8212892","isPartOf":{"@id":"https://css-tricks.com/how-to-create-block-theme-patterns-in-wordpress-6-0/#webpage"},"publisher":{"@id":"https://css-tricks.com/#organization"},"inLanguage":"en-US","mainEntityOfPage":{"@id":"https://css-tricks.com/how-to-create-block-theme-patterns-in-wordpress-6-0/#webpage"}},{"@type":"VideoObject","name":"Exploring WordPress 6.0: Style Variations, Block Locking UI, Writing Improvements, &amp; more","description":"This video seeks to give an early look at WordPress 6.0 and what folks have to look forward to. It starts with a high level overview before going into sectio...","uploadDate":"2022-04-26","thumbnailUrl":"https://css-tricks.com/wp-content/uploads/2022/05/maxresdefault-1.jpg","embedUrl":"https://www.youtube.com/embed/abaaVKl-beM","duration":"PT22M24S","width":"1280","height":"720","isFamilyFriendly":"True","@id":"https://css-tricks.com/how-to-create-block-theme-patterns-in-wordpress-6-0/#schema-8212893","isPartOf":{"@id":"https://css-tricks.com/how-to-create-block-theme-patterns-in-wordpress-6-0/#webpage"},"publisher":{"@id":"https://css-tricks.com/#organization"},"inLanguage":"en-US"}]}</script>
        <!-- /Rank Math WordPress SEO plugin -->
        
        <link rel='dns-prefetch' href='//stats.wp.com' />
        <link rel='dns-prefetch' href='//i0.wp.com' />
        <link rel='dns-prefetch' href='//c0.wp.com' />
        <link rel="alternate" type="application/rss+xml" title="CSS-Tricks &raquo; How to Create Block Theme Patterns in WordPress 6.0 Comments Feed" href="https://css-tricks.com/how-to-create-block-theme-patterns-in-wordpress-6-0/feed/" />
        <link rel='stylesheet' id='css-tricks-style-css'  href='https://css-tricks.com/wp-content/themes/CSS-Tricks-19/style.css?ver=cache_bust=1647355512817' type='text/css' media='all' />
        <link rel='stylesheet' id='mediaelement-css'  href='https://c0.wp.com/c/5.9.3/wp-includes/js/mediaelement/mediaelementplayer-legacy.min.css' type='text/css' media='all' />
        <link rel='stylesheet' id='wp-mediaelement-css'  href='https://c0.wp.com/c/5.9.3/wp-includes/js/mediaelement/wp-mediaelement.min.css' type='text/css' media='all' />
        <style id='global-styles-inline-css' type='text/css'>
        body{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--duotone--dark-grayscale: url('#wp-duotone-dark-grayscale');--wp--preset--duotone--grayscale: url('#wp-duotone-grayscale');--wp--preset--duotone--purple-yellow: url('#wp-duotone-purple-yellow');--wp--preset--duotone--blue-red: url('#wp-duotone-blue-red');--wp--preset--duotone--midnight: url('#wp-duotone-midnight');--wp--preset--duotone--magenta-yellow: url('#wp-duotone-magenta-yellow');--wp--preset--duotone--purple-green: url('#wp-duotone-purple-green');--wp--preset--duotone--blue-orange: url('#wp-duotone-blue-orange');--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
        </style>
        <script type='text/javascript' id='media-video-jwt-bridge-js-extra'>
        /* <![CDATA[ */
        var videopressAjax = {"ajaxUrl":"https:\/\/css-tricks.com\/wp-admin\/admin-ajax.php","bridgeUrl":"https:\/\/css-tricks.com\/wp-content\/plugins\/jetpack\/modules\/videopress\/js\/videopress-token-bridge.js"};
        /* ]]> */
        </script>
        <script  src='https://c0.wp.com/p/jetpack/10.9/modules/videopress/js/videopress-token-bridge.js' id='media-video-jwt-bridge-js'></script>
        <script type='text/javascript' id='jetpack_related-posts-js-extra'>
        /* <![CDATA[ */
        var related_posts_js_options = {"post_heading":"h4"};
        /* ]]> */
        </script>
        <script  src='https://c0.wp.com/p/jetpack/10.9/_inc/build/related-posts/related-posts.min.js' id='jetpack_related-posts-js'></script>
        <script  src='https://c0.wp.com/c/5.9.3/wp-includes/js/dist/vendor/regenerator-runtime.min.js' id='regenerator-runtime-js'></script>
        <script  src='https://c0.wp.com/c/5.9.3/wp-includes/js/dist/vendor/wp-polyfill.min.js' id='wp-polyfill-js'></script>
        <script  src='https://c0.wp.com/c/5.9.3/wp-includes/js/dist/hooks.min.js' id='wp-hooks-js'></script>
        <script  src='https://c0.wp.com/c/5.9.3/wp-includes/js/dist/i18n.min.js' id='wp-i18n-js'></script>
        <script  id='wp-i18n-js-after'>
        wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
        </script>
        <script  src='https://css-tricks.com/wp-content/plugins/jetpack/jetpack_vendor/automattic/jetpack-assets/build/i18n-loader.js?minify=true&#038;ver=800809b63585867d3da6f4aea1981a5c' id='wp-jp-i18n-loader-js'></script>
        <script  id='wp-jp-i18n-loader-js-after'>
        wp.jpI18nLoader.state = {"baseUrl":"https://css-tricks.com/wp-content/languages/","locale":"en_US","domainMap":{"jetpack-config":"plugins/jetpack","jetpack-heartbeat":"plugins/jetpack-boost","jetpack-assets":"plugins/jetpack","jetpack-lazy-images":"plugins/jetpack","jetpack-tracking":"plugins/jetpack","jetpack-plugins-installer":"plugins/jetpack","jetpack-admin-ui":"plugins/jetpack","jetpack-connection":"plugins/jetpack","jetpack-my-jetpack":"plugins/jetpack","jetpack-password-checker":"plugins/jetpack","jetpack-idc":"plugins/jetpack","jetpack-sync":"plugins/jetpack","jetpack-licensing":"plugins/jetpack","jetpack-connection-ui":"plugins/jetpack","jetpack-backup-pkg":"plugins/jetpack","jetpack-compat":"plugins/jetpack","jetpack-google-fonts-provider":"plugins/jetpack","jetpack-jitm":"plugins/jetpack","jetpack-publicize-pkg":"plugins/jetpack","jetpack-waf":"plugins/jetpack","jetpack-search-pkg":"plugins/jetpack","jetpack-wordads":"plugins/jetpack"},"domainPaths":{"jetpack-config":"jetpack_vendor/automattic/jetpack-config/","jetpack-heartbeat":"jetpack_vendor/automattic/jetpack-heartbeat/","jetpack-assets":"jetpack_vendor/automattic/jetpack-assets/","jetpack-lazy-images":"jetpack_vendor/automattic/jetpack-lazy-images/","jetpack-tracking":"jetpack_vendor/automattic/jetpack-tracking/","jetpack-plugins-installer":"jetpack_vendor/automattic/jetpack-plugins-installer/","jetpack-admin-ui":"jetpack_vendor/automattic/jetpack-admin-ui/","jetpack-connection":"jetpack_vendor/automattic/jetpack-connection/","jetpack-my-jetpack":"jetpack_vendor/automattic/jetpack-my-jetpack/","jetpack-password-checker":"jetpack_vendor/automattic/jetpack-password-checker/","jetpack-idc":"jetpack_vendor/automattic/jetpack-identity-crisis/","jetpack-sync":"jetpack_vendor/automattic/jetpack-sync/","jetpack-licensing":"jetpack_vendor/automattic/jetpack-licensing/","jetpack-connection-ui":"jetpack_vendor/automattic/jetpack-connection-ui/","jetpack-backup-pkg":"jetpack_vendor/automattic/jetpack-backup/","jetpack-compat":"jetpack_vendor/automattic/jetpack-compat/","jetpack-google-fonts-provider":"jetpack_vendor/automattic/jetpack-google-fonts-provider/","jetpack-jitm":"jetpack_vendor/automattic/jetpack-jitm/","jetpack-publicize-pkg":"jetpack_vendor/automattic/jetpack-publicize/","jetpack-waf":"jetpack_vendor/automattic/jetpack-waf/","jetpack-search-pkg":"jetpack_vendor/automattic/jetpack-search/","jetpack-wordads":"jetpack_vendor/automattic/jetpack-wordads/"}};
        </script>
        <link rel="https://api.w.org/" href="https://css-tricks.com/wp-json/" /><link rel="alternate" type="application/json" href="https://css-tricks.com/wp-json/wp/v2/posts/365841" /><link rel='shortlink' href='https://css-tricks.com/?p=365841' />
        <link rel="alternate" type="application/json+oembed" href="https://css-tricks.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fcss-tricks.com%2Fhow-to-create-block-theme-patterns-in-wordpress-6-0%2F" />
        <link rel="alternate" type="text/xml+oembed" href="https://css-tricks.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fcss-tricks.com%2Fhow-to-create-block-theme-patterns-in-wordpress-6-0%2F&#038;format=xml" />
        <!-- Better Art Direction Styles -->
        
        
        <!-- Generated by Social Image Generator - https://socialimagegenerator.com -->
        <meta property="og:image" content="https://css-tricks.com/wp-json/social-image-generator/v1/image/365841">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">
        <meta name="twitter:image" content="https://css-tricks.com/wp-json/social-image-generator/v1/image/365841">
        <meta name="twitter:card" content="summary_large_image">
        <!-- / Social Image Generator -->
        <style type='text/css'>img#wpstats{display:none}</style>
                        <style type="text/css">
                        /* If html does not have either class, do not show lazy loaded images. */
                        html:not( .jetpack-lazy-images-js-enabled ):not( .js ) .jetpack-lazy-image {
                            display: none;
                        }
                    </style>
                    <script>
                        document.documentElement.classList.add(
                            'jetpack-lazy-images-js-enabled'
                        );
                    </script>
                <link rel="icon" href="https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/07/star.png?fit=32%2C32&#038;ssl=1" sizes="32x32" />
        <link rel="icon" href="https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/07/star.png?fit=180%2C180&#038;ssl=1" sizes="192x192" />
        <link rel="apple-touch-icon" href="https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/07/star.png?fit=180%2C180&#038;ssl=1" />
        <meta name="msapplication-TileImage" content="https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/07/star.png?fit=180%2C180&#038;ssl=1" />
        
        </head>
        
        <body class="post-template-default single single-post postid-365841 single-format-standard jps-theme-CSS-Tricks-19 category-article">
        
          <div id="top-of-site-pixel-anchor"></div>
        
          <header class="site-header" id="site-header">
        
          <a id="skip-nav" class="skip-nav screen-reader-text" href="#maincontent">Skip to main content</a> 
        
          <div class="logo">
            <a href="/">
              <div class="screen-reader-text">CSS-Tricks</div>
        
              <svg class="icon-logo-star" width="35px" height="35px" viewBox="0 0 362.62 388.52" data-spin-me="false">
          <path d="M156.58,239l-88.3,64.75c-10.59,7.06-18.84,11.77-29.43,11.77-21.19,0-38.85-18.84-38.85-40C0,257.83,14.13,244.88,27.08,239l103.6-44.74L27.08,148.34C13,142.46,0,129.51,0,111.85,0,90.66,18.84,73,40,73c10.6,0,17.66,3.53,28.25,11.77l88.3,64.75L144.81,44.74C141.28,20,157.76,0,181.31,0s40,18.84,36.5,43.56L206,149.52l88.3-64.75C304.93,76.53,313.17,73,323.77,73a39.2,39.2,0,0,1,38.85,38.85c0,18.84-12.95,30.61-27.08,36.5L231.93,194.26,335.54,239c14.13,5.88,27.08,18.83,27.08,37.67,0,21.19-18.84,38.85-40,38.85-9.42,0-17.66-4.71-28.26-11.77L206,239l11.77,104.78c3.53,24.72-12.95,44.74-36.5,44.74s-40-18.84-36.5-43.56Z" />
        </svg>
                    <svg width="322" height="32" viewBox="0 0 322 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-logo-text">
        <path d="M16.4923 21.5221C16.0962 21.5202 15.7132 21.6668 15.4167 21.9339C13.9468 23.1946 12.5055 23.8978 10.3687 23.8978C6.5073 23.8978 3.70719 20.644 3.70719 16.6104V16.5521C3.70719 12.5441 6.53598 9.31211 10.3687 9.31211C12.142 9.31448 13.8542 9.97091 15.1873 11.1595C15.4503 11.3483 15.7586 11.4616 16.0796 11.4875C16.4007 11.5134 16.7227 11.4509 17.0117 11.3067C17.3008 11.1624 17.5463 10.9416 17.7224 10.6676C17.8985 10.3935 17.9987 10.0764 18.0125 9.74936C18.0137 9.47206 17.952 9.19822 17.8319 8.9492C17.7119 8.70017 17.5369 8.4827 17.3205 8.31374C15.5637 6.93643 13.513 6 10.3973 6C4.30235 6 0 10.7769 0 16.6104V16.6687C0 22.5642 4.38481 27.2354 10.2683 27.2354C13.5273 27.2354 15.6928 26.1824 17.5966 24.4808C17.7764 24.3189 17.9207 24.1204 18.0201 23.8982C18.1196 23.676 18.1719 23.435 18.1738 23.1909C18.1617 22.7453 17.9795 22.3219 17.6656 22.0104C17.3518 21.699 16.931 21.5238 16.4923 21.5221V21.5221ZM29.7041 14.9853C25.8069 14.0453 24.8855 13.342 24.8855 11.7607V11.7024C24.8855 10.3506 26.0973 9.26839 28.1732 9.26839C29.7615 9.26839 31.2601 9.79308 32.8341 10.8206C33.1116 10.996 33.4322 11.0882 33.7591 11.0866C33.977 11.089 34.1933 11.0476 34.3954 10.9647C34.5976 10.8818 34.7816 10.7591 34.9369 10.6037C35.0921 10.4482 35.2156 10.2631 35.3002 10.0589C35.3848 9.85479 35.4289 9.63565 35.4298 9.41414C35.4373 9.12618 35.3692 8.84139 35.2324 8.58907C35.0957 8.33675 34.8953 8.12601 34.6518 7.97852C32.7598 6.69182 30.5246 6.02662 28.2485 6.07287C24.2401 6.07287 21.3576 8.50321 21.3576 12.023V12.0813C21.3576 15.8635 23.7776 17.1533 28.0764 18.21C31.8266 19.0881 32.6333 19.8788 32.6333 21.3472V21.4055C32.6333 22.9286 31.2494 23.9853 29.048 23.9853C26.977 23.9843 24.9735 23.2368 23.394 21.8756C23.1425 21.6924 22.8468 21.5819 22.5385 21.5558C22.2301 21.5296 21.9206 21.5888 21.6426 21.7271C21.3647 21.8653 21.1288 22.0774 20.9599 22.3409C20.7911 22.6044 20.6956 22.9095 20.6835 23.2237C20.6822 23.4928 20.7443 23.7583 20.8647 23.9979C20.9851 24.2375 21.1602 24.4444 21.3755 24.601C23.5587 26.2783 26.2216 27.1842 28.9584 27.1808C33.1998 27.1808 36.172 24.8925 36.172 21.0521V20.9938C36.1827 17.5942 33.9706 16.0384 29.7041 14.9853ZM47.5839 14.9853C43.6903 14.0453 42.7689 13.342 42.7689 11.7607V11.7024C42.7689 10.3506 43.9807 9.26839 46.0566 9.26839C47.6413 9.26839 49.1435 9.79308 50.7175 10.8206C50.995 10.996 51.3157 11.0882 51.6425 11.0866C51.8604 11.089 52.0767 11.0476 52.2788 10.9647C52.481 10.8818 52.665 10.7591 52.8203 10.6037C52.9756 10.4482 53.0991 10.2631 53.1837 10.0589C53.2683 9.85479 53.3123 9.63565 53.3132 9.41414C53.3207 9.12618 53.2526 8.84139 53.1158 8.58907C52.9791 8.33675 52.7787 8.12601 52.5352 7.97852C50.6382 6.68823 48.3962 6.02286 46.114 6.07287C42.1056 6.07287 39.2195 8.50321 39.2195 12.023V12.0813C39.2195 15.8635 41.6431 17.1533 45.9419 18.21C49.6921 19.0881 50.4988 19.8788 50.4988 21.3472V21.4055C50.4988 22.9286 49.1149 23.9853 46.9135 23.9853C44.8438 23.9835 42.8417 23.236 41.2631 21.8756C41.0112 21.6927 40.7154 21.5825 40.4069 21.5565C40.0985 21.5304 39.7888 21.5896 39.5108 21.7277C39.2327 21.8659 38.9965 22.0778 38.8272 22.3412C38.6579 22.6045 38.5618 22.9094 38.549 23.2237C38.5485 23.4926 38.611 23.7578 38.7314 23.9973C38.8517 24.2368 39.0264 24.4437 39.241 24.601C41.4259 26.2776 44.0897 27.1834 46.8274 27.1808C51.0688 27.1808 54.0375 24.8925 54.0375 21.0521V20.9938C54.0446 17.5942 51.854 16.0384 47.5839 14.9853ZM63.94 16.1586H58.5155C58.0741 16.1791 57.6574 16.3718 57.3522 16.6965C57.0469 17.0212 56.8766 17.453 56.8766 17.9021C56.8766 18.3512 57.0469 18.783 57.3522 19.1077C57.6574 19.4325 58.0741 19.6251 58.5155 19.6456H63.94C64.3815 19.6251 64.7981 19.4325 65.1034 19.1077C65.4086 18.783 65.5789 18.3512 65.5789 17.9021C65.5789 17.453 65.4086 17.0212 65.1034 16.6965C64.7981 16.3718 64.3815 16.1791 63.94 16.1586V16.1586ZM80.2818 6.36437H66.88C66.6576 6.35381 66.4355 6.3892 66.227 6.4684C66.0185 6.54759 65.828 6.66895 65.667 6.82512C65.506 6.98129 65.3778 7.16903 65.2902 7.37699C65.2027 7.58495 65.1575 7.8088 65.1575 8.035C65.1575 8.2612 65.2027 8.48505 65.2902 8.69301C65.3778 8.90097 65.506 9.08871 65.667 9.24488C65.828 9.40105 66.0185 9.52241 66.227 9.6016C66.4355 9.6808 66.6576 9.71619 66.88 9.70563H71.7811V25.246C71.7811 25.7292 71.9699 26.1925 72.3061 26.5342C72.6423 26.8759 73.0983 27.0678 73.5737 27.0678C74.0491 27.0678 74.5051 26.8759 74.8413 26.5342C75.1775 26.1925 75.3663 25.7292 75.3663 25.246V9.70563H80.2818C80.7045 9.68556 81.1033 9.50079 81.3955 9.18968C81.6876 8.87858 81.8506 8.46505 81.8506 8.035C81.8506 7.60495 81.6876 7.19142 81.3955 6.88032C81.1033 6.56921 80.7045 6.38444 80.2818 6.36437V6.36437ZM94.2106 6.36437H87.0113C86.7749 6.36043 86.54 6.40486 86.3208 6.49502C86.1015 6.58518 85.9024 6.71923 85.7351 6.8892C85.5679 7.05916 85.436 7.26157 85.3473 7.48439C85.2586 7.70721 85.2148 7.94588 85.2187 8.18621V25.2496C85.2796 25.6839 85.4926 26.0812 85.8186 26.3687C86.1447 26.6562 86.5618 26.8145 86.9934 26.8145C87.4251 26.8145 87.8422 26.6562 88.1682 26.3687C88.4942 26.0812 88.7073 25.6839 88.7681 25.2496V19.7331H93.239L98.1401 26.0949C98.3271 26.3875 98.584 26.6271 98.8869 26.7915C99.1897 26.9559 99.5285 27.0397 99.8718 27.035C100.092 27.0389 100.31 26.9987 100.515 26.9167C100.719 26.8348 100.906 26.7126 101.064 26.5573C101.222 26.402 101.349 26.2166 101.436 26.0116C101.524 25.8066 101.571 25.586 101.575 25.3626C101.555 24.847 101.35 24.3568 100.998 23.9853L97.1326 19.0298C99.8431 18.1809 101.718 16.1878 101.718 12.9011V12.8428C101.739 12.0293 101.602 11.2196 101.314 10.46C101.027 9.70038 100.595 9.00573 100.044 8.41577C98.7496 7.1259 96.7741 6.36437 94.2214 6.36437H94.2106ZM98.115 13.1052C98.115 15.1857 96.5016 16.5339 93.9632 16.5339H88.7717V9.64733H93.9345C96.559 9.64733 98.115 10.8498 98.115 13.0505V13.1052ZM107.777 6.21862C107.543 6.21326 107.31 6.25564 107.093 6.34324C106.875 6.43083 106.677 6.56188 106.509 6.72865C106.342 6.89541 106.21 7.09451 106.12 7.31419C106.03 7.53386 105.984 7.76967 105.985 8.00767V25.246C106.005 25.7098 106.201 26.1478 106.531 26.4686C106.861 26.7895 107.301 26.9685 107.758 26.9685C108.214 26.9685 108.654 26.7895 108.984 26.4686C109.314 26.1478 109.51 25.7098 109.531 25.246V8.00403C109.532 7.76947 109.488 7.53695 109.4 7.31992C109.313 7.10289 109.183 6.90565 109.02 6.73962C108.857 6.57359 108.664 6.44206 108.45 6.35263C108.237 6.2632 108.008 6.21765 107.777 6.21862V6.21862ZM130.246 21.5221C129.85 21.5191 129.467 21.6659 129.171 21.9339C127.697 23.1946 126.256 23.8978 124.123 23.8978C120.258 23.8978 117.458 20.644 117.458 16.6104V16.5521C117.458 12.5441 120.286 9.31211 124.123 9.31211C125.895 9.3147 127.606 9.97116 128.938 11.1595C129.246 11.3991 129.625 11.5274 130.013 11.5238C130.243 11.5287 130.472 11.4867 130.686 11.4004C130.9 11.314 131.094 11.185 131.259 11.021C131.423 10.857 131.553 10.6613 131.641 10.4454C131.73 10.2295 131.775 9.9978 131.774 9.76393C131.773 9.48692 131.711 9.21364 131.591 8.96487C131.471 8.71611 131.297 8.4984 131.082 8.32832C129.321 6.951 127.274 6.01458 124.159 6.01458C118.042 6.01458 113.761 10.7915 113.761 16.625V16.6833C113.761 22.5788 118.142 27.25 124.029 27.25C127.288 27.25 129.45 26.197 131.354 24.4954C131.534 24.3335 131.678 24.135 131.778 23.9128C131.877 23.6906 131.93 23.4496 131.931 23.2055C131.923 22.7567 131.742 22.3291 131.427 22.0144C131.112 21.6997 130.688 21.523 130.246 21.5221ZM144.946 15.3934L151.235 9.23924C151.431 9.07489 151.59 8.86863 151.7 8.63504C151.809 8.40145 151.867 8.14624 151.869 7.88743C151.872 7.66729 151.831 7.44889 151.749 7.24507C151.667 7.04126 151.546 6.85615 151.392 6.70065C151.239 6.54515 151.057 6.42239 150.856 6.33961C150.655 6.25683 150.44 6.21569 150.224 6.21862C149.944 6.21503 149.668 6.27539 149.414 6.39524C149.161 6.51509 148.938 6.69134 148.761 6.91092L139.188 16.6833V8.00403C139.168 7.54018 138.972 7.10224 138.642 6.78138C138.311 6.46052 137.872 6.28145 137.415 6.28145C136.958 6.28145 136.519 6.46052 136.189 6.78138C135.858 7.10224 135.663 7.54018 135.642 8.00403V25.2423C135.663 25.7062 135.858 26.1441 136.189 26.465C136.519 26.7858 136.958 26.9649 137.415 26.9649C137.872 26.9649 138.311 26.7858 138.642 26.465C138.972 26.1441 139.168 25.7062 139.188 25.2423V20.9938L142.476 17.7691L148.965 26.186C149.125 26.4441 149.347 26.6571 149.61 26.8054C149.872 26.9538 150.167 27.0327 150.467 27.035C150.7 27.0439 150.932 27.0048 151.149 26.9203C151.367 26.8358 151.565 26.7075 151.733 26.5431C151.9 26.3788 152.033 26.1817 152.124 25.9638C152.214 25.7459 152.261 25.5117 152.26 25.2751C152.257 24.7993 152.084 24.3408 151.772 23.9853L144.946 15.3934ZM163.518 14.9853C159.624 14.0453 158.703 13.342 158.703 11.7607V11.7024C158.703 10.3506 159.915 9.26839 161.99 9.26839C163.579 9.26839 165.077 9.79308 166.651 10.8206C166.929 10.996 167.25 11.0882 167.576 11.0866C167.794 11.089 168.011 11.0476 168.213 10.9647C168.415 10.8818 168.599 10.7591 168.754 10.6037C168.909 10.4482 169.033 10.2631 169.118 10.0589C169.202 9.85479 169.246 9.63565 169.247 9.41414C169.256 9.12724 169.189 8.84317 169.054 8.59095C168.92 8.33873 168.721 8.12739 168.48 7.97852C166.588 6.69182 164.353 6.02662 162.077 6.07287C158.068 6.07287 155.182 8.50321 155.182 12.023V12.0813C155.182 15.8635 157.606 17.1533 161.904 18.21C165.655 19.0881 166.461 19.8788 166.461 21.3472V21.4055C166.461 22.9286 165.077 23.9853 162.876 23.9853C160.806 23.9835 158.804 23.236 157.226 21.8756C156.974 21.6927 156.678 21.5825 156.369 21.5565C156.061 21.5304 155.751 21.5896 155.473 21.7277C155.195 21.8659 154.959 22.0778 154.79 22.3412C154.62 22.6045 154.524 22.9094 154.512 23.2237C154.511 23.4931 154.574 23.7586 154.695 23.9982C154.816 24.2379 154.991 24.4446 155.207 24.601C157.39 26.2783 160.053 27.1842 162.79 27.1808C167.031 27.1808 170 24.8925 170 21.0521V20.9938C169.989 17.5942 167.799 16.0384 163.529 14.9853H163.518Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M211.018 29V23.9655C216.367 23.9655 220.48 18.6838 218.439 13.0624C217.697 10.993 216.027 9.32513 213.955 8.58385C208.328 6.54532 203.04 10.6841 203.04 15.9967V15.9967H198C198 7.50281 206.225 0.862157 215.13 3.64197C219.026 4.84655 222.118 7.96611 223.355 11.8578C226.138 20.7841 219.521 29 211.018 29V29Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M211.017 23.9966H206.008V18.9929V18.9929H211.017V18.9929V23.9966Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M206.007 27.8589H202.142V27.8589V23.998H206.007V27.8589V27.8589Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M202.145 23.9984H198.898V23.9984V20.7861V20.7861H202.114V20.7861V23.9984H202.145Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M239.312 14.8042C238.176 14.0276 236.755 13.6275 235.098 13.6275H231.5V25.0183H235.098C236.755 25.0183 238.176 24.5946 239.312 23.7709C239.927 23.3238 240.425 22.7119 240.756 21.9352C241.087 21.1586 241.277 20.2643 241.277 19.2523C241.277 18.2403 241.111 17.346 240.756 16.5929C240.425 15.8162 239.951 15.2043 239.312 14.8042V14.8042ZM233.609 15.535H234.745C236 15.535 237.041 15.7704 237.823 16.2646C238.699 16.7824 239.148 17.7943 239.148 19.23C239.148 20.7126 238.699 21.7482 237.823 22.313V22.313C237.065 22.8072 236.047 23.0661 234.769 23.0661H233.633V15.535H233.609Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M243.809 13.463C243.454 13.463 243.17 13.5807 242.933 13.816C242.697 14.0514 242.555 14.3338 242.555 14.6868C242.555 15.0398 242.673 15.3222 242.91 15.5811C243.147 15.8165 243.454 15.9341 243.809 15.9341C244.164 15.9341 244.448 15.8165 244.709 15.5811C244.946 15.3458 245.064 15.0398 245.064 14.6868C245.064 14.3338 244.946 14.0514 244.709 13.816C244.448 13.6042 244.141 13.463 243.809 13.463V13.463Z" fill="white"/>
        <rect x="242.768" y="16.9687" width="2.03584" height="8.02531" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M252.164 17.6515C251.548 17.1102 250.862 16.8043 250.128 16.8043C249.015 16.8043 248.068 17.1808 247.358 17.9575C246.624 18.7106 246.269 19.6755 246.269 20.8287C246.269 21.9583 246.624 22.9233 247.334 23.6999C248.044 24.453 248.991 24.8296 250.104 24.8296C250.885 24.8296 251.548 24.6178 252.116 24.1941V24.3824C252.116 25.0414 251.927 25.5591 251.595 25.9122C251.24 26.2652 250.743 26.4535 250.151 26.4535C249.204 26.4535 248.636 26.0769 247.902 25.1355L246.529 26.4535L246.577 26.5005C246.885 26.9241 247.334 27.3242 247.926 27.7008C248.518 28.0773 249.299 28.2892 250.175 28.2892C251.382 28.2892 252.353 27.9126 253.063 27.183C253.773 26.4535 254.152 25.465 254.152 24.2647V16.969H252.164V17.6515V17.6515ZM251.619 22.3826C251.264 22.7827 250.814 22.9709 250.223 22.9709C249.631 22.9709 249.181 22.7827 248.85 22.3826C248.495 21.9825 248.329 21.4647 248.329 20.8057C248.329 20.1468 248.495 19.629 248.85 19.2289C249.205 18.8288 249.655 18.6406 250.223 18.6406C250.814 18.6406 251.264 18.8288 251.619 19.2289C251.974 19.629 252.14 20.1703 252.14 20.8057C252.164 21.4647 251.974 21.9825 251.619 22.3826V22.3826Z" fill="white"/>
        <rect x="255.883" y="16.9687" width="2.03584" height="8.02531" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M256.924 13.463C256.569 13.463 256.285 13.5807 256.048 13.816C255.811 14.0514 255.669 14.3338 255.669 14.6868C255.669 15.0398 255.788 15.3222 256.024 15.5811C256.261 15.8165 256.569 15.9341 256.924 15.9341C257.279 15.9341 257.563 15.8165 257.823 15.5811C258.06 15.3458 258.178 15.0398 258.178 14.6868C258.178 14.3338 258.06 14.0514 257.823 13.816C257.563 13.6042 257.279 13.463 256.924 13.463V13.463Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M262.367 14.8034H260.379V16.9686H259.219V18.8043H260.379V22.1227C260.379 23.1582 260.592 23.9113 260.994 24.3349C261.421 24.7586 262.154 24.9939 263.172 24.9939C263.504 24.9939 263.835 24.9939 264.167 24.9704H264.261V23.1347L263.575 23.1817C263.101 23.1817 262.77 23.0876 262.604 22.9229C262.438 22.7581 262.367 22.4051 262.367 21.8638V18.8278H264.261V16.9921H262.367V14.8034V14.8034Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M273.78 13.603H275.815V24.9937H273.78V13.603Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M296.291 22.1231C295.936 22.5232 295.557 22.8762 295.273 23.0645V23.0645C294.989 23.2527 294.634 23.3233 294.232 23.3233C293.64 23.3233 293.143 23.1115 292.764 22.6644C292.385 22.2172 292.172 21.6524 292.172 20.9699C292.172 20.2874 292.361 19.7226 292.74 19.2754C293.119 18.8282 293.616 18.6164 294.208 18.6164C294.871 18.6164 295.557 19.0165 296.149 19.7226L297.498 18.4517V18.4517C296.623 17.322 295.51 16.8043 294.184 16.8043C293.072 16.8043 292.101 17.2043 291.32 18.0045C290.539 18.8047 290.136 19.7932 290.136 20.9934C290.136 22.1937 290.539 23.2057 291.32 23.9823C292.101 24.7825 293.072 25.1826 294.184 25.1826C295.652 25.1826 296.836 24.5471 297.64 23.394L296.291 22.1231V22.1231Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M304.624 18.1001C304.34 17.7 303.938 17.3705 303.464 17.1352C302.991 16.8998 302.423 16.7822 301.784 16.7822C300.647 16.7822 299.724 17.2058 299.038 18.006C298.351 18.8297 298.02 19.8417 298.02 21.0184C298.02 22.2422 298.399 23.2307 299.132 24.0073C299.866 24.7604 300.86 25.1605 302.068 25.1605C303.441 25.1605 304.553 24.6192 305.406 23.5366L305.453 23.4895L304.127 22.2187V22.2187C304.009 22.3599 303.82 22.5246 303.678 22.6894C303.488 22.8776 303.299 23.0188 303.086 23.113C302.778 23.2542 302.447 23.3483 302.068 23.3483C301.5 23.3483 301.05 23.1836 300.695 22.8541C300.363 22.5481 300.174 22.1481 300.127 21.6303H305.5L305.524 20.9007C305.524 20.383 305.453 19.8887 305.311 19.418C305.122 18.9238 304.908 18.5002 304.624 18.1001V18.1001ZM300.197 19.982C300.292 19.6055 300.481 19.276 300.718 19.0407C301.002 18.7818 301.357 18.6406 301.783 18.6406C302.281 18.6406 302.659 18.7818 302.92 19.0642C303.156 19.3231 303.298 19.629 303.322 20.0056H300.197V19.982Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M312.414 17.5809V17.5809C311.798 17.0631 310.946 16.8043 309.881 16.8043C309.195 16.8043 308.579 16.9455 308.011 17.2279C307.49 17.4868 306.969 17.9339 306.638 18.5223L306.662 18.5458L307.964 19.7932C308.508 18.9459 309.1 18.64 309.881 18.64C310.307 18.64 310.662 18.7576 310.923 18.9694C311.183 19.1813 311.325 19.4637 311.325 19.8402V20.2403C310.828 20.0991 310.331 20.005 309.834 20.005C308.816 20.005 308.011 20.2403 307.395 20.711C306.78 21.1817 306.472 21.8642 306.472 22.7114C306.472 23.4646 306.733 24.0765 307.253 24.5236C307.774 24.9708 308.437 25.1826 309.218 25.1826C309.999 25.1826 310.71 24.8766 311.372 24.3353V24.9943H313.361V19.8402C313.337 18.8518 313.029 18.0987 312.414 17.5809V17.5809ZM308.814 21.9348C309.051 21.7701 309.359 21.6995 309.785 21.6995C310.282 21.6995 310.803 21.7936 311.323 21.9819V22.7585C310.874 23.1586 310.282 23.3704 309.572 23.3704C309.217 23.3704 308.956 23.2998 308.767 23.1351C308.577 22.9939 308.483 22.8056 308.483 22.5467C308.483 22.2878 308.577 22.076 308.814 21.9348V21.9348Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M321.148 17.721C320.58 17.0856 319.798 16.7797 318.78 16.7797C317.976 16.7797 317.313 17.015 316.839 17.4622V16.9679H314.851V24.9932H316.887V20.5687C316.887 19.9568 317.029 19.4861 317.313 19.1331C317.597 18.7801 317.999 18.6154 318.52 18.6154C318.97 18.6154 319.325 18.7566 319.585 19.0625C319.846 19.3685 319.964 19.7921 319.964 20.3334V24.9697H322V20.3334C322 19.2273 321.716 18.3565 321.148 17.721V17.721Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M271.225 17.5809V17.5809C270.609 17.0631 269.757 16.8043 268.692 16.8043C268.005 16.8043 267.39 16.9455 266.821 17.2279C266.301 17.4868 265.78 17.9339 265.448 18.5223L265.472 18.5458L266.774 19.7932C267.319 18.9459 267.91 18.64 268.692 18.64C269.118 18.64 269.473 18.7576 269.733 18.9694C269.994 19.1813 270.136 19.4637 270.136 19.8402V20.2403C269.638 20.0991 269.141 20.005 268.644 20.005C267.626 20.005 266.821 20.2403 266.206 20.711C265.59 21.1817 265.283 21.8642 265.283 22.7114C265.283 23.4646 265.543 24.0765 266.064 24.5236C266.585 24.9708 267.248 25.1826 268.029 25.1826C268.81 25.1826 269.52 24.8766 270.183 24.3353V24.9943H272.171V19.8402C272.148 18.8518 271.84 18.0987 271.225 17.5809V17.5809ZM267.625 21.9348C267.862 21.7701 268.169 21.6995 268.595 21.6995C269.092 21.6995 269.613 21.7936 270.134 21.9819V22.7585C269.684 23.1586 269.092 23.3704 268.382 23.3704C268.027 23.3704 267.767 23.2998 267.577 23.1351C267.388 22.9939 267.293 22.8056 267.293 22.5467C267.293 22.2878 267.388 22.076 267.625 21.9348V21.9348Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M283.153 25.1587C279.91 25.1587 277.259 22.5228 277.259 19.2986C277.259 16.0744 279.91 13.4385 283.153 13.4385C286.396 13.4385 289.048 16.0744 289.048 19.2986C289.048 22.5228 286.42 25.1587 283.153 25.1587V25.1587ZM283.152 15.4859C281.045 15.4859 279.341 17.1804 279.341 19.275C279.341 21.3696 281.045 23.0641 283.152 23.0641C285.259 23.0641 286.963 21.3696 286.963 19.275C286.963 17.1804 285.259 15.4859 283.152 15.4859V15.4859Z" fill="white"/>
        <path d="M231.652 9H231.156L232.412 3.1H233.912C234.315 3.1 234.637 3.16667 234.88 3.3C235.123 3.43333 235.299 3.612 235.408 3.836C235.517 4.06 235.572 4.30667 235.572 4.576C235.572 4.92267 235.513 5.236 235.396 5.516C235.281 5.79333 235.117 6.03333 234.904 6.236C234.693 6.43867 234.441 6.59333 234.148 6.7C233.855 6.80667 233.532 6.86 233.18 6.86H232.108L231.652 9ZM232.148 6.676L231.98 6.424H233.172C233.559 6.424 233.895 6.34667 234.18 6.192C234.465 6.03467 234.687 5.81733 234.844 5.54C235.001 5.26267 235.08 4.94 235.08 4.572C235.08 4.36133 235.037 4.18 234.952 4.028C234.867 3.87333 234.729 3.75333 234.54 3.668C234.351 3.58 234.1 3.536 233.788 3.536H232.592L232.872 3.26L232.148 6.676ZM237.474 9.076C237.111 9.076 236.799 9.004 236.538 8.86C236.276 8.71333 236.075 8.51067 235.934 8.252C235.792 7.99333 235.722 7.692 235.722 7.348C235.722 6.97467 235.786 6.62667 235.914 6.304C236.044 5.98133 236.224 5.7 236.454 5.46C236.686 5.21733 236.956 5.02933 237.266 4.896C237.578 4.76 237.915 4.692 238.278 4.692C238.643 4.692 238.955 4.76667 239.214 4.916C239.475 5.06533 239.675 5.26933 239.814 5.528C239.952 5.784 240.022 6.07467 240.022 6.4C240.022 6.79467 239.955 7.156 239.822 7.484C239.691 7.80933 239.51 8.09067 239.278 8.328C239.046 8.56533 238.775 8.74933 238.466 8.88C238.159 9.01067 237.828 9.076 237.474 9.076ZM237.51 8.632C237.886 8.632 238.224 8.54133 238.526 8.36C238.83 8.176 239.071 7.92133 239.25 7.596C239.428 7.268 239.518 6.88667 239.518 6.452C239.518 6.18533 239.468 5.95467 239.37 5.76C239.271 5.56267 239.127 5.40933 238.938 5.3C238.751 5.19067 238.52 5.136 238.246 5.136C237.952 5.136 237.682 5.192 237.434 5.304C237.188 5.41333 236.975 5.56667 236.794 5.764C236.615 5.96133 236.475 6.19067 236.374 6.452C236.275 6.71333 236.226 6.996 236.226 7.3C236.226 7.71067 236.336 8.036 236.558 8.276C236.782 8.51333 237.099 8.632 237.51 8.632ZM243.959 9L243.627 4.752H244.055L244.379 8.76H244.287L245.967 4.752H246.499L244.639 9H243.959ZM241.159 9L241.095 4.752H241.595L241.579 8.76H241.483L243.503 4.752H243.967L241.843 9H241.159ZM246.97 7.084L247.066 6.64H250.506L250.406 6.78C250.42 6.724 250.432 6.65867 250.442 6.584C250.453 6.50667 250.458 6.42267 250.458 6.332C250.458 6.11067 250.413 5.91067 250.322 5.732C250.234 5.55067 250.1 5.40667 249.918 5.3C249.737 5.19333 249.506 5.14 249.226 5.14C248.925 5.14 248.649 5.196 248.398 5.308C248.15 5.42 247.934 5.576 247.75 5.776C247.569 5.97333 247.428 6.204 247.326 6.468C247.228 6.72933 247.178 7.012 247.178 7.316C247.178 7.57467 247.225 7.80267 247.318 8C247.414 8.19733 247.56 8.35067 247.754 8.46C247.949 8.56933 248.194 8.624 248.49 8.624C248.738 8.624 248.958 8.59467 249.15 8.536C249.345 8.47467 249.51 8.39467 249.646 8.296C249.785 8.19733 249.896 8.09333 249.978 7.984C250.064 7.872 250.122 7.76667 250.154 7.668H250.654C250.614 7.82533 250.534 7.98667 250.414 8.152C250.297 8.31467 250.142 8.46667 249.95 8.608C249.758 8.74933 249.533 8.864 249.274 8.952C249.018 9.03733 248.733 9.08 248.418 9.08C248.056 9.08 247.745 9.00667 247.486 8.86C247.23 8.71067 247.034 8.50533 246.898 8.244C246.765 7.98 246.698 7.676 246.698 7.332C246.698 6.96133 246.764 6.61733 246.894 6.3C247.028 5.98 247.212 5.7 247.446 5.46C247.684 5.21733 247.958 5.02933 248.27 4.896C248.582 4.76 248.917 4.692 249.274 4.692C249.632 4.692 249.933 4.76667 250.178 4.916C250.426 5.06267 250.614 5.26267 250.742 5.516C250.87 5.76933 250.934 6.05467 250.934 6.372C250.934 6.484 250.924 6.60667 250.902 6.74C250.884 6.87333 250.861 6.988 250.834 7.084H246.97ZM251.615 9L252.515 4.752H253.011L252.747 6.004L252.559 5.948C252.604 5.81467 252.673 5.676 252.767 5.532C252.86 5.38533 252.977 5.248 253.119 5.12C253.26 4.992 253.424 4.88933 253.611 4.812C253.8 4.732 254.012 4.692 254.247 4.692C254.415 4.692 254.549 4.70667 254.651 4.736C254.755 4.76533 254.817 4.788 254.839 4.804L254.603 5.284C254.579 5.26533 254.528 5.24133 254.451 5.212C254.376 5.18267 254.261 5.168 254.107 5.168C253.883 5.168 253.685 5.212 253.515 5.3C253.344 5.38533 253.199 5.49733 253.079 5.636C252.959 5.77467 252.861 5.92267 252.787 6.08C252.715 6.23733 252.664 6.38667 252.635 6.528L252.107 9H251.615ZM255.181 7.084L255.277 6.64H258.717L258.617 6.78C258.631 6.724 258.643 6.65867 258.653 6.584C258.664 6.50667 258.669 6.42267 258.669 6.332C258.669 6.11067 258.624 5.91067 258.533 5.732C258.445 5.55067 258.311 5.40667 258.129 5.3C257.948 5.19333 257.717 5.14 257.437 5.14C257.136 5.14 256.86 5.196 256.609 5.308C256.361 5.42 256.145 5.576 255.961 5.776C255.78 5.97333 255.639 6.204 255.537 6.468C255.439 6.72933 255.389 7.012 255.389 7.316C255.389 7.57467 255.436 7.80267 255.529 8C255.625 8.19733 255.771 8.35067 255.965 8.46C256.16 8.56933 256.405 8.624 256.701 8.624C256.949 8.624 257.169 8.59467 257.361 8.536C257.556 8.47467 257.721 8.39467 257.857 8.296C257.996 8.19733 258.107 8.09333 258.189 7.984C258.275 7.872 258.333 7.76667 258.365 7.668H258.865C258.825 7.82533 258.745 7.98667 258.625 8.152C258.508 8.31467 258.353 8.46667 258.161 8.608C257.969 8.74933 257.744 8.864 257.485 8.952C257.229 9.03733 256.944 9.08 256.629 9.08C256.267 9.08 255.956 9.00667 255.697 8.86C255.441 8.71067 255.245 8.50533 255.109 8.244C254.976 7.98 254.909 7.676 254.909 7.332C254.909 6.96133 254.975 6.61733 255.105 6.3C255.239 5.98 255.423 5.7 255.657 5.46C255.895 5.21733 256.169 5.02933 256.481 4.896C256.793 4.76 257.128 4.692 257.485 4.692C257.843 4.692 258.144 4.76667 258.389 4.916C258.637 5.06267 258.825 5.26267 258.953 5.516C259.081 5.76933 259.145 6.05467 259.145 6.372C259.145 6.484 259.135 6.60667 259.113 6.74C259.095 6.87333 259.072 6.988 259.045 7.084H255.181ZM261.526 9.076C261.072 9.076 260.714 8.93067 260.45 8.64C260.186 8.34933 260.054 7.94133 260.054 7.416C260.054 7.048 260.108 6.7 260.218 6.372C260.33 6.044 260.487 5.75467 260.69 5.504C260.895 5.25067 261.14 5.05333 261.426 4.912C261.711 4.768 262.028 4.696 262.378 4.696C262.666 4.696 262.922 4.756 263.146 4.876C263.372 4.996 263.551 5.16133 263.682 5.372C263.812 5.58267 263.878 5.82533 263.878 6.1C263.878 6.172 263.872 6.248 263.862 6.328C263.851 6.40533 263.839 6.46667 263.826 6.512L263.486 6.52C263.499 6.47467 263.508 6.424 263.514 6.368C263.522 6.30933 263.526 6.26 263.526 6.22C263.526 6.01733 263.475 5.83467 263.374 5.672C263.275 5.50933 263.139 5.38133 262.966 5.288C262.795 5.19467 262.6 5.148 262.382 5.148C262.091 5.148 261.832 5.208 261.606 5.328C261.382 5.44533 261.192 5.608 261.038 5.816C260.883 6.02133 260.764 6.25867 260.682 6.528C260.602 6.79467 260.562 7.076 260.562 7.372C260.562 7.76933 260.656 8.07467 260.846 8.288C261.038 8.50133 261.308 8.608 261.658 8.608C261.922 8.608 262.17 8.54667 262.402 8.424C262.636 8.30133 262.836 8.13867 263.002 7.936C263.17 7.73067 263.279 7.504 263.33 7.256L263.722 7.264C263.65 7.6 263.507 7.90533 263.294 8.18C263.08 8.45467 262.819 8.67333 262.51 8.836C262.203 8.996 261.875 9.076 261.526 9.076ZM262.958 9L264.286 2.748H264.782L263.454 9H262.958ZM268.755 9.076C268.47 9.076 268.214 9.01467 267.987 8.892C267.76 8.76933 267.582 8.60133 267.451 8.388C267.323 8.172 267.259 7.92667 267.259 7.652C267.259 7.57733 267.263 7.50533 267.271 7.436C267.282 7.36667 267.294 7.30667 267.307 7.256L267.643 7.248C267.635 7.28 267.627 7.32267 267.619 7.376C267.614 7.42933 267.611 7.48133 267.611 7.532C267.611 7.73467 267.66 7.91733 267.759 8.08C267.86 8.24267 267.996 8.372 268.167 8.468C268.34 8.56133 268.536 8.608 268.755 8.608C269.043 8.608 269.299 8.54933 269.523 8.432C269.75 8.312 269.94 8.148 270.095 7.94C270.252 7.732 270.371 7.49467 270.451 7.228C270.531 6.96133 270.571 6.68 270.571 6.384C270.571 5.97867 270.479 5.67067 270.295 5.46C270.111 5.24933 269.843 5.144 269.491 5.144C269.243 5.144 269 5.204 268.763 5.324C268.526 5.444 268.32 5.604 268.147 5.804C267.974 6.004 267.86 6.22533 267.807 6.468L267.423 6.456C267.495 6.12 267.643 5.81867 267.867 5.552C268.091 5.28533 268.356 5.076 268.663 4.924C268.972 4.76933 269.29 4.692 269.615 4.692C270.071 4.692 270.428 4.83733 270.687 5.128C270.948 5.41867 271.079 5.83067 271.079 6.364C271.079 6.732 271.023 7.08 270.911 7.408C270.802 7.73333 270.644 8.02133 270.439 8.272C270.234 8.52267 269.988 8.72 269.703 8.864C269.418 9.00533 269.102 9.076 268.755 9.076ZM266.775 9L268.107 2.748H268.603L267.275 9H266.775ZM271.22 10.776C271.121 10.776 271.031 10.7693 270.948 10.756C270.865 10.7453 270.816 10.736 270.8 10.728L270.892 10.284C270.921 10.3027 270.975 10.3173 271.052 10.328C271.127 10.3413 271.2 10.348 271.272 10.348C271.456 10.348 271.619 10.3027 271.76 10.212C271.904 10.1213 272.031 10.0067 272.14 9.868C272.249 9.72933 272.344 9.58667 272.424 9.44L272.66 9.012L272.084 4.752H272.588L273.072 8.552H272.984L275.036 4.752H275.568L272.976 9.42C272.848 9.652 272.707 9.87067 272.552 10.076C272.4 10.284 272.217 10.452 272.004 10.58C271.791 10.7107 271.529 10.776 271.22 10.776Z" fill="white"/>
        <line x1="184.5" y1="-2.18557e-08" x2="184.5" y2="32" stroke="white" stroke-opacity="0.5"/>
        </svg>
            </a>
          </div>
        
          <div class="header-middle-area">
        
            <nav class="main-nav" id="main-nav">
        
          <ul>
        
            <li class="articles">
              <a href="/archives/">
                <span>Articles</span>
              </a>
            </li>
        
            <li class="videos">
              <a href="/video-screencasts/">
                <span>Videos</span>
              </a>
            </li>
        
            <li class="almanac">
              <a href="/almanac/">
                <span>Almanac</span>
              </a>
            </li>
        
            <li class="newsletter">
              <a href="/newsletters/">
                <span>Newsletter</span>
              </a>
            </li>
        
            <li class="guides">
              <a href="/guides/">
                <span>Guides</span>
              </a>
            </li>
        
            <li class="do">
              <a href="https://www.digitalocean.com/?utm_source=css-tricks.com&utm_medium=cta&utm_campaign=website_link" target="DigitalOcean">
                <span>DigitalOcean</span>
              </a>
            </li>
        
            <li class="doc">
              <a href="https://www.digitalocean.com/community?utm_source=css-tricks.com&utm_medium=cta&utm_campaign=website_link" target="DigitalOcean">
                <span>DO&nbsp;Community</span>
              </a>
            </li>
        
          </ul>
        
        </nav>
        
        <div class="search-and-account">
        
          <a href="https://www.google.com/search?q=site:css-tricks.com%20layout" class="jetpack-search-filter__link">
            <span class="screen-reader-text">Search</span>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.0726 10.4326C12.4801 10.4326 10.4 12.5451 10.4 15.1053C10.4 17.6978 12.5125 19.7779 15.0726 19.7779C17.6651 19.7779 19.7453 17.6654 19.7453 15.1053C19.744 12.544 17.664 10.4326 15.0726 10.4326Z" fill="white"/>
        <path d="M16.0327 0.447479C7.42401 0.447479 0.447693 7.4238 0.447693 16.0324C0.447693 24.6398 7.42401 31.6161 16.0314 31.6161C24.64 31.6161 31.6163 24.6398 31.6163 16.0324C31.6163 7.4238 24.64 0.447479 16.0327 0.447479ZM23.6163 24.0324C23.3926 24.2562 23.0401 24.385 22.6563 24.385C22.2726 24.385 21.9526 24.2575 21.6963 24.0324L18.7526 21.0887L18.4651 21.2487C17.4088 21.825 16.2576 22.145 15.0724 22.145C11.1998 22.145 8.06509 19.0087 8.06509 15.1376C8.06509 11.265 11.2013 8.13023 15.0724 8.13023C18.9451 8.13023 22.0798 11.2665 22.0798 15.1376C22.0798 16.5138 21.6961 17.8251 20.9273 18.9776L20.7348 19.2976L23.6473 22.2101C23.8711 22.4664 24.0311 22.7864 24.0311 23.1376C23.9998 23.4563 23.8723 23.7763 23.616 24.0326L23.6163 24.0324Z" fill="white"/>
        </svg>
          </a>
        
        </div>
          </div>
          
        </header>
        
          <div class="page-wrap">
        <script>
          var articleID = 365841;
          var articleYear = 2022;
          var articleAuthor = "275938";
          var articleType = "post";
        </script>
        
        <div class="articles-and-sidebar ">
        
          <main id="post-365841">
        
            <article>
        
              <header class="mega-header">
        
            <style>
            html {
              --featured-img: url(https://css-tricks.com/wp-content/uploads/2022/05/wp-patterns-featured-image.jpg);
              --bg-blend-mode: multiply;
              background-size: 120% 2000px, 100% auto;
            }
          </style>
          
            <div class="tags">
            <a href="https://css-tricks.com/tag/wordpress/" rel="tag">WordPress</a>  </div>
        
          <h1 class="article-title">
                  How to Create Block Theme Patterns in WordPress&nbsp;6.0      </h1>
        
              <div class="author-row">
        
            
                  <a href="https://css-tricks.com/author/ganeshdahal/" aria-label="Author page of Ganesh Dahal">
                <img alt="Avatar of Ganesh Dahal" src="https://secure.gravatar.com/avatar/472b7eac08807818dc549715adcbbdd2?s=80&#038;d=retro&#038;r=pg" srcset="https://secure.gravatar.com/avatar/472b7eac08807818dc549715adcbbdd2?s=160&#038;d=retro&#038;r=pg 2x" class="avatar avatar-80 photo skip-lazy" height="80" width="80" loading="lazy"><noscript><img alt='Avatar of Ganesh Dahal' src='https://secure.gravatar.com/avatar/472b7eac08807818dc549715adcbbdd2?s=80&#038;d=retro&#038;r=pg' srcset='https://secure.gravatar.com/avatar/472b7eac08807818dc549715adcbbdd2?s=160&#038;d=retro&#038;r=pg 2x' class='avatar avatar-80 photo skip-lazy' height='80' width='80' loading='lazy'/></noscript>      </a>
            
            <div>
              
                      
                <a class="author-name" href="https://css-tricks.com/author/ganeshdahal/">
                  Ganesh Dahal        </a>
              
                on
                  
              <time datetime="">
                Jun 1, 2022      </time>
        
              
            </div>
        
          
        </div>
          
        </header>
                <div class="article-sponsor">
        
          
              <p>
          DigitalOcean joining forces with CSS-Tricks! Special welcome offer: <a href="https://try.digitalocean.com/css-tricks/?utm_source=css-tricks.com&utm_medium=cta&utm_campaign=website_link">get $100 of free credit</a>.
        </p>
            
        </div>
                <div class="article-content">
        
                  
                  
        <p><a href="https://wordpress.org/support/article/block-pattern/" rel="noopener">Block patterns</a>, also frequently referred to as <em>sections</em>, were introduced in <a href="https://make.wordpress.org/core/2020/07/16/block-patterns-in-wordpress-5-5/" rel="noopener">WordPress 5.5</a> to allow users to build and share predefined block layouts in the <a href="https://wordpress.org/patterns/" rel="noopener">pattern directory</a>. The directory is the home of a wide range of curated patterns designed by the WordPress community. These patterns are available in simple copy and paste format, require no coding knowledge and thus are a big time saver for users.</p>
        
        
        
        <p>Despite many articles on patterns, there is a lack of comprehensive and up-to-date articles on pattern creation covering the latest enhanced features. This article aims to fill the gap with a focus on the recent enhanced features like creating patterns without registration and offer an up-to-date step-by-step guide to create and use them in block themes for novices and experienced authors.</p>
        
        
        
        <span id="more-365841"></span>
        
        
        
        <p>Since the launch of <a href="https://wordpress.org/news/2022/01/josephine/" rel="noopener">WordPress 5.9</a> and the <a href="https://wordpress.org/themes/twentytwentytwo/" rel="noopener">Twenty Twenty-Two</a> (TT2) default theme, the use of block patterns in block themes has proliferated. I have been a big fan of <a href="https://developer.wordpress.org/block-editor/reference-guides/block-api/block-patterns/" rel="noopener">block patterns</a> and have created and used them in my block themes.</p>
        
        
        
        <p>The new <a href="https://make.wordpress.org/core/2022/05/03/wordpress-6-0-field-guide/" rel="noopener">WordPress 6.0</a> offers <a href="https://make.wordpress.org/core/2022/05/02/new-features-for-working-with-patterns-and-themes-in-wordpress-6-0/" rel="noopener">three major patterns feature enhancements to authors</a>:</p>
        
        
        
        <ul><li>Allowing pattern registration through <code>/patterns</code> folder (similar to <code>/parts</code>, <code>/templates</code>, and <code>/styles</code> registration).</li><li>Registering patterns from the public patterns directory using the <code>theme.json</code>.</li><li>Adding patterns that can be offered to the user when creating a new page.</li></ul>
        
        
        
        <p>In an introductory <a href="https://www.youtube.com/watch?v=abaaVKl-beM" rel="noopener">Exploring WordPress 6.0 video</a>, Automattic product liaison Ann McCathy highlights some newly enhanced patterns features (starting at 15:00) and discusses future patterns enhancement plans — which include <a href="https://github.com/WordPress/gutenberg/issues/39281" rel="noopener">patterns as sectioning elements</a>, providing options to <a href="https://github.com/WordPress/gutenberg/pull/40034" rel="noopener">pick pattern on page creation</a>, integrating pattern directory search, and more.</p>
        
        
        
        <figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
        <iframe title="Exploring WordPress 6.0: Style Variations, Block Locking UI, Writing Improvements, &amp; more" width="500" height="281" src="https://www.youtube.com/embed/abaaVKl-beM?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div></figure>
        
        
        
        <h3><a href="#aa-prerequisites" aria-hidden="true" class="aal_anchor" id="aa-prerequisites"><svg aria-hidden="true" class="aal_svg" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Prerequisites</h3>
        
        
        
        <p>The article assumes that readers have basic knowledge of WordPress full site editing (FSE) interface and block themes. The <a href="https://developer.wordpress.org/block-editor/getting-started/full-site-editing/" rel="noopener">Block Editor Handbook</a> and <a href="https://fullsiteediting.com/" rel="noopener">Full Site Editing</a> website provide the most up-to-date tutorial guides to learn all FSE features, including block themes and patterns discussed in this article.</p>
        
        
        
        <h3><a href="#aa-section-1-evolving-approaches-to-creating-block-patterns" aria-hidden="true" class="aal_anchor" id="aa-section-1-evolving-approaches-to-creating-block-patterns"><svg aria-hidden="true" class="aal_svg" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Section 1: Evolving approaches to creating block patterns</h3>
        
        
        
        <p>The initial approach to creating block patterns required the use of block pattern API either as a custom plugin or directly registered in the <code>functions.php</code> file to bundle with a block theme. The newly launched WordPress 6.0 introduced several new and enhanced features working with patterns and themes, including pattern registration via a <code>/patterns</code> folder and a <a href="https://make.wordpress.org/core/2022/05/03/page-creation-patterns-in-wordpress-6-0/" rel="noopener">page creation pattern modal</a>.</p>
        
        
        
        <p>For background, let&#8217;s first briefly overview how the pattern registration workflow evolved from using the register pattern API to directly loading without registration.</p>
        
        
        
        <h4><a href="#aa-use-case-example-1-twenty-twenty-one" aria-hidden="true" class="aal_anchor" id="aa-use-case-example-1-twenty-twenty-one"><svg aria-hidden="true" class="aal_svg" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Use case example 1: Twenty Twenty-One</h4>
        
        
        
        <p>The default <a href="https://github.com/WordPress/theme-experiments/blob/master/tt1-blocks/inc/block-patterns.php" rel="noopener">Twenty Twenty-One theme</a> (TT1) and <a href="https://wordpress.org/themes/tt1-blocks/" rel="noopener">TT1 Blocks theme</a> (a sibling of TT1) showcase how block patterns can be registered in the theme’s <code>functions.php</code>. In the TT1 Blocks experimental-theme, this single <a href="https://github.com/WordPress/theme-experiments/blob/master/tt1-blocks/inc/block-patterns.php" rel="noopener">block-pattern.php</a> file containing <em>eight</em> block patterns is added to the <code>functions.php</code> as an <a href="https://github.com/WordPress/theme-experiments/blob/master/tt1-blocks/functions.php#L91" rel="noopener"><code>include</code> as shown here</a>.</p>
        
        
        
        <p>A custom block pattern <a href="https://developer.wordpress.org/block-editor/reference-guides/block-api/block-patterns/#register_block_pattern" rel="noopener">needs to be registered</a> using the <code>register_block_pattern</code> function, which receives two arguments — <code>title</code> (name of the patterns) and <code>properties</code> (an array describing properties of the pattern).</p>
        
        
        
        <p>Here is an example of registering a simple &#8220;Hello World&#8221; paragraph pattern from this <a href="https://themeshaper.com/2020/04/08/adding-block-patterns-to-your-theme/" rel="noopener">Theme Shaper article</a>:</p>
        
        
        
        <pre rel="PHP" class="wp-block-csstricks-code-block language-javascript" data-line=""><code markup="tt">register_block_pattern(
            'my-plugin/hello-world',
            array(
                'title'   => __( 'Hello World', 'my-plugin' ),
                'content' => "&lt;!-- wp:paragraph -->\n&lt;p>Hello World&lt;/p>\n&lt;!-- /wp:paragraph -->",
            )
        );</code></pre>
        
        
        
        <p>After registration, the <code>register_block_pattern()</code> function should be called from a handler attached to the <code>init</code> hook as described <a href="https://developer.wordpress.org/block-editor/reference-guides/block-api/block-patterns/#register_block_pattern" rel="noopener">here</a>.</p>
        
        
        
        <pre rel="PHP" class="wp-block-csstricks-code-block language-javascript" data-line=""><code markup="tt"> function my_plugin_register_my_patterns() {
            register_block_pattern( ... );
          }
        
          add_action( 'init', 'my_plugin_register_my_patterns' );</code></pre>
        
        
        
        <p>Once block patterns are registered they are visible in the block editor. More detailed documentation is found in this <a href="https://developer.wordpress.org/block-editor/reference-guides/block-api/block-patterns/#register_block_pattern" rel="noopener">Block Pattern Registration.</a></p>
        
        
        
        <p><em><strong>Block pattern properties</strong></em></p>
        
        
        
        <p>In addition to required <code>title</code> and <code>content</code> properties, the <a href="https://developer.wordpress.org/block-editor/reference-guides/block-api/block-patterns/" rel="noopener">block editor handbook</a> lists the following optional <a href="https://developer.wordpress.org/block-editor/reference-guides/block-api/block-patterns/#register_block_pattern" rel="noopener">pattern properties</a>:</p>
        
        
        
        <ul><li><code>title</code> <em>(required)</em>: A human-readable title for the pattern.</li><li><code>content</code> <em>(required)</em>: Block HTML Markup for the pattern.</li><li><code>description</code> <em>(optional)</em>: A visually hidden text used to describe the pattern in the inserter. A description is optional but it is strongly encouraged when the title does not fully describe what the pattern does. The description will help users discover the pattern while searching.</li><li><code>categories</code> <em>(optional)</em>: An array of registered pattern categories used to group block patterns. Block patterns can be shown on multiple categories. A category must be registered separately in order to be used here.</li><li><code>keywords</code> <em>(optional)</em>: An array of aliases or keywords that help users discover the pattern while searching.</li><li><code>viewportWidth</code> <em>(optional)</em>: An integer specifying the intended width of the pattern to allow for a scaled preview of the pattern in the inserter.</li><li><code>blockTypes</code> <em>(optional)</em>: An array of block types that the pattern is intended to be used with. Each value needs to be the declared block’s <code>name</code>.</li><li><code>inserter</code> <em>(optional)</em>: By default, all patterns will appear in the inserter. To hide a pattern so that it can only be inserted programmatically, set the <code>inserter</code> to <code>false</code>.</li></ul>
        
        
        
        <p>The following is an example of a quote pattern plugin code snippets taken from the <a href="https://wordpress.org/news/2021/03/so-you-want-to-make-block-patterns/" rel="noopener">WordPress blog</a>.</p>
        
        
        
        <pre rel="PHP" class="wp-block-csstricks-code-block language-javascript" data-line=""><code markup="tt">/*
        Plugin Name: Quote Pattern Example Plugin
        */
        
        register_block_pattern(
            'my-plugin/my-quote-pattern',
             array(
              'title'       => __( 'Quote with Avatar', 'my-plugin' ),
              'categories'  => array( 'text' ),
              'description' => _x( 'A big quote with an avatar".', 'Block pattern description', 'my-plugin' ),
              'content'     => '&lt;!-- wp:group -->&lt;div class="wp-block-group">&lt;div class="wp-block-group__inner-container">&lt;!-- wp:separator {"className":"is-style-default"} -->&lt;hr class="wp-block-separator is-style-default"/>&lt;!-- /wp:separator -->&lt;!-- wp:image {"align":"center","id":553,"width":150,"height":150,"sizeSlug":"large","linkDestination":"none","className":"is-style-rounded"} -->&lt;div class="wp-block-image is-style-rounded">&lt;figure class="aligncenter size-large is-resized">&lt;img src="https://blockpatterndesigns.mystagingwebsite.com/wp-content/uploads/2021/02/StockSnap_HQR8BJFZID-1.jpg" alt="" class="wp-image-553" width="150" height="150"/>&lt;/figure>&lt;/div>&lt;!-- /wp:image -->&lt;!-- wp:quote {"align":"center","className":"is-style-large"} -->&lt;blockquote class="wp-block-quote has-text-align-center is-style-large">&lt;p>"Contributing makes me feel like I\'m being useful to the planet."&lt;/p>&lt;cite>— Anna Wong, &lt;em>Volunteer&lt;/em>&lt;/cite>&lt;/blockquote>&lt;!-- /wp:quote -->&lt;!-- wp:separator {"className":"is-style-default"} -->&lt;hr class="wp-block-separator is-style-default"/>&lt;!-- /wp:separator -->&lt;/div>&lt;/div>&lt;!-- /wp:group -->',
              )
        );</code></pre>
        
        
        
        <p><em><strong>Using patterns in a template file</strong></em></p>
        
        
        
        <p>Once patterns are created, they can be used in a theme template file with the following block markup:</p>
        
        
        
        <pre rel="HTML" class="wp-block-csstricks-code-block language-markup" data-line=""><code markup="tt">&lt;!-- wp:pattern {"slug":"prefix/pattern-slug"} /--></code></pre>
        
        
        
        <p>An example from <a href="https://github.com/tinjure20/TT2-gopher-blocks/blob/main/parts/footer.html#L3" rel="noopener">this GitHub repository</a> shows the use of “<code>footer-with-background</code>” pattern slug with “<code>tt2gopher</code>” prefix in TT2 Gopher blocks theme.</p>
        
        
        
        <p>Early adopters of block themes and Gutenberg plugin took advantage of patterns in classic themes as well. The default <a href="https://themes.trac.wordpress.org/browser/twentytwenty/1.6/inc/block-patterns.php" rel="noopener">Twenty Twenty</a> and my favorite Eksell themes (a <a href="https://andersnoren.se/themes/eksell/" rel="noopener">demo site</a> here) are good examples that showcase how pattern features can be added to classic themes.</p>
        
        
        
        <h4><a href="#aa-use-case-example-2-twenty-twenty-two" aria-hidden="true" class="aal_anchor" id="aa-use-case-example-2-twenty-twenty-two"><svg aria-hidden="true" class="aal_svg" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Use case example 2: Twenty Twenty-Two</h4>
        
        
        
        <p>If a theme includes only a few patterns, the development and maintenance are fairly manageable. However, if a block theme includes many patterns, like in TT2 theme, then the <code>pattern.php</code> file becomes very large and hard to read. The default TT2 theme, which bundles <a href="https://github.com/WordPress/twentytwentytwo/blob/trunk/inc/block-patterns.php" rel="noopener">more than 60 patterns</a>, showcases a refactored pattern registration workflow <a href="https://github.com/WordPress/twentytwentytwo/tree/trunk/inc" rel="noopener">structure</a> that is easier to read and maintain.</p>
        
        
        
        <p>Taking examples from the TT2 theme, let&#8217;s briefly discuss how this simplified workflow works.</p>
        
        
        
        <p><em><strong>2.1: Registering Patterns Categories</strong></em></p>
        
        
        
        <p>For demonstration purposes, I created a TT2 child theme and set it up on my local test site with some dummy content. Following TT2, I registered <code>footer-with-background</code> and added to the following pattern categories array list in its <code>block-patterns.php</code> file.</p>
        
        
        
        <pre rel="PHP" class="wp-block-csstricks-code-block language-javascript" data-line="24,25,26,28,29,30,31,32"><code markup="tt">/**
        * Registers block patterns and categories.
        */
        function twentytwentytwo_register_block_patterns() {
            $block_pattern_categories = array(
                'footer'   => array( 'label' => __( 'Footers', 'twentytwentytwo' ) ),
                'header'   => array( 'label' => __( 'Headers', 'twentytwentytwo' ) ),
                'pages'    => array( 'label' => __( 'Pages', 'twentytwentytwo' ) ),
                        // ...
            );
        
            /**
             * Filters the theme block pattern categories.
             */
            $block_pattern_categories = apply_filters( 'twentytwentytwo_block_pattern_categories', $block_pattern_categories );
        
            foreach ( $block_pattern_categories as $name => $properties ) {
                if ( ! WP_Block_Pattern_Categories_Registry::get_instance()->is_registered( $name ) ) {
                    register_block_pattern_category( $name, $properties );
                }
            }
        
            $block_patterns = array(
                'footer-default',
                'footer-dark',
                'footer-with-background',
                //...
                'header-default',
                'header-large-dark',
                'header-small-dark',
                'hidden-404',
                'hidden-bird',
                //...
            );
        
            /**
             * Filters the theme block patterns.
             */
            $block_patterns = apply_filters( 'twentytwentytwo_block_patterns', $block_patterns );
        
            foreach ( $block_patterns as $block_pattern ) {
                $pattern_file = get_theme_file_path( '/inc/patterns/' . $block_pattern . '.php' );
        
                register_block_pattern(
                    'twentytwentytwo/' . $block_pattern,
                    require $pattern_file
                );
            }
        }
        add_action( 'init', 'twentytwentytwo_register_block_patterns', 9 );</code></pre>
        
        
        
        <p>In this code example, each pattern listed in the <code>$block_patterns = array()</code> is called by <code>foreach()</code> function which <code>require</code>s a <code>patterns</code> directory file with the listed pattern name in the array which we will add in the next step.</p>
        
        
        
        <p><em><strong>2.2: Adding a pattern file to the <code>/inc/patterns</code> folder</strong></em></p>
        
        
        
        <p>Next, we should have all the listed patterns files in the <code>$block_patterns = array()</code>. Here is an example of one of the pattern files, <code>footer-with-background.php</code>:</p>
        
        
        
        <pre rel="PHP" class="wp-block-csstricks-code-block language-javascript" data-line=""><code markup="tt">/**
         * Dark footer wtih title and citation
         */
        return array(
            'title'      => __( 'Footer with background', 'twentytwentytwo' ),
            'categories' => array( 'footer' ),
            'blockTypes' => array( 'core/template-part/footer' ),
          'content'    => '&lt;!-- wp:group {"align":"full","style":{"elements":{"link":{"color":{"text":"var:preset|color|background"}}},"spacing":{"padding":{"top":"var(--wp--custom--spacing--small, 1.25rem)","bottom":"var(--wp--custom--spacing--small, 1.25rem)"}}},"backgroundColor":"background-header","textColor":"background","layout":{"inherit":true}} -->
              &lt;div class="wp-block-group alignfull has-background-color has-background-header-background-color has-text-color has-background has-link-color" style="padding-top:var(--wp--custom--spacing--small, 1.25rem);padding-bottom:var(--wp--custom--spacing--small, 1.25rem)">&lt;!-- wp:paragraph {"align":"center"} -->
              &lt;p class="has-text-align-center">' .
              sprintf(
                /* Translators: WordPress link. */
                esc_html__( 'Proudly powered by %s', 'twentytwentytwo' ),
                '&lt;a href="' . esc_url( __( 'https://wordpress.org', 'twentytwentytwo' ) ) . '" rel="nofollow">WordPress&lt;/a> | a modified TT2 theme.'
              ) . '&lt;/p>
              &lt;!-- /wp:paragraph -->&lt;/div>
                  &lt;!-- /wp:group -->',
        );</code></pre>
        
        
        
        <p>Let’s reference the pattern in the <code>footer.html</code> template part:</p>
        
        
        
        <pre rel="HTML" class="wp-block-csstricks-code-block language-markup" data-line=""><code markup="tt">&lt;!-- wp:template-part {"slug":"footer"} /--></code></pre>
        
        
        
        <p>This is similar to adding heading or footer parts in a template file.</p>
        
        
        
        <p>The patterns can similarly be added to the <code>parts/footer.html</code> template by modifying it to refer to <code>slug</code> of the theme’s pattern file (<code>footer-with-background</code>):</p>
        
        
        
        <pre rel="HTML" class="wp-block-csstricks-code-block language-markup" data-line=""><code markup="tt">&lt;!-- wp:pattern {"slug":"twentytwentytwo/footer-with-background"} /--></code></pre>
        
        
        
        <p>Now, if we visit the patterns inserter of the block editor, the <code>Footer with background</code> should be available for our use:</p>
        
        
        
        <figure class="wp-block-image size-large"><img loading="lazy" width="1024" height="267" src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-background.png?resize=1024%2C267&#038;ssl=1" alt="Screenshot of the pattern for Footer with background." class="wp-image-365873 jetpack-lazy-image" data-recalc-dims="1" data-lazy-srcset="https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-background.png?resize=1024%2C267&amp;ssl=1 1024w, https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-background.png?resize=300%2C78&amp;ssl=1 300w, https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-background.png?resize=768%2C200&amp;ssl=1 768w, https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-background.png?w=1100&amp;ssl=1 1100w" data-lazy-sizes="(min-width: 735px) 864px, 96vw" data-lazy-src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-background.png?resize=1024%2C267&amp;is-pending-load=1#038;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"><noscript><img loading="lazy" width="1024" height="267" src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-background.png?resize=1024%2C267&#038;ssl=1" alt="Screenshot of the pattern for Footer with background." class="wp-image-365873" srcset="https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-background.png?resize=1024%2C267&amp;ssl=1 1024w, https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-background.png?resize=300%2C78&amp;ssl=1 300w, https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-background.png?resize=768%2C200&amp;ssl=1 768w, https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-background.png?w=1100&amp;ssl=1 1100w" sizes="(min-width: 735px) 864px, 96vw" data-recalc-dims="1" /></noscript></figure>
        
        
        
        <p>The following screenshot shows the newly created footer with background pattern on the front-end.</p>
        
        
        
        <figure class="wp-block-image size-large"><img loading="lazy" width="1024" height="66" src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer.png?resize=1024%2C66&#038;ssl=1" alt="Screenshot of the footer background as it appears rendered on the site." class="wp-image-365874 jetpack-lazy-image" data-recalc-dims="1" data-lazy-srcset="https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer.png?resize=1024%2C66&amp;ssl=1 1024w, https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer.png?resize=300%2C19&amp;ssl=1 300w, https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer.png?resize=768%2C50&amp;ssl=1 768w, https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer.png?w=1294&amp;ssl=1 1294w" data-lazy-sizes="(min-width: 735px) 864px, 96vw" data-lazy-src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer.png?resize=1024%2C66&amp;is-pending-load=1#038;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"><noscript><img loading="lazy" width="1024" height="66" src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer.png?resize=1024%2C66&#038;ssl=1" alt="Screenshot of the footer background as it appears rendered on the site." class="wp-image-365874" srcset="https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer.png?resize=1024%2C66&amp;ssl=1 1024w, https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer.png?resize=300%2C19&amp;ssl=1 300w, https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer.png?resize=768%2C50&amp;ssl=1 768w, https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer.png?w=1294&amp;ssl=1 1294w" sizes="(min-width: 735px) 864px, 96vw" data-recalc-dims="1" /></noscript></figure>
        
        
        
        <p>Now that patterns have become the integral part of block theme, many patterns are bundled in block themes — like <a href="https://wordpress.org/themes/quadrat/" rel="noopener">Quadrat</a>, <a href="https://wordpress.org/themes/seedlet-blocks/" rel="noopener">Seedlet</a>, <a href="https://wordpress.org/themes/mayland-blocks/" rel="noopener">Mayland</a>, <a href="https://wordpress.org/themes/zoologist/" rel="noopener">Zoologist</a>, <a href="https://wordpress.org/themes/geologist/" rel="noopener">Geologist</a> — following the workflow discussed above. Here is an example of the Quadrat theme <code><a href="https://github.com/Automattic/themes/tree/trunk/quadrat/inc" rel="noopener">/inc/patterns</a></code> folder with a <a href="https://github.com/Automattic/themes/blob/trunk/quadrat/inc/block-patterns.php" rel="noopener">block-pattern registration</a> file and <a href="https://github.com/Automattic/themes/tree/trunk/quadrat/inc/patterns" rel="noopener">list of files</a> with content source and required pattern header <a href="https://github.com/Automattic/themes/blob/trunk/quadrat/inc/patterns/cover-with-heading.php" rel="noopener">within <code>return array()</code> function</a>.</p>
        
        
        
        <h3 id="section2creatingandloadingpatternswithoutregistration"><a href="#aa-section-2-creating-and-loading-patterns-without-registration" aria-hidden="true" class="aal_anchor" id="aa-section-2-creating-and-loading-patterns-without-registration"><svg aria-hidden="true" class="aal_svg" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Section 2: Creating and loading patterns without registration</h3>
        
        
        
        <p class="is-style-explanation">Please note that this feature requires the installation of WordPress 6.0 or Gutenberg plugin 13.0 or above in your site.</p>
        
        
        
        <p>This <a href="https://make.wordpress.org/core/2022/05/02/new-features-for-working-with-patterns-and-themes-in-wordpress-6-0/" rel="noopener">new WordPress 6.0 feature</a> allows pattern registration via standard files and folders &#8211; <code>/patterns</code>, bringing similar conventions like <code>/parts</code>, <code>/templates</code>, and <code>/styles</code>.</p>
        
        
        
        <p>The process, as also described in <a href="https://wptavern.com/gutenberg-12-9-adds-block-locking-ui-automatic-pattern-registration-and-full-theme-exports" rel="noopener">this WP Tavern</a> article, involves the following three steps:</p>
        
        
        
        <ul><li>creating a patterns folder at the theme’s root</li><li>adding plugin style pattern header</li><li>pattern source content</li></ul>
        
        
        
        <p>A typical pattern header markup, taken from the article is shown below:</p>
        
        
        
        <pre rel="PHP" class="wp-block-csstricks-code-block language-javascript" data-line=""><code markup="tt">&lt;?php
        /**
        * Title: A Pattern Title
        * Slug: namespace/slug
        * Description: A human-friendly description.
        * Viewport Width: 1024
        * Categories: comma, separated, values
        * Keywords: comma, separated, values
        * Block Types: comma, separated, values
        * Inserter: yes|no
        */
        ?></code></pre>
        
        
        
        <p>As described in the previous section, only <code>Title</code> and <code>Slug</code> fields are required and other fields are optional.</p>
        
        
        
        <p>Referencing examples from recently released themes, I refactored pattern registration in <a href="https://github.com/tinjure20/TT2-gopher-blocks" rel="noopener">this TT2 Gopher Blocks</a> demo theme, prepared for <a href="https://css-tricks.com/creating-style-variations-in-wordpress-block-themes/">a previous article on the CSS-Tricks</a>.</p>
        
        
        
        <p>In the following steps, let&#8217;s explore how a <code>footer-with-background.php</code> pattern <a href="https://github.com/tinjure20/TT2-gopher-blocks/blob/main/inc/patterns/footer-with-background.php" rel="noopener">registered with PHP</a> and used in a <code>footer.html</code> template is refactored.</p>
        
        
        
        <p><em><strong>2.1: Create a <code>/patterns</code> folder at the root of the theme</strong></em></p>
        
        
        
        <p>The first step is to create a <code>/patterns</code> folder at TT2 Gopher theme’s root and move the <code>footer-with-background.php</code> pattern file to <code>/patterns</code> folder and refactor.</p>
        
        
        
        <p><em><strong>2.2: Add pattern data to the file header</strong></em></p>
        
        
        
        <p>Next, create the following pattern header registration fields.</p>
        
        
        
        <pre rel="PHP" class="wp-block-csstricks-code-block language-javascript" data-line=""><code markup="tt">&lt;?php
        /**
        * Title: Footer with background
        * Slug: tt2gopher/footer-with-background
        * Categories: tt2gopher-footer
        * Viewport Width: 1280
        * Block Types: core/parts/footer
        * Inserter: yes
        */
        ?>
        &lt;!-- some-block-content /--></code></pre>
        
        
        
        <p>A pattern file has a top title field written as PHP comments. Followed by the <em>block-content</em> written in HTML format.</p>
        
        
        
        <p><em><strong>2.3: Add Pattern Content to the file</strong></em></p>
        
        
        
        <p>For the content section, let&#8217;s copy the code snippets within <a href="https://github.com/WordPress/twentytwentytwo/blob/trunk/inc/patterns/footer-dark.php#L9-L22" rel="noopener">single quotes</a> (e.g., <code>'...'</code>) from the content section of the <code>footer-with-background</code> and replace the <code>&lt;!-- some-block-content /--&gt;</code>:</p>
        
        
        
        <pre rel="HTML" class="wp-block-csstricks-code-block language-markup" data-line=""><code markup="tt">&lt;!-- wp:group {"align":"full","style":{"elements":{"link":{"color":{"text":"var:preset|color|foreground"}}},"spacing":{"padding":{"top":"35px","bottom":"30px"}}},"backgroundColor":"background-header","textColor":"foreground","className":"has-foreground","layout":{"inherit":true}} -->
            &lt;div class="wp-block-group alignfull has-foreground has-foreground-color has-background-header-background-color has-text-color has-background has-link-color" style="padding-top:35px;padding-bottom:30px">&lt;!-- wp:paragraph {"align":"center","fontSize":"small"} -->
            &lt;p class="has-text-align-center has-small-font-size">Powered by WordPress | TT2 Gopher, a modified TT2 theme&lt;/p>
            &lt;!-- /wp:paragraph -->&lt;/div>
        &lt;!-- /wp:group --></code></pre>
        
        
        
        <p>The entire code snippet of the <code>patterns/footer-with-background.php</code> file can be viewed <a href="https://github.com/tinjure20/TT2-gopher-blocks/blob/main/patterns/footer-with-background.php" rel="noopener">here on the GitHub</a>.</p>
        
        
        
        <p class="is-style-explanation">Please note that the <code>/inc/patterns</code> and <code>block-patterns.php</code> are <em>extras</em>, not required in WordPress 6.0, and included only for demo purposes.</p>
        
        
        
        <p><em><strong>2.4: Referencing the patterns slug in the template</strong></em></p>
        
        
        
        <p>Adding the above refactored <code>footer-with-background.php</code> pattern to <code>footer.html</code> template is exactly the same as described in the previous section (Section 1, 2.2).</p>
        
        
        
        <p>Now, if we view the site&#8217;s footer part in a block editor or front-end of our site in a browser, the footer section is displayed.</p>
        
        
        
        <h3 id="patterncategoriesandtypesregistrationoptional"><a href="#aa-pattern-categories-and-types-registration-optional" aria-hidden="true" class="aal_anchor" id="aa-pattern-categories-and-types-registration-optional"><svg aria-hidden="true" class="aal_svg" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Pattern categories and types Registration (optional)</h3>
        
        
        
        <p>To categorize block patterns, the pattern categories and types should be registered in theme’s <code>functions.php</code> file.</p>
        
        
        
        <p>Let&#8217;s consider an example of <a href="https://github.com/tinjure20/TT2-gopher-blocks/blob/main/functions.php#L141-L164" rel="noopener">registering block pattern categories</a> from the TT2 Gopher theme.</p>
        
        
        
        <p>After the registration, the patterns are displayed in the pattern inserter together with the core default patterns. To add theme specific category labels in the patterns inserter, we should modify the previous snippets by adding theme namespace:</p>
        
        
        
        <pre rel="PHP" class="wp-block-csstricks-code-block language-javascript" data-line=""><code markup="tt">/**
        * Registers block categories, and type.
        */
        
        function tt2gopher_register_block_pattern_categories() {
        
        $block_pattern_categories = array(
          'tt2gopher-header' => array( 'label' => __( 'TT2 Gopher - Headers', 'tt2gopher' ) ),
          'tt2gopher-footer' => array( 'label' => __( 'TT2 Gopher - Footers', 'tt2gopher' ) ),
          'tt2gopher-page' => array( 'label' => __( 'TT2 Gopher - Page', 'tt2gopher' ) ),
          // ...
        );
        
        /**
        * Filters the theme block pattern categories.
        */
        $block_pattern_categories = apply_filters( 'tt2gopher_block_pattern_categories', $block_pattern_categories );
        
        foreach ( $block_pattern_categories as $name => $properties ) {
          if ( ! WP_Block_Pattern_Categories_Registry::get_instance()->is_registered( $name ) ) {
            register_block_pattern_category( $name, $properties );
          }
        }
        add_action( 'init', 'tt2gopher_register_block_pattern_categories', 9 );</code></pre>
        
        
        
        <p>The <code>footer-with-background</code> pattern is visible in the patterns inserted with its preview (if selected):</p>
        
        
        
        <figure class="wp-block-image size-large"><img loading="lazy" width="1024" height="323" src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-pattern.png?resize=1024%2C323&#038;ssl=1" alt="Screenshot showing pattern category displayed in patterns inserter (left panel) and corresponding default footer pattern displayed in the editor (right panel)." class="wp-image-365875 jetpack-lazy-image" data-recalc-dims="1" data-lazy-srcset="https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-pattern.png?resize=1024%2C323&amp;ssl=1 1024w, https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-pattern.png?resize=300%2C95&amp;ssl=1 300w, https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-pattern.png?resize=768%2C242&amp;ssl=1 768w, https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-pattern.png?w=1100&amp;ssl=1 1100w" data-lazy-sizes="(min-width: 735px) 864px, 96vw" data-lazy-src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-pattern.png?resize=1024%2C323&amp;is-pending-load=1#038;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"><noscript><img loading="lazy" width="1024" height="323" src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-pattern.png?resize=1024%2C323&#038;ssl=1" alt="Screenshot showing pattern category displayed in patterns inserter (left panel) and corresponding default footer pattern displayed in the editor (right panel)." class="wp-image-365875" srcset="https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-pattern.png?resize=1024%2C323&amp;ssl=1 1024w, https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-pattern.png?resize=300%2C95&amp;ssl=1 300w, https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-pattern.png?resize=768%2C242&amp;ssl=1 768w, https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-pattern.png?w=1100&amp;ssl=1 1100w" sizes="(min-width: 735px) 864px, 96vw" data-recalc-dims="1" /></noscript></figure>
        
        
        
        <p>This process greatly simplifies creating and displaying block patterns in block themes. It is available in WordPress 6.0 without using the Gutenberg plugin.</p>
        
        
        
        <h4><a href="#aa-examples-of-themes-without-patterns-registration" aria-hidden="true" class="aal_anchor" id="aa-examples-of-themes-without-patterns-registration"><svg aria-hidden="true" class="aal_svg" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples of themes without patterns registration</h4>
        
        
        
        <p>Early adopters have already started using this feature in their block themes. A few examples of the themes, that are available from the <a href="https://wordpress.org/themes/tags/full-site-editing/" rel="noopener">theme directory</a>, that load patterns without registration are listed below:</p>
        
        
        
        <ul><li><a href="https://wordpress.org/themes/archeo/" rel="noopener">Archeo</a> – 12 patterns</li><li><a href="https://wordpress.org/themes/pendant/" rel="noopener">Pendant</a> – 13 patterns</li><li><a href="https://wordpress.org/themes/remote/" rel="noopener">Remote</a> – 11 patterns</li><li><a href="https://wordpress.org/themes/skatepark/" rel="noopener">Skatepark</a> – 10 patterns</li><li><a href="https://wordpress.org/themes/stewart/" rel="noopener">Stewart</a> – 17 patterns</li><li><a href="https://wordpress.org/themes/livro/" rel="noopener">Livro</a> – 16 patterns</li><li><a href="https://wordpress.org/themes/avant-garde/" rel="noopener">Avant-Garde</a> – 14 patterns</li></ul>
        
        
        
        <h3><a href="#aa-section-3-creating-and-using-patterns-with-low-code" aria-hidden="true" class="aal_anchor" id="aa-section-3-creating-and-using-patterns-with-low-code"><svg aria-hidden="true" class="aal_svg" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Section 3: Creating and using patterns with low-code</h3>
        
        
        
        <p>The <a href="https://wordpress.org/patterns/" rel="noopener">official patterns directory</a> contains community-contributed creative designs, which can be copied and customized as desired to create content. Using patterns with a block editor has never been so easier!</p>
        
        
        
        <p>Any patterns from the ever-growing directory can also be added to block themes just by simple “copy and paste” or include in the <code>theme.json</code> file by referring to their directory <em>pattern slug</em>. Next, I will go through briefly how easily this can be accomplished with very limited coding.</p>
        
        
        
        <h4><a href="#aa-adding-and-customizing-patterns-from-patterns-directory" aria-hidden="true" class="aal_anchor" id="aa-adding-and-customizing-patterns-from-patterns-directory"><svg aria-hidden="true" class="aal_svg" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Adding and customizing patterns from patterns directory</h4>
        
        
        
        <p><em><strong>3.1: Copy pattern from directory into a page</strong></em></p>
        
        
        
        <p>Here, I am using <a href="https://wordpress.org/patterns/pattern/footer-section-design-with-3-column-description-social-media-contact-and-newsletter/" rel="noopener">this footer section pattern</a> by FirstWebGeek from the patterns directory. Copied the pattern by selecting the “Copy Pattern” button and directly pasted it in a new page.</p>
        
        
        
        <p><em><strong>3.2: Make desired customization</strong></em>s</p>
        
        
        
        <p>I made only a few changes to the color of the fonts and button background. Then copied the entire code from the <em>code editor</em> over to a clipboard.</p>
        
        
        
        <figure class="wp-block-image size-large"><img loading="lazy" width="1024" height="253" src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-editor-1024x253.png?resize=1024%2C253&#038;ssl=1" alt="Screenshot showing modified pattern (left panel) and corresponding code in code editor (right panel)" class="wp-image-365876 jetpack-lazy-image" data-recalc-dims="1" data-lazy-srcset="https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-editor.png?resize=1024%2C253&amp;ssl=1 1024w, https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-editor.png?resize=300%2C74&amp;ssl=1 300w, https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-editor.png?resize=768%2C190&amp;ssl=1 768w, https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-editor.png?w=1354&amp;ssl=1 1354w" data-lazy-sizes="(min-width: 735px) 864px, 96vw" data-lazy-src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-editor-1024x253.png?resize=1024%2C253&amp;is-pending-load=1#038;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"><noscript><img loading="lazy" width="1024" height="253" src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-editor-1024x253.png?resize=1024%2C253&#038;ssl=1" alt="Screenshot showing modified pattern (left panel) and corresponding code in code editor (right panel)" class="wp-image-365876" srcset="https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-editor.png?resize=1024%2C253&amp;ssl=1 1024w, https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-editor.png?resize=300%2C74&amp;ssl=1 300w, https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-editor.png?resize=768%2C190&amp;ssl=1 768w, https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-editor.png?w=1354&amp;ssl=1 1354w" sizes="(min-width: 735px) 864px, 96vw" data-recalc-dims="1" /></noscript></figure>
        
        
        
        <p>If you are not familiar with using the code editor, go to options (with three dots, top right), click the Code editor button, and copy the entire code from here.</p>
        
        
        
        <p><em><strong>3.3: Create a new file in /patterns folder</strong></em></p>
        
        
        
        <p>First, let&#8217;s create a new <code>/patterns/footer-pattern-test.php</code> file and add the required pattern header section. Then paste the entire code (step 3, above). The pattern is categorized in the footer area (lines: 5), we can view the newly added in the pattern inserter.</p>
        
        
        
        <pre rel="PHP" class="wp-block-csstricks-code-block language-javascript" data-line=""><code markup="tt">&lt;?php
         /**
         * Title: Footer pattern from patterns library
         * Slug: tt2gopher/footer-pattern-test
         * Categories: tt2gopher-footer
         * Viewport Width: 1280
         * Block Types: core/template-part/footer
         * Inserter: yes
         */
        ?>
        
        &lt;!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"100px","bottom":"70px","right":"30px","left":"30px"}}},"backgroundColor":"black","layout":{"contentSize":"1280px"}} -->
        &lt;div class="wp-block-group alignfull has-black-background-color has-background" style="padding-top:100px;padding-right:30px;padding-bottom:70px;padding-left:30px">&lt;!-- wp:columns -->
        &lt;div class="wp-block-columns">&lt;!-- wp:column -->
        &lt;div class="wp-block-column">&lt;!-- wp:heading {"style":{"typography":{"fontStyle":"normal","fontWeight":"700","textTransform":"uppercase"}},"textColor":"cyan-bluish-gray"} -->
        &lt;h2 class="has-cyan-bluish-gray-color has-text-color" style="font-style:normal;font-weight:700;text-transform:uppercase">lorem&lt;/h2>
        &lt;!-- /wp:heading -->
        
        &lt;!-- wp:paragraph {"style":{"typography":{"fontSize":"16px"}},"textColor":"cyan-bluish-gray"} -->
        &lt;p class="has-cyan-bluish-gray-color has-text-color" style="font-size:16px">One of the main benefits of using Lorem Ipsum is that it can be easily generated, and it takes the pressure off designers to create meaningful text. Instead, they can focus on crafting the best website data.&lt;/p>
        &lt;!-- /wp:paragraph -->
        
        &lt;!-- wp:social-links {"iconColor":"vivid-cyan-blue","iconColorValue":"#0693e3","openInNewTab":true,"className":"is-style-logos-only","style":{"spacing":{"blockGap":{"top":"15px","left":"15px"}}}} -->
        &lt;ul class="wp-block-social-links has-icon-color is-style-logos-only">&lt;!-- wp:social-link {"url":"#","service":"facebook"} /-->
        
        &lt;!-- wp:social-link {"url":"#","service":"twitter"} /-->
        
        &lt;!-- wp:social-link {"url":"#","service":"instagram"} /-->
        
        &lt;!-- wp:social-link {"url":"#","service":"linkedin"} /-->&lt;/ul>
        &lt;!-- /wp:social-links -->&lt;/div>
        &lt;!-- /wp:column -->
        
        &lt;!-- wp:column -->
        &lt;div class="wp-block-column">&lt;!-- wp:heading {"level":4,"style":{"typography":{"textTransform":"capitalize","fontStyle":"normal","fontWeight":"700","fontSize":"30px"}},"textColor":"cyan-bluish-gray"} -->
        &lt;h4 class="has-cyan-bluish-gray-color has-text-color" style="font-size:30px;font-style:normal;font-weight:700;text-transform:capitalize">Contact Us&lt;/h4>
        &lt;!-- /wp:heading -->
        
        &lt;!-- wp:paragraph {"style":{"typography":{"fontSize":"16px","lineHeight":"1.2"}},"textColor":"cyan-bluish-gray"} -->
        &lt;p class="has-cyan-bluish-gray-color has-text-color" style="font-size:16px;line-height:1.2">123 BD Lorem, Ipsum&lt;br>&lt;br>+123-456-7890&lt;/p>
        &lt;!-- /wp:paragraph -->
        
        &lt;!-- wp:paragraph {"style":{"typography":{"fontSize":"16px","lineHeight":"1"}},"textColor":"cyan-bluish-gray"} -->
        &lt;p class="has-cyan-bluish-gray-color has-text-color" style="font-size:16px;line-height:1"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="f281939f829e97b2959f939b9edc919d9f">[email&#160;protected]</a>&lt;/p>
        &lt;!-- /wp:paragraph -->
        
        &lt;!-- wp:paragraph {"style":{"typography":{"fontSize":"16px","lineHeight":"1"}},"textColor":"cyan-bluish-gray"} -->
        &lt;p class="has-cyan-bluish-gray-color has-text-color" style="font-size:16px;line-height:1">Opening Hours: 10:00 - 18:00&lt;/p>
        &lt;!-- /wp:paragraph -->&lt;/div>
        &lt;!-- /wp:column -->
        
        &lt;!-- wp:column -->
        &lt;div class="wp-block-column">&lt;!-- wp:heading {"level":4,"style":{"typography":{"fontSize":"30px","fontStyle":"normal","fontWeight":"700","textTransform":"capitalize"}},"textColor":"cyan-bluish-gray"} -->
        &lt;h4 class="has-cyan-bluish-gray-color has-text-color" style="font-size:30px;font-style:normal;font-weight:700;text-transform:capitalize">Newsletter&lt;/h4>
        &lt;!-- /wp:heading -->
        
        &lt;!-- wp:paragraph {"style":{"typography":{"fontSize":"16px"}},"textColor":"cyan-bluish-gray"} -->
        &lt;p class="has-cyan-bluish-gray-color has-text-color" style="font-size:16px">Lorem ipsum dolor sit amet, consectetur ut labore et dolore magna aliqua ipsum dolor sit&lt;/p>
        &lt;!-- /wp:paragraph -->
        
        &lt;!-- wp:search {"label":"","placeholder":"Enter Your Email...","buttonText":"Subscribe","buttonPosition":"button-inside","style":{"border":{"width":"1px"}},"borderColor":"tertiary","backgroundColor":"background-header","textColor":"background"} /-->&lt;/div>
        &lt;!-- /wp:column -->&lt;/div>
        &lt;!-- /wp:columns -->&lt;/div>
        &lt;!-- /wp:group --></code></pre>
        
        
        
        <p><em><strong>3.4: View the new pattern in the inserter</strong></em></p>
        
        
        
        <p>To view the newly added <code>Footer pattern from patterns library</code> pattern, go to any post or page and select the inserter icon (blue plus symbol, top left), and then select “TT2 Gopher – Footer” categories. The newly added pattern is shown on the left panel, together with other footer patterns and its preview on the right (if selected):</p>
        
        
        
        <figure class="wp-block-image size-full"><img loading="lazy" width="1000" height="425" src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-inserter.png?resize=1000%2C425&#038;ssl=1" alt="Screenshot showing new footer pattern (left panel) and its preview (right panel)." class="wp-image-365877 jetpack-lazy-image" data-recalc-dims="1" data-lazy-srcset="https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-inserter.png?w=1000&amp;ssl=1 1000w, https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-inserter.png?resize=300%2C128&amp;ssl=1 300w, https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-inserter.png?resize=768%2C326&amp;ssl=1 768w" data-lazy-sizes="(min-width: 735px) 864px, 96vw" data-lazy-src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-inserter.png?resize=1000%2C425&amp;is-pending-load=1#038;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"><noscript><img loading="lazy" width="1000" height="425" src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-inserter.png?resize=1000%2C425&#038;ssl=1" alt="Screenshot showing new footer pattern (left panel) and its preview (right panel)." class="wp-image-365877" srcset="https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-inserter.png?w=1000&amp;ssl=1 1000w, https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-inserter.png?resize=300%2C128&amp;ssl=1 300w, https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/05/wp-block-pattern-footer-inserter.png?resize=768%2C326&amp;ssl=1 768w" sizes="(min-width: 735px) 864px, 96vw" data-recalc-dims="1" /></noscript></figure>
        
        
        
        <h4><a href="#aa-registering-patterns-directly-in-theme-json-file" aria-hidden="true" class="aal_anchor" id="aa-registering-patterns-directly-in-theme-json-file"><svg aria-hidden="true" class="aal_svg" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Registering patterns directly in <code>theme.json</code> file</h4>
        
        
        
        <p>In WordPress 6.0, it is possible to register any desired patterns from the pattern directory with <code>theme.json</code> file with the following syntax. The <a href="https://make.wordpress.org/core/2022/05/02/new-features-for-working-with-patterns-and-themes-in-wordpress-6-0/" rel="noopener">6.0 dev note states</a>, “the patterns field is an array of [<em>pattern slugs</em>] from the Pattern Directory. Pattern slugs can be extracted by the [URL] in single pattern view at the Pattern Directory.”</p>
        
        
        
        <pre rel="HTML" class="wp-block-csstricks-code-block language-markup" data-line=""><code markup="tt">{
            "version": 2,
            "patterns": ["short-text", "patterns-slug"]
        }</code></pre>
        
        
        
        <p>This <a href="https://www.youtube.com/watch?v=09affdqg0-E" rel="noopener">short WordPress 6.0 features video</a> demonstrates how patterns are registered in the <code>/patterns</code> folder (at 3:53) and registering the desired patterns from the pattern director in a <code>theme.json</code> file (at 3:13).</p>
        
        
        
        <figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
        <iframe loading="lazy" title="WordPress 6.0 features in 4mins - be upgrade ready" width="500" height="281" src="https://www.youtube.com/embed/09affdqg0-E?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div></figure>
        
        
        
        <p>Then, the registered pattern is available in the patterns inserter search box, which is then available for use just like theme-bundled patterns library.</p>
        
        
        
        <pre rel="HTML" class="wp-block-csstricks-code-block language-markup" data-line=""><code markup="tt">{
          "version": 2,
          "patterns": [ "footer-from-directory", "footer-section-design-with-3-column-description-social-media-contact-and-newsletter" ]
        }</code></pre>
        
        
        
        <p>In this example, the pattern slug <code>footer-section-design-with-3-column-description-social-media-contact-and-newsletter</code> from the <a href="https://wordpress.org/patterns/pattern/footer-section-design-with-3-column-description-social-media-contact-and-newsletter/" rel="noopener">earlier example</a> is registered via <code>theme.json</code>.</p>
        
        
        
        <h4><a href="#aa-page-creation-pattern-model" aria-hidden="true" class="aal_anchor" id="aa-page-creation-pattern-model"><svg aria-hidden="true" class="aal_svg" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Page creation pattern model</h4>
        
        
        
        <p>As part of “<a href="https://github.com/WordPress/gutenberg/issues/38529" rel="noopener">building with patterns</a>” initiatives, WordPress 6.0 <a href="https://make.wordpress.org/core/2022/05/03/page-creation-patterns-in-wordpress-6-0/" rel="noopener">offers a pattern modal option</a> to theme authors to add page layout patterns into block theme, allowing site users to select page layout patterns (e.g., an about page, a contact page, a team page, etc.) while creating a page. The following is an example taken from <a href="https://make.wordpress.org/core/2022/05/03/page-creation-patterns-in-wordpress-6-0/" rel="noopener">the dev note</a>:</p>
        
        
        
        <pre rel="PHP" class="wp-block-csstricks-code-block language-javascript" data-line=""><code markup="tt">register_block_pattern(
            'my-plugin/about-page',
            array(
                'title'      => __( 'About page', 'my-plugin' ),
                'blockTypes' => array( 'core/post-content' ),
                'content'    => '&lt;!-- wp:paragraph {"backgroundColor":"black","textColor":"white"} -->
                &lt;p class="has-white-color has-black-background-color has-text-color has-background">Write you about page here, feel free to use any block&lt;/p>
                &lt;!-- /wp:paragraph -->',
            )
        );</code></pre>
        
        
        
        <p class="is-style-explanation">This feature is currently <a href="https://github.com/WordPress/gutenberg/issues/38787#issuecomment-1110843422" rel="noopener">limited to Page Post Type</a> only and not for “Posts Post Type”, yet.</p>
        
        
        
        <p>The <em>page creation pattern modal</em> can also be disabled completely by removing the post-content block type of all the patterns. An example sample code <a href="https://make.wordpress.org/core/2022/05/03/page-creation-patterns-in-wordpress-6-0/" rel="noopener">is available here</a>.</p>
        
        
        
        <p class="is-style-explanation">You can follow and participate in GitHub’s discussion from the links listed under the resource section below.</p>
        
        
        
        <h4><a href="#aa-using-patterns-directory-to-build-page" aria-hidden="true" class="aal_anchor" id="aa-using-patterns-directory-to-build-page"><svg aria-hidden="true" class="aal_svg" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using patterns directory to build page</h4>
        
        
        
        <p>Patterns from the directory can also be used to create the desired post or page layout, similar to page builders. The <a href="https://gutenberghub.com/" rel="noopener">GutenbergHub</a> team has created <a href="https://builder.gutenberghub.com/" rel="noopener">an experimental online page builder app</a> using patterns directly from the directory (<a href="https://youtu.be/tFaq6lqSURo" rel="noopener">introductory video</a>). Then the codes from the app can be copied and pasted in a site, which greatly simplifies the building complex page layout process without coding.</p>
        
        
        
        <p>In <a href="https://www.youtube.com/watch?v=5Qw2SNWwirI" rel="noopener">this short video</a>, Jamie Marsland demonstrates (at 1:30) how the app can be used to create an entire page layout similar to page builder using desired page sections of the directory.</p>
        
        
        
        <h3><a href="#aa-wrapping-up" aria-hidden="true" class="aal_anchor" id="aa-wrapping-up"><svg aria-hidden="true" class="aal_svg" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Wrapping up</h3>
        
        
        
        <p>Patterns allow users to recreate their commonly used content layout (e.g., hero page, call out, etc.) in any page and lower the barriers to presenting content in styles, which were previously not possible without coding skills. Just like the <a href="https://wordpress.org/plugins/" rel="noopener">plugins</a> and <a href="https://wordpress.org/themes/" rel="noopener">themes</a> directories, the new <a href="https://wordpress.org/patterns/" rel="noopener">patterns</a> directory offers users options to use a wide range of patterns of their choices from the pattern directory, and write and display content in style.</p>
        
        
        
        <p>Indeed, <a href="https://wptavern.com/block-patterns-will-change-everything" rel="noopener">block patterns will change everything</a> and surely this is a <a href="https://richtabor.com/block-patterns/" rel="noopener">game changer</a> feature in the WordPress theme landscape. When the full potential of <a href="https://github.com/WordPress/gutenberg/issues/38529" rel="noopener">building with patterns</a> effort becomes available, this is going to change the way we design block themes and create beautiful content even with low-code knowledge. For many creative designers, the patterns directory may also provide an appropriate avenue to showcase their <a href="https://wordpress.org/news/2021/03/so-you-want-to-make-block-patterns/" rel="noopener">creativity</a>.</p>
        
        
        
        <hr class="wp-block-separator"/>
        
        
        
        <h3><a href="#aa-resources" aria-hidden="true" class="aal_anchor" id="aa-resources"><svg aria-hidden="true" class="aal_svg" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Resources</h3>
        
        
        
        <h4><a href="#aa-wordpress-6-0" aria-hidden="true" class="aal_anchor" id="aa-wordpress-6-0"><svg aria-hidden="true" class="aal_svg" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>WordPress 6.0</h4>
        
        
        
        <ul><li><a href="https://make.wordpress.org/core/2022/05/03/wordpress-6-0-field-guide/" rel="noopener">WordPress 6.0 Field Guide</a> (WordPress Core)</li><li><a href="https://www.youtube.com/watch?v=abaaVKl-beM" rel="noopener">Exploring WordPress 6.0: Style Variations, Block Locking UI, Writing Improvements</a> – 22 min video (Anne McCarthy)</li><li><a href="https://www.youtube.com/watch?v=09affdqg0-E" rel="noopener">WordPress 6.0 features in 4mins</a> (Dave Smith)</li><li><a href="https://kinsta.com/blog/wordpress-6-0/" rel="noopener">What’s New in WordPress 6.0: New Blocks, Style Switching, Template Editing, Webfonts API, and Much More</a> (Kinsta)</li></ul>
        
        
        
        <h4><a href="#aa-creating-patterns" aria-hidden="true" class="aal_anchor" id="aa-creating-patterns"><svg aria-hidden="true" class="aal_svg" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Creating patterns</h4>
        
        
        
        <ul><li><a href="https://fullsiteediting.com/lessons/introduction-to-block-patterns/" rel="noopener">Introduction to block patterns</a> (Full Site Editing)</li><li><a href="https://learn.wordpress.org/workshop/intro-to-block-patterns/" rel="noopener">Introduction to Block Patterns video</a>, 14 mins (Learn WordPress)</li><li><a href="https://developer.wordpress.org/block-editor/reference-guides/block-api/block-patterns/" rel="noopener">Block Patterns</a> (Block Editor Handbook)</li><li><a href="https://wordpress.org/news/2021/03/so-you-want-to-make-block-patterns/" rel="noopener">So you want to make block patterns?</a> (WordPress Blog)</li><li><a href="https://www.godaddy.com/garage/how-to-create-low-code-block-patterns-in-wordpress/" rel="noopener">How to create and share low-code Block Patterns in WordPress</a> (GoDaddy)</li></ul>
        
        
        
        <h4><a href="#aa-patterns-enhancement-github" aria-hidden="true" class="aal_anchor" id="aa-patterns-enhancement-github"><svg aria-hidden="true" class="aal_svg" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Patterns enhancement (GitHub)</h4>
        
        
        
        <ul><li><a href="https://github.com/WordPress/gutenberg/issues/38529" rel="noopener">Building with Patterns #38529</a></li><li><a href="https://github.com/WordPress/gutenberg/issues/39281" rel="noopener">Patterns as Sectioning Elements #39281</a></li><li><a href="https://github.com/WordPress/gutenberg/pull/40034" rel="noopener">Add: Option to pick a pattern on page creation. #40034</a></li><li><a href="https://github.com/WordPress/gutenberg/issues/38787" rel="noopener">Block Patterns for page creation. #38787</a></li><li><a href="https://github.com/WordPress/gutenberg/pull/39147" rel="noopener">Add: Page start options (templates and patterns) #39147</a></li></ul>
        
        
        
        <h4><a href="#aa-blog-articles" aria-hidden="true" class="aal_anchor" id="aa-blog-articles"><svg aria-hidden="true" class="aal_svg" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Blog articles</h4>
        
        
        
        <ul><li><a href="https://richtabor.com/block-patterns/" rel="noopener">Gutenberg Patterns: The Future of Page Building in WordPress</a> (Rich Tabor)</li><li><a href="https://www.godaddy.com/garage/using-block-patterns-to-speed-up-wordpress-site-builds/" rel="noopener">Using Block Patterns to speed up WordPress site builds</a> (GoDaddy)</li><li><a href="https://wptavern.com/block-patterns-will-change-everything" rel="noopener">Block Patterns Will Change Everything</a> (WP Tavern)</li></ul>
        
                  
                </div>
        
            </article>
        
          </main>
        
              <div class="entry-unrelated sidebar">
        
              <div id="all-modules">
        
              <div id="scroll-ad-position"></div>
              <div id="sticky-sidebar-stuff"></div>
        
            </div>
          
          </div>
          
        </div>
        
        <div class="related-ads-comments-wrap">
          <div class="related-ads-comments">
            <div class="articles-and-sidebar">
          <div class="after-article-note article-sponsor">
            DigitalOcean joining forces with CSS-Tricks! Special welcome offer: <a href="https://try.digitalocean.com/css-tricks/?utm_source=css-tricks.com&utm_medium=cta&utm_campaign=website_link">get $100 of free credit</a>.
          </div>
        </div>
        
        <section class="respond-area">
        
          
          
            <div class="respond">
        
              
                <div class="comment-form-form-area">
        
                      <div id="respond" class="comment-respond">
                <h3 id="reply-title" class="comment-reply-title">Leave a Reply <small><a rel="nofollow" id="cancel-comment-reply-link" href="/how-to-create-block-theme-patterns-in-wordpress-6-0/#respond" style="display:none;">Cancel reply</a></small></h3><form action="https://css-tricks.com/wp-comments-post.php" method="post" id="commentform" class="comment-form"><p class="comment-notes"><span id="email-notes">Your email address will not be published.</span> <span class="required-field-message" aria-hidden="true">Required fields are marked <span class="required" aria-hidden="true">*</span></span></p><p class="comment-form-comment"><label for="comment">Comment <span class="required" aria-hidden="true">*</span></label> <textarea id="comment" name="comment" cols="45" rows="8" maxlength="65525" required="required"></textarea></p><p class="comment-form-author"><label for="author">Name <span class="required" aria-hidden="true">*</span></label> <input id="author" name="author" type="text" value="" size="30" maxlength="245" required="required" /></p>
        <p class="comment-form-email"><label for="email">Email <span class="required">*</span></label> <input id="email" name="email" type="email" value="" size="30" maxlength="100" aria-describedby="email-notes" required="required"></p>
        <p class="comment-form-url"><label for="url">Website</label> <input id="url" name="url" type="text" value="" size="30" maxlength="200" /></p>
        <p class="comment-form-cookies-consent"><input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes" /> <label for="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label></p>
        <!-- Mailchimp for WordPress v4.8.7 - https://www.mc4wp.com/ --><input type="hidden" name="_mc4wp_subscribe_wp-comment-form" value="0" /><p class=" mc4wp-checkbox mc4wp-checkbox-wp-comment-form" ><label><input type="checkbox" name="_mc4wp_subscribe_wp-comment-form" value="1" checked="checked" /><span>Get the CSS-Tricks newsletter</span></label></p><!-- / Mailchimp for WordPress --><p class="form-submit"><input name="submit" type="submit" id="submit" class="submit" value="Post Comment" /> <input type='hidden' name='comment_post_ID' value='365841' id='comment_post_ID' />
        <input type='hidden' name='comment_parent' id='comment_parent' value='0' />
        </p><p style="display: none;"><input type="hidden" id="akismet_comment_nonce" name="akismet_comment_nonce" value="32c3303e88" /></p>		<p class="antispam-group antispam-group-q" style="clear: both;">
                    <label>Copy and paste this code: <strong class="antspmpro-input-a">micuno</strong> <span class="required">*</span></label>
                    <input type="hidden" name="antspmpro-a" class="antispam-control antispam-control-a" value="micuno" />
                    <input type="text" name="antspmpro-q-luwele" class="antispam-control antispam-control-q" value="4.1" />
                </p>
                <p class="antispam-group antispam-group-e" style="display: none;">
                    <label>Leave this field empty</label>
                    <input type="text" name="antspmpro-e-email-url-website-luwele" class="antispam-control antispam-control-e" value="" />
                </p>
        <p style="display: none !important;"><label>&#916;<textarea name="ak_hp_textarea" cols="45" rows="8" maxlength="100"></textarea></label><input type="hidden" id="ak_js_1" name="ak_js" value="126"/><script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>document.getElementById( "ak_js_1" ).setAttribute( "value", ( new Date() ).getTime() );</script></p></form>	</div><!-- #respond -->
            
                </div>
        
              
            </div>
          
        </section>          <div class="related-posts">
          <div id='jp-relatedposts' class='jp-relatedposts' >
            
        </div>  <div class="jetpack-sponsored-posts-message">
            <img src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1590422774/jetpack-logo_cegyqg.svg" alt="Jetpack Logo">
            <p>The related posts above were algorithmically generated and displayed here without any load on our servers at all, <a href="https://jetpack.com/support/related-posts/?aff=8638">thanks to Jetpack</a>.</p>
          </div>
        </div>      </div>
        </div>
        
          </div>
        
          <footer class="site-footer">
        
            <svg class="icon-logo-star" width="35px" height="35px" viewBox="0 0 362.62 388.52" data-spin-me="false">
          <path d="M156.58,239l-88.3,64.75c-10.59,7.06-18.84,11.77-29.43,11.77-21.19,0-38.85-18.84-38.85-40C0,257.83,14.13,244.88,27.08,239l103.6-44.74L27.08,148.34C13,142.46,0,129.51,0,111.85,0,90.66,18.84,73,40,73c10.6,0,17.66,3.53,28.25,11.77l88.3,64.75L144.81,44.74C141.28,20,157.76,0,181.31,0s40,18.84,36.5,43.56L206,149.52l88.3-64.75C304.93,76.53,313.17,73,323.77,73a39.2,39.2,0,0,1,38.85,38.85c0,18.84-12.95,30.61-27.08,36.5L231.93,194.26,335.54,239c14.13,5.88,27.08,18.83,27.08,37.67,0,21.19-18.84,38.85-40,38.85-9.42,0-17.66-4.71-28.26-11.77L206,239l11.77,104.78c3.53,24.72-12.95,44.74-36.5,44.74s-40-18.84-36.5-43.56Z" />
        </svg>
            <div class="footer-inside">
        
              <div class="footer-message-and-form">
                <p class="colophon">
                  CSS-Tricks is powered by <a href="https://www.digitalocean.com/?utm_source=css-tricks.com&utm_medium=cta&utm_campaign=website_link">DigitalOcean</a>.
                </p>
        
                <div class="footer-form-wrap">
        
          <h4>Keep up to date on web dev</h4>
        
          <p>with our hand-crafted newsletter</p>
        
          <script src="//anchor.digitalocean.com/js/forms2/js/forms2.min.js"></script>
          <form id="mktoForm_1402"></form>
          <script>MktoForms2.loadForm("//anchor.digitalocean.com", "113-DTN-266", 1402);</script>
        
        </div>      </div>
        
              <div class="link-grid">
        
                <div>
                  <div>
                    <h5>DigitalOcean</h5>
                    <ul>
                      <li><a href="https://www.digitalocean.com/?utm_source=css-tricks.com&utm_medium=cta&utm_campaign=website_link">DigitalOcean</a></li>
                      <li><a href="https://www.digitalocean.com/community/?utm_source=css-tricks.com&utm_medium=cta&utm_campaign=website_link">DigitalOcean Community</a></li>
                      <li><a href="https://www.digitalocean.com/about/?utm_source=css-tricks.com&utm_medium=cta&utm_campaign=website_link">About DigitalOcean</a></li>
                      <li><a href="https://www.digitalocean.com/legal/?utm_source=css-tricks.com&utm_medium=cta&utm_campaign=website_link">Legal</a></li>
                      <li><a href="https://try.digitalocean.com/css-tricks/?utm_source=css-tricks.com&utm_medium=cta&utm_campaign=website_link">Free Credit Offer</a></li>
                    </ul>
                  </div>
                </div>
        
                <div>
                  <div>
                    <h5>CSS-Tricks</h5>
                    <ul>
                      <li><a href="/cdn-cgi/l/email-protection#88ebfbfba5fcfae1ebe3fbc8ece1efe1fce9e4e7ebede9e6a6ebe7e5">Email</a></li>
                      <li><a href="/guest-writing-for-css-tricks/">Guest Writing</a></li>
                      <li><a href="/books/greatest-css-tricks/">Book</a></li>
                      <li><a href="/advertising/">Advertising</a></li>
                    </ul>
                  </div>
                </div>
        
                <div>
                  <div>
                    <h5>Follow</h5>
                    <ul style="columns: 2;">
                      <li><a href="https://twitter.com/css">Twitter</a></li>
                      <li><a href="https://www.instagram.com/real_css_tricks/">Instagram</a></li>
                      <li><a href="https://www.youtube.com/user/realcsstricks">YouTube</a></li>
                      <li><a href="https://codepen.io/team/css-tricks">CodePen</a></li>
                      <li><a href="https://podcasts.apple.com/us/podcast/css-tricks-screencasts/id273881728">iTunes</a></li>
                      <li><a href="/feed/">RSS</a></li>
                    </ul>
                  </div>
                </div>
        
              </div>
        
            </div>
        
            <a href="#top-of-site" class="top-of-site-link" data-visible="false">
              <span class="screen-reader-text">Back to Top</span>
              <svg width="32" height="32" viewBox="0 0 100 100">
          <path fill="white" d="m50 0c-13.262 0-25.98 5.2695-35.355 14.645s-14.645 22.094-14.645 35.355 5.2695 25.98 14.645 35.355 22.094 14.645 35.355 14.645 25.98-5.2695 35.355-14.645 14.645-22.094 14.645-35.355-5.2695-25.98-14.645-35.355-22.094-14.645-35.355-14.645zm20.832 62.5-20.832-22.457-20.625 22.457c-1.207 0.74219-2.7656 0.57812-3.7891-0.39844-1.0273-0.98047-1.2695-2.5273-0.58594-3.7695l22.918-25c0.60156-0.61328 1.4297-0.96094 2.2891-0.96094 0.86328 0 1.6914 0.34766 2.293 0.96094l22.918 25c0.88672 1.2891 0.6875 3.0352-0.47266 4.0898-1.1562 1.0508-2.9141 1.0859-4.1133 0.078125z"/>
        </svg>
            </a>
            
          </footer>
        
                  <div class="jetpack-instant-search__widget-area" style="display: none">
                                    <div id="jetpack-search-filters-6" class="widget jetpack-filters widget_search">			<div id="jetpack-search-filters-6-wrapper" class="jetpack-instant-search-wrapper">
                </div></div><div id="media_image-3" class="widget widget_media_image"><a href="https://jetpack.com/upgrade/search/?aff=8638"><img width="600" height="444" src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/09/Jetpack-Search-on-CSS-Tricks-Instant-Search.png?fit=600%2C444&amp;ssl=1" class="image wp-image-321694  attachment-full size-full jetpack-lazy-image" alt="" loading="lazy" style="max-width: 100%; height: auto;" data-lazy-srcset="https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/09/Jetpack-Search-on-CSS-Tricks-Instant-Search.png?w=600&amp;ssl=1 600w, https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/09/Jetpack-Search-on-CSS-Tricks-Instant-Search.png?resize=300%2C222&amp;ssl=1 300w" data-lazy-sizes="(min-width: 735px) 864px, 96vw" data-lazy-src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/09/Jetpack-Search-on-CSS-Tricks-Instant-Search.png?fit=600%2C444&amp;ssl=1&amp;is-pending-load=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" /></a></div>					</div>
                <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script  src='https://c0.wp.com/p/jetpack/10.9/_inc/build/photon/photon.min.js' id='jetpack-photon-js'></script>
        <script  src='https://css-tricks.com/wp-content/themes/CSS-Tricks-19/js/min/jquery-3.5.1.min.js' id='jquery-js'></script>
        <script type='text/javascript' id='antispampro-script-js-extra'>
        /* <![CDATA[ */
        var antispampro_vars = {"code":"micuno","input_name_suffix":"luwele"};
        /* ]]> */
        </script>
        <script  src='https://css-tricks.com/wp-content/plugins/anti-spam-pro/js/anti-spam-pro-4.1.js' id='antispampro-script-js'></script>
        <script  id='jetpack-instant-search-js-translations'>
        ( function( domain, translations ) {
            var localeData = translations.locale_data[ domain ] || translations.locale_data.messages;
            localeData[""].domain = domain;
            wp.i18n.setLocaleData( localeData, domain );
        } )( "jetpack-search-pkg", { "locale_data": { "messages": { "": {} } } } );
        </script>
        <script  id='jetpack-instant-search-js-before'>
        var JetpackInstantSearchOptions=JSON.parse(decodeURIComponent("%7B%22overlayOptions%22%3A%7B%22colorTheme%22%3A%22dark%22%2C%22enableInfScroll%22%3Afalse%2C%22enableSort%22%3Atrue%2C%22highlightColor%22%3A%22%23f4af38%22%2C%22overlayTrigger%22%3A%22results%22%2C%22resultFormat%22%3A%22expanded%22%2C%22showPoweredBy%22%3Atrue%2C%22defaultSort%22%3A%22relevance%22%2C%22excludedPostTypes%22%3A%5B%22attachment%22%5D%7D%2C%22homeUrl%22%3A%22https%3A%5C%2F%5C%2Fcss-tricks.com%22%2C%22locale%22%3A%22en-US%22%2C%22postsPerPage%22%3A11%2C%22siteId%22%3A45537868%2C%22postTypes%22%3A%7B%22post%22%3A%7B%22singular_name%22%3A%22Post%22%2C%22name%22%3A%22Posts%22%7D%2C%22page%22%3A%7B%22singular_name%22%3A%22Page%22%2C%22name%22%3A%22Pages%22%7D%2C%22attachment%22%3A%7B%22singular_name%22%3A%22Media%22%2C%22name%22%3A%22Media%22%7D%2C%22guides%22%3A%7B%22singular_name%22%3A%22Guide%22%2C%22name%22%3A%22Guides%22%7D%2C%22newsletters%22%3A%7B%22singular_name%22%3A%22Newsletter%22%2C%22name%22%3A%22Newsletters%22%7D%2C%22chapters%22%3A%7B%22singular_name%22%3A%22Chapter%22%2C%22name%22%3A%22Chapters%22%7D%7D%2C%22webpackPublicPath%22%3A%22https%3A%5C%2F%5C%2Fcss-tricks.com%5C%2Fwp-content%5C%2Fplugins%5C%2Fjetpack%5C%2Fjetpack_vendor%5C%2Fautomattic%5C%2Fjetpack-search%5C%2Fbuild%5C%2Finstant-search%5C%2F%22%2C%22isPhotonEnabled%22%3Atrue%2C%22apiRoot%22%3A%22https%3A%5C%2F%5C%2Fcss-tricks.com%5C%2Fwp-json%5C%2F%22%2C%22apiNonce%22%3A%2293726a81e7%22%2C%22isPrivateSite%22%3Afalse%2C%22isWpcom%22%3Afalse%2C%22hasOverlayWidgets%22%3Atrue%2C%22widgets%22%3A%5B%7B%22filters%22%3A%5B%7B%22name%22%3A%22Post%20Types%22%2C%22type%22%3A%22post_type%22%2C%22count%22%3A5%2C%22widget_id%22%3A%22jetpack-search-filters-6%22%2C%22filter_id%22%3A%22post_type_0%22%7D%2C%7B%22name%22%3A%22Topic%20Tags%22%2C%22type%22%3A%22taxonomy%22%2C%22taxonomy%22%3A%22topic-tag%22%2C%22count%22%3A5%2C%22widget_id%22%3A%22jetpack-search-filters-6%22%2C%22filter_id%22%3A%22taxonomy_1%22%7D%2C%7B%22name%22%3A%22Gallery%20Tags%22%2C%22type%22%3A%22taxonomy%22%2C%22taxonomy%22%3A%22gallerytags%22%2C%22count%22%3A5%2C%22widget_id%22%3A%22jetpack-search-filters-6%22%2C%22filter_id%22%3A%22taxonomy_2%22%7D%2C%7B%22name%22%3A%22Categories%22%2C%22type%22%3A%22taxonomy%22%2C%22taxonomy%22%3A%22category%22%2C%22count%22%3A5%2C%22widget_id%22%3A%22jetpack-search-filters-6%22%2C%22filter_id%22%3A%22taxonomy_3%22%7D%2C%7B%22name%22%3A%22Tags%22%2C%22type%22%3A%22taxonomy%22%2C%22taxonomy%22%3A%22post_tag%22%2C%22count%22%3A5%2C%22widget_id%22%3A%22jetpack-search-filters-6%22%2C%22filter_id%22%3A%22taxonomy_4%22%7D%2C%7B%22name%22%3A%22Year%22%2C%22type%22%3A%22date_histogram%22%2C%22count%22%3A5%2C%22field%22%3A%22post_date%22%2C%22interval%22%3A%22year%22%2C%22widget_id%22%3A%22jetpack-search-filters-6%22%2C%22filter_id%22%3A%22date_histogram_5%22%7D%5D%2C%22widget_id%22%3A%22jetpack-search-filters-6%22%7D%5D%2C%22widgetsOutsideOverlay%22%3A%5B%5D%2C%22hasNonSearchWidgets%22%3Atrue%2C%22adminQueryFilter%22%3A%7B%22bool%22%3A%7B%22should%22%3A%5B%7B%22term%22%3A%7B%22post_type%22%3A%22post%22%7D%7D%2C%7B%22term%22%3A%7B%22post_type%22%3A%22page%22%7D%7D%2C%7B%22term%22%3A%7B%22post_type%22%3A%22newsletters%22%7D%7D%2C%7B%22term%22%3A%7B%22post_type%22%3A%22chapters%22%7D%7D%5D%7D%7D%7D"));
        </script>
        <script  src='https://css-tricks.com/wp-content/plugins/jetpack/jetpack_vendor/automattic/jetpack-search/build/instant-search/jp-search.js?minify=false&#038;ver=68d2afacd9f8da5aa61f146e5f26fa6f' id='jetpack-instant-search-js'></script>
        <script  src='//stats.wp.com/w.js?ver=202223' id='jp-tracks-js'></script>
        <script type='text/javascript' id='jetpack-live-comment-markdown-js-extra'>
        /* <![CDATA[ */
        var markdownify = {"ajax_url":"\/wp-admin\/admin-ajax.php","nonce":"fa209d9ee3"};
        /* ]]> */
        </script>
        <script  src='https://css-tricks.com/wp-content/plugins/jetpack-markdown-live-preview-comments/js/markdownify.js?ver=1' id='jetpack-live-comment-markdown-js'></script>
        <script  src='https://css-tricks.com/wp-content/themes/CSS-Tricks-19/js/min/comment-reply.min.js?ver=1.1' id='my-comment-reply-js'></script>
        <script  src='https://css-tricks.com/wp-content/plugins/jetpack/jetpack_vendor/automattic/jetpack-lazy-images/dist/intersection-observer.js?minify=false&#038;ver=b5fe079abfcad78b7237774a0b3115aa' id='jetpack-lazy-images-polyfill-intersectionobserver-js'></script>
        <script type='text/javascript' id='jetpack-lazy-images-js-extra'>
        /* <![CDATA[ */
        var jetpackLazyImagesL10n = {"loading_warning":"Images are still loading. Please cancel your print and try again."};
        /* ]]> */
        </script>
        <script  src='https://css-tricks.com/wp-content/plugins/jetpack/jetpack_vendor/automattic/jetpack-lazy-images/dist/lazy-images.js?minify=false&#038;ver=567470f2f8d6d97f1a9cb9b77b0e503c' id='jetpack-lazy-images-js'></script>
        <script src='https://stats.wp.com/e-202223.js' defer></script>
        <script>
            _stq = window._stq || [];
            _stq.push([ 'view', {v:'ext',j:'1:10.9',blog:'45537868',post:'365841',tz:'-7',srv:'css-tricks.com'} ]);
            _stq.push([ 'clickTrackerInit', '45537868', '365841' ]);
        </script>
        
          <script src="https://css-tricks.com/wp-content/themes/CSS-Tricks-19/js/min/global-concat.min.js?cache_bust=1647301887393"></script>
        
        
        
        
        
        <script>
          // Google Analytics
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
          ga('create', 'UA-68528-29', 'auto');
        
          if (typeof articleYear !== "undefined") {
            ga('set', 'dimension1', articleYear);
          }
          if (typeof articleAuthor !== "undefined") {
            ga('set', 'dimension2', articleAuthor);
          }
          if (typeof articleType !== "undefined") {
            ga('set', 'dimension3', articleType);
          }
        
          ga('send', 'pageview');
        </script>
        
        <script>
          // Segment Analytics
          !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="nnmtLrk127wcC9ggBpAutRr4F4x4TMVz";;analytics.SNIPPET_VERSION="4.15.3";
          analytics.load("nnmtLrk127wcC9ggBpAutRr4F4x4TMVz");
        
          const analyticsProperties = {};
          if (typeof articleID !== "undefined") {
            analyticsProperties.article_id = articleID;
          }
          if (typeof articleYear !== "undefined") {
            analyticsProperties.article_year = articleYear;
          }
          if (typeof articleAuthor !== "undefined") {
            analyticsProperties.article_author = articleAuthor;
          }
          if (typeof articleType !== "undefined") {
            analyticsProperties.article_type = articleType;
          }
        
          analytics.page({
            properties: analyticsProperties
          });
          }}();
        </script>
          <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
        
        
          <script src="//instant.page/5.1.0" type="module" integrity="sha384-by67kQnR+pyfy8yWP4kPO12fHKRLHZPfEsiSXR8u2IKcTdxD805MGUXBzVPnkLHw"></script>
        
          <svg width="0" height="0" class="screen-reader">
            <defs>
        
              <linearGradient id="orange-to-pink" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stop-color="#ff7a18" />
                <stop offset="40%" stop-color="#af002d" />
                <stop offset="100%" stop-color="#319197" />
              </linearGradient>
        
              <filter id="duotone_orange_pink">
                <feColorMatrix type="matrix" result="grayscale" values="1 0 0 0 0
                          1 0 0 0 0
                          1 0 0 0 0
                          0 0 0 1 0">
                </feColorMatrix>
                <feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
                  <feFuncR type="table" tableValues="0.7411764706 0.9882352941"></feFuncR>
                  <feFuncG type="table" tableValues="0.0431372549 0.7333333333"></feFuncG>
                  <feFuncB type="table" tableValues="0.568627451 0.05098039216"></feFuncB>
                  <feFuncA type="table" tableValues="0 1"></feFuncA>
                </feComponentTransfer>
              </filter>
        
            </defs>
          </svg>
        
          </body>
        
          </html>`
        const expected = "---\ntitle: Title\n---\n" 
        const md = html2markdown(html,{
           frontmatter: {
               props: ['title']
           }
        })
        expect(md).toBe(expected)
    })
})