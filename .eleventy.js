module.exports = function(eleventyConfig) {
    // Výchozí výstupní složka je: _site
    // Zkopírovat images/ do _site/images
    eleventyConfig.addPassthroughCopy("image");
    // Zkopírovat css/ to _site/css/
    eleventyConfig.addPassthroughCopy("css");
    // Zkopírovat css/ to _site/fonts/
    eleventyConfig.addPassthroughCopy("fonts");

    return {
        // možné formáty šablon
        templateFormats: ["njk", "html", "md"],
        // jako šablonovací jazyk zvolíme Nunjucks`
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
      }    

   };
   