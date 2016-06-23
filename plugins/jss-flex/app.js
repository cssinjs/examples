(function() {

  jss.use(jssNested())
  jss.use(jssFlex())
  //jss.use(jssCamelCase())
  //jss.use(jssDefaultUnit())

  // Get the template
  var template = document.getElementById('template').innerHTML;

  // Attach the reset styles.
  jss.createStyleSheet(window.resetStyles, {named: false}).attach()

  var sheet = jss.createStyleSheet(window.layoutStyles).attach()

  // Replace the class names with the JSS generated ones.
  document.body.innerHTML = template
    .replace('{layout}', sheet.classes.layout)
    .replace('{header}', sheet.classes.header)
    .replace('{description}',
      `${sheet.classes.description} ${sheet.classes.center}`)
    .replace('{fourUp}',
      `${sheet.classes.fourUp} ${sheet.classes.center}`)
    .replace('{offset}',
      `${sheet.classes.offset} ${sheet.classes.center}`)
    .replace('{nested}',
      `${sheet.classes.nested} ${sheet.classes.center}`)
    .replace('{aligned}',
      `${sheet.classes.aligned} ${sheet.classes.center}`)
    .replace('{cycled}',
      `${sheet.classes.cycled} ${sheet.classes.center}`)
    .replace('{vertical}',
      `${sheet.classes.vertical} ${sheet.classes.center}`)
    .replace('{mmmWaffles}',
      `${sheet.classes.mmmWaffles} ${sheet.classes.center}`)
    .replace('{diffSizes}',
      `${sheet.classes.diffSizes} ${sheet.classes.center}`)
    .replace('{reordered}',
      `${sheet.classes.reordered} ${sheet.classes.center}`)
    .replace(/\{article\}/g, sheet.classes.article);
}())
