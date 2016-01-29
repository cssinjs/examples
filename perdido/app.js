(function() {
  //Setup JSS
  var jss = window.jss,
      jssExtend = window.jssExtend,
      jssNested = window.jssNested,
      jssCamelCase = window.jssCamelCase,
      jssDefaultUnit = window.jssDefaultUnit,
      jssVendorPrefixer = window.jssVendorPrefixer,
      jssPropsSort = window.jssPropsSort,
      perdido = window.perdido

  jss.use(jssExtend())
  jss.use(jssNested())
  jss.use(jssCamelCase())
  jss.use(jssDefaultUnit())
  jss.use(jssVendorPrefixer())
  jss.use(jssPropsSort())


  // Get the template
  var template = document.getElementById('template').innerHTML;

  // Attach the reset styles.
  jss.createStyleSheet(window.setupStyles, {named: false}).attach()
  var sheet = jss.createStyleSheet(window.styles).attach()

  // Replace the class names with the JSS generated ones.
  document.body.innerHTML = template
    .replace('{awesomeHeader}', sheet.classes.awesomeHeader)
    .replace('{coolDescription}',
      `${sheet.classes.coolDescription} ${sheet.classes.centerSections}`)
    .replace('{fourUp}',
      `${sheet.classes.fourUp} ${sheet.classes.centerSections}`)
    .replace('{offset}',
      `${sheet.classes.offset} ${sheet.classes.centerSections}`)
    .replace('{nested}',
      `${sheet.classes.nested} ${sheet.classes.centerSections}`)
    .replace('{aligned}',
      `${sheet.classes.aligned} ${sheet.classes.centerSections}`)
    .replace('{cycled}',
      `${sheet.classes.cycled} ${sheet.classes.centerSections}`)
    .replace('{vertical}',
      `${sheet.classes.vertical} ${sheet.classes.centerSections}`)
    .replace('{mmmWaffles}',
      `${sheet.classes.mmmWaffles} ${sheet.classes.centerSections}`)
    .replace('{diffSizes}',
      `${sheet.classes.diffSizes} ${sheet.classes.centerSections}`)
    .replace('{reordered}',
      `${sheet.classes.reordered} ${sheet.classes.centerSections}`)
    .replace(/\{purdyArticles\}/g, sheet.classes.purdyArticles);
}())